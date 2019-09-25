<template>
    <div id="page-manager">
        <v-row>
            <side-bar  :active="true"/>
             
            <div class="maincontent">
                <v-toolbar dense width="100%"> 
                </v-toolbar>
                <div id="layout-main">
                    
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
.item-folder {border: 1px solid #e2e2e2;padding: 8px 10px;background: #e2e2e2; border-radius: 5px;cursor: pointer;}
.item-folder:hover {background: #cce8ff;}
.item-folder.active {background: #cce8ff;}
.item-folder i {color: #f3cf6d;}
.item-folder span {font-weight: bold;margin-left: 10px;}
</style>