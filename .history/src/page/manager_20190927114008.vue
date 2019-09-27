<template>
    <div id="page-manager">
        <v-row class="wrap-main">
            <side-bar  :active="true"/>
             
            <div class="maincontent">
                <v-toolbar dense width="100%"> 
                    <v-btn><v-icon>mdi-logout</v-icon></v-btn>
                </v-toolbar>
                <div id="layout-main">
                        <router-view></router-view>
                </div>
                
            </div>
        </v-row>
        
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    components: {
        'side-bar': () => import('@/components/sideBar.vue'),
       
    },
   
}
</script>

<style scoped>
.maincontent {width: calc(100% - 260px);}
#layout-main {padding: 15px;}
#page-manager, .wrap-main {height: 100%}
</style>