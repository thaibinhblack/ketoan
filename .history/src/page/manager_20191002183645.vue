<template>
    <div id="page-manager">
        <v-row class="wrap-main">
            <side-bar  :active="true"/>
             
            <div class="maincontent">
                <v-toolbar dense width="100%"> 
                    <div class="flex-grow-1"></div>
                    <v-btn class="btn-notify" icon @click="notify()" >
                        <v-icon>mdi-bell</v-icon>
                        <span class="text-notify">{{notifyData.number}}</span>
                        
                    </v-btn>
                    
                    <v-btn icon @click="logout()">
                        <v-icon>mdi-logout</v-icon>
                    </v-btn>
                </v-toolbar>
                <div class="list-notify">
                    <ul class="ul-notify">
                        <li>Thông báo <span class="btn-close"><v-icon>mdi-close</v-icon></span></li>
                        <li v-for="(notify,i) in notifyData.data" :key="i">
                            <p>{{notify.NAME_FOLDER}}</p>
                            <small>{{notify.CREATED_AT}}</small>
                        </li>
                    </ul>
                </div>
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
    data()
    {
        return {
            notifyData: {
                data: [],
                number: 0
            }
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
        notify()
        {
            this.$http.get(this.$store.state.API_URL + 'manager/folder?api_token='+this.$session.get('token')+'&status=0').then((response) => {
                this.notifyData.number = response.data.length
                this.notifyData.data = response.data
            })
        }
    },
    created()
    {
        this.$http.get(this.$store.state.API_URL + 'user?api_token='+this.$session.get('token')+'&get_data=1').then((response) => {
            this.$store.state.user = response.data
        })
        this.notify()
    }
   
}
</script>

<style scoped>
.maincontent {width: calc(100% - 260px);}
#layout-main {padding: 15px;}
#page-manager, .wrap-main {height: 100%}
.btn-notify {position: relative;}
.text-notify {position: absolute;bottom: -5px;right: 5px;color: rgba(0, 0, 255, 0.74)}
.list-notify {position: fixed;top: 0px;right: 105px;z-index: 99999;}
.ul-notify {background: #e2e2e2;padding-left: 0;width: 300px;max-height: 100%;z-index: 999;}
.ul-notify li {list-style: none;text-align: left;padding: 15px;background: #fff;border: 1px solid #e2e2e2;
border-top: none;cursor: pointer;}
.ul-notify li P {margin: 0;}
.ul-notify li:first-child {background: #eeeeee;border-top: 1px solid #e2e2e2}
.btn-close {float: right;cursor: pointer;}
.ul-notify li:hover {background: #eeeeee}
</style>