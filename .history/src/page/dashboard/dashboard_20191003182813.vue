<template>
<v-row>
    <v-col cols="12" sm="4">
        <span class="title-content">Dashboard</span>
    </v-col>
    <v-col cols="12" sm="8">
        <ul class="list-link">
            <li><v-icon>mdi-home</v-icon> Home</li>
            <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><router-link to="/manager/folders"><v-icon>mdi-view-dashboard</v-icon> Dashboard</router-link></li>
        </ul>
    </v-col>
    <v-col cols="12" sm="12">
        <button class="btn-add" @click="open = !open">Thêm mới</button>
    </v-col>
    <v-col cols="12" sm="12" v-if="open == true">
        <v-card>
            <v-card-text>
                <vue-editor class="editor" v-model="content" :editor-toolbar="customToolbar"  />
            </v-card-text>
            <v-card-actions>
                 <div class="flex-grow-1"></div>
                
                <button class="btn-add" @click="createParable()">Save</button>
            </v-card-actions>
        </v-card>
    </v-col>
    <v-col cols="12" sm="12" v-for="(parable,index) in parables" :key="index">
        <v-card class="item-parabel">
            <v-card-text class="text-parable" v-html="parable.CONTENT_PARABLE">
                
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
            parables: [],
            user: {},
            open: false
        }
    },
    methods:{
        getParable()
        {
            this.$http.get(this.$store.state.API_URL + 'parable?api_token='+this.$session.get('token')).then((response) => {
                this.parables = response.data
            })
        },
        createParable()
        {
            const data = new FormData()
            data.append("CONTENT_PARABLE",this.content)
            this.$http.post(this.$store.state.API_URL + 'parable/create?api_token='+this.$session.get('token'),data).then((response) => {
                console.log(response.data)
                this.getParable()
            })
        },
        getData()
        {
            this.$http.get(this.$store.state.API_URL + 'user?api_token='+this.$session.get('token')+'&get_data=1').then((response) => {
                this.user = response.data
            })
        }
    },
    created()
    {
        this.getParable()
        this.getData()
    }
}
</script>

<style scoped>
.editor {background: #fff;}
.text-parable>*,.text-parable>p,.text-parable>span{font-family: 'Dancing Script', cursive !important;}

</style>