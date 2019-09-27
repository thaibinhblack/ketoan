<template>
<v-row>
    <v-col cols="12" sm="4">
        <span class="title-content">Thư mục</span>
    </v-col>
    <v-col cols="12" sm="8">
        <ul class="list-link">
            <li><v-icon>mdi-home</v-icon> Home</li>
            <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><router-link to="/manager/folders"><v-icon>mdi-view-dashboard</v-icon> Dashboard</router-link></li>
        </ul>
    </v-col>
    <v-col cols="12" sm="12">
        <button class="btn-add">Thêm mới</button>
    </v-col>
    <v-col cols="12" sm="12">
        <v-card>
            <v-card-text>
                <vue-editor class="editor" v-model="content" :editor-toolbar="customToolbar"  />
            </v-card-text>
            <v-card-actions>
                 <div class="flex-grow-1"></div>
                
                <v-btn color="green darken-1" text>Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
    <v-col cols="12" sm="12">
        <v-card>
            <v-card-text>
                
            </v-card-text>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
export default {
    data()
    {
        return {
            content: "",
            customToolbar: [
                [{ size: [ 'small', false, 'large', 'huge' ]}],
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ color: [] }, { background: [] }],
                ["image"]
            ],
            parables: []
        }
    },
    methods:{
        getParable()
        {
            this.$http.get(this.$store.state.API_URL + 'parable').then((response) => {
                this.parables = response.data
            })
        }
    },
    created()
    {
        this.getParable()
    }
}
</script>

<style scoped>
.editor {background: #fff;}
</style>