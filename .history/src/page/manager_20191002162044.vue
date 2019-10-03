<template>
    <div id="page-manager">
        <v-row class="wrap-main">
            <side-bar  :active="true"/>
             
            <div class="maincontent">
                <v-toolbar dense width="100%"> 
                    <div class="flex-grow-1"></div>
                    <v-btn icon @click="notify()">
                       
                        <v-icon>mdi-bell</v-icon>
                         <span class="text-notify">2</span>
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
export default {
    components: {
        'side-bar': () => import('@/components/sideBar.vue'),
       
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
        notify()
        {

        }
    },
    created()
    {
        this.$http.get(this.$store.state.API_URL + 'user?api_token='+this.$session.get('token')+'&get_data=1').then((response) => {
            this.$store.state.user = response.data
        })
    }
   
}
</script>

<style scoped>
.maincontent {width: calc(100% - 260px);}
#layout-main {padding: 15px;}
#page-manager, .wrap-main {height: 100%}
.text-notify {position: absolute;bottom: -5px;right: 5px;color: rgba(0, 0, 255, 0.74)}
</style>