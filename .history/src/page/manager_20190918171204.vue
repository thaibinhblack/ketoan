<template>
    <div id="page-manager">
        <v-row>
            <side-bar  :active="true"/>
            <div class="maincontent">
                <v-toolbar dense width="100%">
                    
                </v-toolbar>
                <v-row>
                    <v-col cols="12" sm="4">
                        <span class="title-content">Danh sách danh mục</span>
                    </v-col>
                    <v-col cols="12" sm="8">
                        <ul class="list-link">
                            <li><v-icon>mdi-home</v-icon> Home</li>
                            <li><v-icon>mdi-chevron-right</v-icon></li>
                            <li><v-icon>mdi-folder-open</v-icon> Thư mục</li>
                        </ul>
                    </v-col>
                </v-row>
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

<style scoped>
.maincontent {width: calc(100% - 250px);padding: 15px}
</style>