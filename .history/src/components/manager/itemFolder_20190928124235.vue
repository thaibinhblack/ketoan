<template>
    <v-col cols="12" sm="4" md="3" >
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
<style scoped>
.item-folder {border: 1px solid #e2e2e2;padding: 8px 10px;background: #e2e2e2; border-radius: 5px;cursor: pointer;position: relative;}
.item-folder:hover {background: #cce8ff;}
.item-folder.active {background: #cce8ff;}
.item-folder i {color: #f3cf6d;}
.item-folder span {font-weight: bold;margin-left: 10px;}
.group-function {position: absolute;width: 100%;top: 100%;left: 0;display: none;background:#cce8ff;z-index: 9999;}
.item-folder:hover>.group-function {display: block}
</style>