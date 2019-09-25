<template>
    <v-dialog
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
                        <v-col cols="12" sm="12">
                            <v-select
                                :items="folders"
                                item-text="NAME_FOLDER"
                                item-value="UUID_FOLDER_MANAGEMENT"
                                v-model="file.idFolder"
                                label="Thư mục"
                                prepend-icon="mdi-folder"
                            ></v-select>
                        </v-col>
                         <v-col cols="12" sm="12" class="content-upload">
                             <input  ref="MyFile"  class="input-updload-file" type="file" />
                        <v-icon class="icon-upload">mdi-upload</v-icon>
                         </v-col>
                    </v-row>
                   
                </v-card-text>
                <v-card-actions>
                    <button @click="$emit('closeDialog',false)">Close</button>
                    <button class="btn btn-add">Thêm mới</button>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</template>
<script>
import uuid from 'uuid'
export default {
    props: ["dialog"],
    data()
    {
        return{
            file: {
                idFolder: this.$route.params.uuid,
                idFile: uuid.v4()
            },
            folders: []
      }
    },
    methods: 
    {
        ApiGetFolder()
        {
            const year = new Date().getFullYear()
            this.$http.get(this.$store.state.API_URL + 'folder?year='+year+'&api_token='+this.$session.get('token'))
            .then((response) => {
                this.folders = response.data
            })
        },
        ApiUploadFile()
        {
            const file = this.$refs.MyFile.files[0]
            const data = new FormData()
            data.append("idFile",uuid.v4())
            data.append("idFolder",this.file.idFolder)
            data.append("nameFile",file)
            this.$http.post(this.$store.state.API_URL + 'file?api_token='+this.$session.get('token'),data).then((response) => {
                console.log(response.data)
            })
        }
    },
    created()
    {
        this.ApiGetFolder()
    }
}
</script>
<style scoped>
.content-upload {min-height: 150px;position: relative;}
.icon-upload {position: absolute;left: 50%;top: 50%;z-index: 998;transform: translate(-50%,-50%);color: #6dcdf3}
.input-updload-file {position: absolute;width: 90%;height: 100%;opacity: 0;z-index: 999;}
</style>