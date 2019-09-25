<template>
    <div id="page-manager">
        <v-row>
            <side-bar  :active="true"/>
             
            <div class="maincontent">
                <v-toolbar dense width="100%"> 
                    <v-icon>mdi-bar</v-icon>
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

</style>