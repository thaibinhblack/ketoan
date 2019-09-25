<template>
<v-dialog
    v-model="dialog"
    persistent :overlay="false"
    max-width="500px"
    transition="dialog-transition"
>
    <v-card>
        <v-card-title primary-title>
            <span>Form thành viên quản lý thư mục</span>
        </v-card-title>
    </v-card>
</v-dialog>
</template>

<script>
export default {
    props: ["dialog"]
}
</script>