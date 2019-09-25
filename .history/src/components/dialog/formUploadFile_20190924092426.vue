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
                    <input class="input-upload" type="file" />
                    <v-icon class="icon-upload">mdi-upload</v-icon>
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
    methods: 
    {
        ApiUploadFile()
        {

        }
    }
}
</script>
<style scoped>
.content-upload {min-height: 150px;}
.icon-upload {position: absolute;left: 50%;top: 50%;z-index: 999;transform: translate(-50%,-50%);color: #6dcdf3}
</style>