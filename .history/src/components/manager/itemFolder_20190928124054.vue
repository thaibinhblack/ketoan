<template>
    <v-col cols="12" sm="4" md="3" v-for="(folder,index) in folders" :key="index">
                        <div class="item-folder">
                            <v-icon>mdi-folder-open</v-icon> 
                            <router-link :to="'/manager/folder/'+folder.UUID_FOLDER_MANAGEMENT"><span>{{folder.NAME_FOLDER}}</span></router-link>
                            <v-list class="group-function">
                            <v-list-item link @click="updateFolder(folder)">
                                <v-list-item-icon><v-icon>mdi-details</v-icon></v-list-item-icon>
                                <v-list-item-title>Chi tiết</v-list-item-title>
                            </v-list-item>
                             <v-list-item link @click="addAccountFolder(folder)">
                                <v-list-item-icon><v-icon>mdi-account-group</v-icon></v-list-item-icon>
                                <v-list-item-title>Thành viên</v-list-item-title>
                            </v-list-item>
                            <v-list-item link @click="ApiDeleteFolder(folder.UUID_FOLDER_MANAGEMENT)">
                                <v-list-item-icon><v-icon>mdi-delete</v-icon></v-list-item-icon>
                                <v-list-item-title>Xóa</v-list-item-title>
                            </v-list-item>
                        </v-list>
                        </div>
                    </v-col>
</template>
<script>
export default {
    props: ["folder"]
}
</script>