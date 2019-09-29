<template>
    <v-row>
        <v-col cols="12" sm="4">
            <span class="title-content">Thư mục</span>
        </v-col>
        <v-col cols="12" sm="8">
            <ul class="list-link">
                <li><v-icon>mdi-home</v-icon> Home</li>
                <li><v-icon>mdi-chevron-right</v-icon></li>
                <li><router-link to="/manager/folders" style="color:#333;"><v-icon>mdi-folder-open</v-icon> Danh sách thư mục</router-link></li>
                <li style="cursor:pointer;" v-for="(link,id) in list_folder" :key="id" @click="updateLink(link,index)"><v-icon>mdi-chevron-right</v-icon> <v-icon>mdi-folder-open</v-icon>{{link.NAME_FOLDER}}</li>
            </ul>
        </v-col>
        <v-col cols="12" sm="4" md="3">
            <v-select
                :items="months"
                v-model="month"
                width="200px"
                label="Tháng"
            ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
            <v-card>
                <v-card-title primary-title>
                    <v-row>
                        <v-col cols="12" sm="12">
                            <button class="btn btn-add" @click="dialog_addfolder = true"> <v-icon>mdi-folder-plus</v-icon> Thêm mới thư mục</button>
                        </v-col>
                        <v-col cols="12" v-if="message.text != null">
                            <v-alert :type="message.type" :value="true">
                                {{message.text}}
                            </v-alert>
                        </v-col>
                    </v-row>
                </v-card-title>
               <v-card-text>
                    <v-row style="padding:15px;">
                        <v-col cols="12" sm="4" md="3">
                            <div class="item-file" style="text-align:center" @click="dialog = true">
                                <v-icon>mdi-upload</v-icon> 
                                <span>Upload file</span>
                            </div>
                        </v-col>
                       <item-folder v-for="(fd,key) in folders" :key="key" 
                        :folder="fd" 
                        :detail="true"
                        @FilterFolder="folder_filter = $event"
                        @dialog_account="dialog_account = $event"
                        @folderUpdate="folder = $event"
                        @dialogUpdate="dialog = $event"
                        @openUpdate="update = $event"
                        @message="message = $event"
                        />
                        <v-col cols="12" sm="4" md="3" v-for="(file, index) in files" :key="index">
                            <div class="item-file">
                                <span class="type_file">{{file.TYPE_FILE}}</span>
                                <v-icon>mdi-file</v-icon> 
                                <span class="text">{{file.NAME_FILE}}</span>
                                <v-list class="group-function">
                                    <v-list-item link>
                                        <v-list-item-icon><v-icon>mdi-details</v-icon></v-list-item-icon>
                                        <v-list-item-title>Chi tiết</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item link @click="openComment(file)">
                                        <v-list-item-icon><v-icon>mdi-comment</v-icon></v-list-item-icon>
                                        <v-list-item-title>Comment</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item link>
                                        <v-list-item-icon><v-icon>mdi-download</v-icon></v-list-item-icon>
                                        <v-list-item-title>Download</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item link @click="ApiDeleteFile(file.UUID_FOLDER_MANAGEMENT)">
                                        <v-list-item-icon><v-icon>mdi-delete</v-icon></v-list-item-icon>
                                        <v-list-item-title>Xóa</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </div>
                        </v-col>
                    </v-row>
               </v-card-text>
            </v-card>
        </v-col>
    <form-upload-file 
    :dialog="dialog" 
    :UUID_PARENT="UUID_PARENT"
    @closeDialog="dialog = $event" />
    <form-comment :dialog="dialog_comment" @closeDialog="dialog_comment = $event" :file="file_comment" />
    <form-add-folder :dialog="dialog_addfolder" @closeDialog="dialog_addfolder = $event" :folder="folder_add" :update="false" :UUID_PARENT="UUID_PARENT"/>
    </v-row>
</template>

<script>
import pdf from 'vue-pdf'

