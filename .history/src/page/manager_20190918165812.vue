<template>
    <div id="page-manager">
        <v-row>
            <side-bar  :active="true"/>
            <div class="maincontent">
                <v-toolbar>
                    
                </v-toolbar>
            </div>
        </v-row>
    </div>
</template>

<script>
export default {
    components: {
        'side-bar': () => import('@/components/sideBar.vue')
    }
}
</script>