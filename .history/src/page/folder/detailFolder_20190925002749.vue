<template>
    <v-row>
        <v-col cols="12" sm="4">
        <span class="title-content">Thư mục</span>
    </v-col>
    <v-col cols="12" sm="8">
        <ul class="list-link">
            <li><v-icon>mdi-home</v-icon> Home</li>
            <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><router-link to="/manager/folders"><v-icon>mdi-folder-open</v-icon> Danh sách thư mục</router-link></li>
            <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><v-icon>mdi-folder-open</v-icon> Thư mục</li>
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
            
            <v-row style="padding:15px;">
                <v-col cols="12" sm="4" md="3">
                    <div class="item-file" style="text-align:center" @click="dialog = true">
                        <v-icon>mdi-upload</v-icon> 
                        <span>Upload file</span>
                    </div>
                </v-col>
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
        </v-card>
    </v-col>
    <form-upload-file :dialog="dialog" @closeDialog="dialog = $event" />
    </v-row>
</template>

<script>
export default {
    components:
    {
        'form-upload-file': () => import('@/components/dialog/formUploadFile.vue')
    },
    data()
    {
        return {
            months: [1,2,3,4,5,6,7,8,9,10,11,12],
            month: 9,
            files: [],
            dialog: false,
           
        }
    },
    watch: {
        dialog(newVal)
        {
            if(newVal == false)
            {
                this.ApiDetailFolder()
            }
        },
        
    },
    methods:
    {
        ApiDetailFolder()
        {
             this.$http.get(this.$store.state.API_URL + 'file?api_token='+this.$session.get('token')+'&folder='+this.$route.params.uuid).then((response) => {
                this.files = response.data
            })
        },
        ApiDeleteFile(UUID_FILE)
        {
            this.$http.post(this.$store.state.API_URL + 'file/'+UUID_FILE+'/delete?api_token='+this.$session.get('token')).then((response) => {
                this.ApiDetailFolder()
            })
        },
       
    },
    created()
    {
       this.ApiDetailFolder()
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
  line-height: 134px; 
  overflow: hidden;
  text-overflow: ellipsis;  }
.group-function {position: absolute;width: 100%;top: 100%;left: 0;display: none;background:#cce8ff;z-index: 999;}
.item-file:hover>.group-function {display: block}
</style>