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
                <v-card-text class="content-upload">
                    <v-row>
                        <v-col cols="12" sm="12">
                            <v-select
                                :items="folders"
                                v-model="file.UUID_FOLDER_MANAGEMENT"
                                label="Thư mục"
                                prepend-icon="mdi-folder"
                            ></v-select>
                        </v-col>
                         <input class="input-updload-file" type="file" />
                        <v-icon class="icon-upload">mdi-upload</v-icon>
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
export default {
    props: ["dialog"],
    data()
    {
        return{
            file: {},
            folders: []
      }
    },
    methods: 
    {
        ApiUploadFile()
        {

        }
    }
}
</script>
<style scoped>
.content-upload {min-height: 150px;position: relative;}
.icon-upload {position: absolute;left: 50%;top: 50%;z-index: 998;transform: translate(-50%,-50%);color: #6dcdf3}
.input-updload-file {position: absolute;width: 90%;height: 100%;opacity: 0;z-index: 999;}
</style>