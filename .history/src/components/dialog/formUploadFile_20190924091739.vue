<template>
    <v-dialog
        v-model="dialog"
        max-width="500px"
    >
        <v-card>
            <v-form>
                <v-card-title primary-title>
                    <span>Form upload file</span>
                </v-card-title>
                <v-card-text>
                    <v-icon>mdi-upload</v-icon>
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
    props: ["dialog"]
}
</script>