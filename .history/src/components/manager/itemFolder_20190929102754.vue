<template>
    <v-col cols="12" sm="4" md="3" >
                        <div class="item-folder">
                            <v-icon>mdi-folder-open</v-icon> 
                            <router-link  v-if="detail != true" :to="'/manager/folder/'+folder.UUID_FOLDER_MANAGEMENT"><span>{{folder.NAME_FOLDER}}</span></router-link>
                            <span v-else @click="$emit('FilterFolder',folder.UUID_FOLDER_MANAGEMENT)">{{folder.NAME_FOLDER}}</span>
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
    props: ["folder","detail"],
    data()
    {
        return {
            message: {}
        }
    },
    methods:
    {
        updateFolder(folder)
        {
            console.log(folder)
            this.$emit("folderUpdate",folder)
            this.$emit("dialogUpdate",true)
            this.$emit("openUpdate",true)
        },
        ApiDeleteFolder(UUID)
        {
            this.$http.post(this.$store.state.API_URL + 'folder/'+UUID+'/delete?api_token='+this.$session.get('token')).then(() => {
                this.message.type = 'success'
                this.message.text = 'Bạn xóa thư mục thành công!'
                this.$emit("message",this.message)
                
            }).catch(() => {
                this.message.type = 'error'
                this.message.type = 'Lôi! xin vui lòng thử lại!'
                this.$emit("message",this.message)
            })
        },
        addAccountFolder(folder)
        {
            // this.folderAccount = folder
            // this.dialog_account = true
            this.$emit("folderAccount",folder)
            this.$emit("dialog_account",true)
        }   
    },
    beforeDestroy()
    {
        console.log('destroy')
        this.$store.state.folderSelected = this.folder
    }
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