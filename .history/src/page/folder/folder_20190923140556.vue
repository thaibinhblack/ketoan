<template>
<v-row>
    <v-col cols="12" sm="4">
        <span class="title-content">Danh sách danh mục</span>
    </v-col>
    <v-col cols="12" sm="8">
        <ul class="list-link">
            <li><v-icon>mdi-home</v-icon> Home</li>
            <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><v-icon>mdi-folder-open</v-icon> Thư mục</li>
        </ul>
    </v-col>
    <v-col cols="12" sm="12">
        <v-select
            :items="years"
            v-model="years"
            label="label"
        ></v-select>
    </v-col>
    <v-col cols="12" sm="12">
        <v-card>
            <v-card-title primary-title>
                <v-row>
                    <v-col cols="12" sm="12">
                        <span class="title-label"> Danh sách thư mục</span>
                    </v-col>
                    <v-col cols="12" sm="12">
                        <button class="btn btn-add" @click="dialog = true"> <v-icon>mdi-folder-plus</v-icon> Thêm mới thư mục</button>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="3" md="2" v-for="(folder,index) in folders" :key="index">
                        <div class="item-folder">
                            <v-icon>mdi-folder-open</v-icon> 
                            <span>{{folder.NAME_FOLDER}}</span>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-col>
    <form-add-folder :dialog="dialog" @closeDialog="dialog = $event" />
</v-row>
</template>
<script>
export default {
    components: {
         'form-add-folder': () => import('@/components/dialog/formAddFolder.vue')
    },
    data()
    {
        return {
            dialog: false,
            folders: []
        }
    },
    methods: {
       ApiGetFolder()
       {
            this.$http.get(this.$store.state.API_URL + 'folder?api_token='+this.$session.get('token')).then((response) => {
                this.folders = response.data
           
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
.item-folder {border: 1px solid #e2e2e2;padding: 8px 10px;background: #e2e2e2; border-radius: 5px;cursor: pointer;}
.item-folder:hover {background: #cce8ff;}
.item-folder.active {background: #cce8ff;}
.item-folder i {color: #f3cf6d;}
.item-folder span {font-weight: bold;margin-left: 10px;}
</style>