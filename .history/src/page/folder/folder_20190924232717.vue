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
    <v-col cols="12" sm="3">
        <v-select
            :items="years"
            v-model="year"
            prepend-icon="mdi-calendar-range"
            label="NĂM"
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
                    <v-col cols="12" sm="4" md="3" v-for="(folder,index) in folders" :key="index">
                        <div class="item-folder">
                            <v-icon>mdi-folder-open</v-icon> 
                            <router-link :to="'/manager/folder/'+folder.UUID_FOLDER_MANAGEMENT"><span>{{folder.NAME_FOLDER}}</span></router-link>
                            <v-list class="group-function">
                            <v-list-item link @click="updateFolder(folder)">
                                <v-list-item-icon><v-icon>mdi-details</v-icon></v-list-item-icon>
                                <v-list-item-title>Chi tiết</v-list-item-title>
                            </v-list-item>
                            <v-list-item link>
                                <v-list-item-icon><v-icon>mdi-download</v-icon></v-list-item-icon>
                                <v-list-item-title>Download</v-list-item-title>
                            </v-list-item>
                            <v-list-item link @click="ApiDeleteFile(file.UUID_FILE_MANAGEMENT)">
                                <v-list-item-icon><v-icon>mdi-delete</v-icon></v-list-item-icon>
                                <v-list-item-title>Xóa</v-list-item-title>
                            </v-list-item>
                        </v-list>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-col>
    <form-add-folder :dialog="dialog" @closeDialog="dialog = $event" :folder="folder" :update="update"/>
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
            folders: [],
            years: [],
            year: new Date().getFullYear(),
            folder: {
                YEAR_FOLDER: new Date().getFullYear(),
                SAFE_FOLDER: ""
            },
            update: false
        }
    },
    watch:
    {
        year(newVal)
        {
            this.ApiGetFolder(newVal)
        }
    },
    methods: {
       ApiGetFolder(year)
       {
            this.$http.get(this.$store.state.API_URL + 'folder?api_token='+this.$session.get('token')+'&year='+year).then((response) => {
                this.folders = response.data
           
        })
       },
       updateFolder(folder)
       {
           this.folder = folder
           this.dialog = true
           this.update = true
       }
    },
    created()
    {
        var year = 2016
        var now = new Date().getFullYear()
        while(year != now)
        {
            this.years.push(year)
            year = year + 1
            console.log(year)
        }
        this.years.push(now)
        this.ApiGetFolder(this.year)
    }
}
</script>

<style scoped>
.item-folder {border: 1px solid #e2e2e2;padding: 8px 10px;background: #e2e2e2; border-radius: 5px;cursor: pointer;position: relative;}
.item-folder:hover {background: #cce8ff;}
.item-folder.active {background: #cce8ff;}
.item-folder i {color: #f3cf6d;}
.item-folder span {font-weight: bold;margin-left: 10px;}
.group-function {position: absolute;width: 100%;top: 100%;left: 0;display: none;background:#cce8ff8a;}
.item-folder:hover>.group-function {display: block}
</style>