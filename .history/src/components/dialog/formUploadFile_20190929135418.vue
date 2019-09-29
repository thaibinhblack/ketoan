<template>
    <v-dialog
        persistent 
        v-model="dialog"
        max-width="500px"
    >
        <v-card>
            <v-form @submit.prevent="ApiUploadFile()">
                <v-card-title primary-title>
                    <span>Form upload file</span>
                </v-card-title>
                <v-card-text >
                    <v-row>
                        <v-col cols="12" sm="12" v-if="message.text != null">
                            <v-alert :type="message.type"  :value="true">
                                {{message.text}}
                            </v-alert>
                        </v-col>
                         <v-col cols="12" sm="12" class="content-upload">
                             <input  ref="MyFile"  class="input-updload-file" @change="uploadFile()" type="file" />
                            <div class="icon-upload">
                                <v-icon >mdi-upload</v-icon>
                                <p style="text-align:center">{{size}} kb </p>
                            </div>
                            
                         </v-col>
                    </v-row>
                   
                </v-card-text>
                <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn color="green darken-1" text @click="$emit('closeDialog',false)">Close</v-btn>
                    <v-btn color="green darken-1"  type="submit" text>Save</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</template>
<script>
import uuid from 'uuid'
export default {
    props: ["dialog","UUID_PARENT"],
    data()
    {
        return{
            file: {
                idFolder: this.UUID_PARENT,
                idFile: uuid.v4()
            },
            folders: [],
            size: 0,
            message: {
                type: null,
                text: null
            }
      }
    },
    methods: 
    {
        ApiUploadFile()
        {
            const file = this.$refs.MyFile.files[0]
            const data = new FormData()
            data.append("idFile",uuid.v4())
            data.append("idFolder",this.file.idFolder)
            data.append("nameFile",file)
            if(this.size != 0 )
            {
                 this.$http.post(this.$store.state.API_URL + 'file/create?api_token='+this.$session.get('token'),data).then(() => {
                     this.message.type = 'success'
                     this.message.text = 'Thêm file mới thành công!'
                }).catch(() =>{
                    this.message.type = 'error'
                    this.message.text = 'Lỗi! xin vui lòng thử lại!'
                })
            }
            else
            {
                this.message.type = 'error'
                this.message.text = 'Lỗi! xin vui lòng thử lại!'
            }
           
           
        },
        uploadFile()
        {
            this.size =  Math.ceil(this.$refs.MyFile.files[0].size / 1024)
            
        }
    },
}
</script>
<style scoped>
.content-upload {min-height: 150px;position: relative;}
.icon-upload {position: absolute;left: 50%;top: 50%;z-index: 998;transform: translate(-50%,-50%);color: #6dcdf3; text-align: center}
.input-updload-file {position: absolute;width: 90%;height: 100%;opacity: 0;z-index: 999;}
</style>