<template>
    <v-row>
        <v-col cols="12" sm="4">
        <span class="title-content">Thư mục</span>
    </v-col>
    <v-col cols="12" sm="8">
        <ul class="list-link">
            <li><v-icon>mdi-home</v-icon> Home</li>
            <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><v-icon>mdi-folder-open</v-icon> Danh sách thư mục</li>
            <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><v-icon>mdi-folder-open</v-icon> Thư mục</li>
        </ul>
    </v-col>
    </v-row>
</template>

<script>
export default {
    created()
    {
        this.$http.get(this.$store.state.API_URL + 'file?api_token='+this.$session.get('token')+'&folder='+this.$route.params.uuid).then((response) => {
            console.log(response.data)
        })
    }
}
</script>