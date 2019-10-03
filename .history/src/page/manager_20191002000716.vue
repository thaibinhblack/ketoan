<template>
    <div id="page-manager">
        <v-row class="wrap-main">
            <side-bar  :active="true"/>
             {{token}}
            <div class="maincontent">
                <v-toolbar dense width="100%"> 
                    <div class="flex-grow-1"></div>
                    <v-btn  icon @click="notifyFirebase()">
                        <v-icon>mdi-bell</v-icon>
                    </v-btn>
                    <v-btn icon @click="logout()">
                        <v-icon>mdi-logout</v-icon>
                    </v-btn>
                </v-toolbar>
                <div id="layout-main">
                        <router-view></router-view>
                </div>
                
            </div>
        </v-row>
        <v-overlay :value="$store.state.loading">
            <v-progress-circular indeterminate size="50"></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import * as firebase from 'firebase'

import axios from 'axios'
import Vue from 'vue'
export default {
    sockets: {
        connect: function () {
            console.log('socket connected')
        },
        customEmit: function (data) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        }
    },
    components: {
        'side-bar': () => import('@/components/sideBar.vue'),
       
    },
    data()
    {
        return {
            token: ''
        }
    },
    methods:{
        logout()
        {
            this.$http.post(this.$store.state.API_URL + 'user/logout?api_token='+this.$session.get('token')).then(() => {
                this.$session.destroy()
                this.$router.push('/')
            })
            //  this.$session.destroy()
            // this.$router.push('/')
        },
        notifyFirebase()
        {
            
            
            firebase.messaging().onMessage((payload) => {
            console.log('Message received. ', payload);
            });

        }
    },
    async created()
    {
        this.$http.get(this.$store.state.API_URL + 'user?api_token='+this.$session.get('token')+'&get_data=1').then((response) => {
            this.$store.state.user = response.data
        })
        const messaging = firebase.messaging();
        var token_main = await ''
        await messaging.requestPermission().then(async (permission) => {

            return  await messaging.getToken();
        }).then(async (token) => {
            token_main = await token
            // await console.log('token',token_main) 
        })
        .catch(function (err) {
            console.log('Permission denied', err);
        });
        await console.log('token',token_main)
        await axios.get('http://127.0.0.1:8000/api/notify?api_token='+this.$session.get('token')+'&NOTIFY_TOKEN='+token_main)
        messaging.onMessage( async  (payload) => {
            await console.log('Message received. ', payload);
        });
    },
    mounted()
    {
       

    }
   
}
</script>

<style scoped>
.maincontent {width: calc(100% - 260px);}
#layout-main {padding: 15px;}
#page-manager, .wrap-main {height: 100%}
</style>