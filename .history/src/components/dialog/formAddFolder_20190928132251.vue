<template>
<v-dialog persistent  v-model="dialog" width="600px">
    <v-card>
        <form @submit.prevent="createFolder()">
        <v-card-title>
        <span class="headline">Form tạo thư mục</span>
        </v-card-title>
        <v-card-text>
            
                <v-row>
                    <v-col cols="12" sm="12">
                        <v-select
                            :items="years"
                            v-model="folder.YEAR_FOLDER"
                            label="Chọn năm cho thư mục"
                        ></v-select>
                        <v-alert :type="message.type" v-if="message.text != null" :value="true">
                            {{message.text}}
                        </v-alert>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                        
                        <v-text-field
                            name="NAME_FOLDER"
                            label="Tên thư mục"
                            v-model="folder.NAME_FOLDER"
                            @change="convertSAFE_FOLDER()"
                            prepend-icon="mdi-folder"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                        
                        <v-text-field
                            name="NAME_FOLDER"
                            label="Đường dẫn thư mục"
                            v-model="folder.SAFE_FOLDER"
                            @change="checkSafeFolder()"
                            :disabled="update"
                            prepend-icon="mdi-link"
                        ></v-text-field>
                    </v-col>
                </v-row>
            
        </v-card-text>
        <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="green darken-1" text @click="$emit('closeDialog',false)">Close</v-btn>
            <v-btn color="green darken-1"  type="submit" text>Save</v-btn>
        </v-card-actions>
        </form>
    </v-card>
</v-dialog>
</template>
<script>
import uuid from 'uuid'
import UrlSafeString from 'url-safe-string'
export default {
    props: ["dialog","folder","update"],
    data()
    {
        return {
            years: ["2019","2018","2017"],
            message: {
                type: null,
                text: null
            },
            check_path: false
           
        }
    },
    watch:
    {
        dialog()
        {
            this.message.text = null
        },
       
    },
    methods:
    {
        convertSAFE_FOLDER()
        {
            const tagGenerator = new UrlSafeString();
            let tag = tagGenerator.generate(this.folder.NAME_FOLDER);
            this.folder.SAFE_FOLDER = tag;
            
        },
        checkSafeFolder()
        {
            this.$http.get(this.$store.state.API_URL + 'folder?api_token='+this.$session.get('token')+'&year='+this.folder.YEAR_FOLDER+'&check_path='+this.folder.SAFE_FOLDER)
            .then((response) => {
               this.check_path = response.data
            })
        },
        createFolder()
        {
            const data = new FormData()
            
            data.append("NAME_FOLDER",this.folder.NAME_FOLDER)
            data.append("YEAR_FOLDER",this.folder.YEAR_FOLDER)
            data.append("SAFE_FOLDER", this.folder.SAFE_FOLDER)
            if(this.update == false)
            {   if(this.check_path = false)
                {
                    this.message.type = 'warning'
                    this.message.text = 'Đường dẫn thư mục đã tồn tại!'
                }
                else
                {
                    data.append("UUID_FOLDER_MANAGEMENT",uuid.v4())
                    this.$http.post(this.$store.state.API_URL + 'folder/create?api_token='+this.$session.get('token'),data).then(() => {
                        this.message.type = 'success'
                        this.message.text = 'Thêm thư mục mới thành công!'
                    }).catch(() => {
                        this.message.type = 'error'
                        this.message.text = 'Lỗi! xin vui lòng thử lại!'
                    })
                }
            }
            else
            {
                this.$http.post(this.$store.state.API_URL + 'folder/'+this.folder.UUID_FOLDER_MANAGEMENT+'/update?api_token='+this.$session.get('token'),data)
                .then(() => {
                    this.message.type = 'success'
                    this.message.text = 'Cập nhật nhật thành công!'
                }).catch(() => {
                    this.message.type = 'error'
                    this.message.text = 'Lỗi! xin vui lòng thử lại!'
                })
            }
           
        }
    }
}
</script>