export default {
    components:
    {
        'form-upload-file': () => import('@/components/dialog/formUploadFile.vue'),
        'form-comment': () => import('@/components/dialog/FormComment.vue'),
        'form-add-folder': () => import('@/components/dialog/formAddFolder.vue'),
        'item-folder': () => import('@/components/manager/itemFolder.vue'),
        pdf
    },
    data()
    {
        return {
            months: [1,2,3,4,5,6,7,8,9,10,11,12],
            month: new Date().getMonth() + 1,
            files: [],
            dialog: false,
            folder: {},
            dialog_comment: false,
            file_comment: {},
            dialog_addfolder: false,
            folder_add: {},
            folders: [],
            folder_filter: {},
            list_folder: [],
            UUID_PARENT: this.$route.params.uuid,
            message: {
                text: null
            }
           
        }
    },
    watch: {
        dialog(newVal)
        {
            if(newVal == false)
            {
                this.ApiDetailFolder(this.UUID_PARENT)
                this.getFolder(this.UUID_PARENT)
                
            }
        },
        month()
        {
             this.ApiDetailFolder(this.UUID_PARENT)
            this.getFolder(this.UUID_PARENT)
        },
        async folder_filter(newVal)
        {
            this.list_folder.push(newVal)
            this.UUID_PARENT = await newVal.UUID_FOLDER_MANAGEMENT
            console.log(newVal)
            this.ApiDetailFolder(newVal.UUID_FOLDER_MANAGEMENT)
            this.getFolder(newVal.UUID_FOLDER_MANAGEMENT)
        },
        message(newVal)
        {

            this.ApiDetailFolder(this.UUID_PARENT)
            this.getFolder(this.UUID_PARENT)
        },
        dialog_addfolder(newVal)
        {
            if(newVal == false)
            {
                this.ApiDetailFolder(this.UUID_PARENT)
                this.getFolder(this.UUID_PARENT)
            }
        }
        
    },
    methods:
    {
        ApiDetailFolder(UUID)
        {
             this.$http.get(this.$store.state.API_URL + 'file?api_token='+this.$session.get('token')+'&folder='+UUID+'&month='+this.month).then((response) => {
                this.files = response.data
            })
        },
        ApiDeleteFile(UUID_FILE)
        {
            this.$http.post(this.$store.state.API_URL + 'file/'+UUID_FILE+'/delete?api_token='+this.$session.get('token')).then((response) => {
                this.ApiDetailFolder()
                
            })
        },
        async getFolder(UUID)
        {
            this.$store.state.loading = true
            await this.$http.get(this.$store.state.API_URL + 'folder?api_token='+this.$session.get('token')+'&year=2019&UUID_PARENT='+UUID)
            .then((response) => {
                this.folders = response.data
            })
            this.$store.state.loading = false
            this.message.text = null
        },
        openComment(file)
        {
            this.dialog_comment = true
            this.file_comment = file
        },
        ApiGetFolder()
        {
            this.$http.get(this.$store.state.API_URL + 'folder/'+this.$route.params.uuid+'?api_token='+this.$session.get('token'))
            .then((response) => {
                this.list_folder.push(response.data)
            })
        },
        updateLink(link,index_array)
        {
            // this.folder_filter = link
            // this.list_folder.push(link)
            var array_result = []
            this.ApiDetailFolder(link.UUID_FOLDER_MANAGEMENT)
            this.getFolder(link.UUID_FOLDER_MANAGEMENT)
            this.list_folder.filter((value,index,array) => {
                if(index_array >= index)
                {
                   array_result.push(array[index])
                }
            })
            this.list_folder = array_result
        }
       
    },
    created()
    {
        console.log(this.$store.state.folderSelected)
        this.$store.state.UUID_PARENT = this.$route.params.uuid
        this.ApiGetFolder()
        this.ApiDetailFolder(this.$route.params.uuid)
        this.getFolder(this.$route.params.uuid)
    }
}
</script>

<style scoped>
.item-file {border: 1px solid #e2e2e2;padding: 8px 10px;background: #e2e2e2; border-radius: 5px;cursor: pointer;position: relative;}
.type_file {position: absolute;top: -15px; left:-10px;}
.item-file:hover {background: #cce8ff;}
.item-file.active {background: #cce8ff;}
.item-file i {color: #6dcdf3;}
.item-file span {font-weight: bold;margin-left: 10px;}
.item-file a {text-decoration: none}
.text {  white-space: nowrap; 
  width: 80%;
  display: inline-block;
  line-height: 13px; 
  overflow: hidden;
  text-overflow: ellipsis;  }
.group-function {position: absolute;width: 100%;top: 100%;left: 0;display: none;background:#cce8ff;z-index: 999;}
.item-file:hover>.group-function {display: block}
</style>