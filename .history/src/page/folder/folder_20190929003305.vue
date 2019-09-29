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
        <v-alert :type="message.type" v-if="message.text != null" :value="true">
                {{message.text}}
            </v-alert>
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
                    <item-folder v-for="(fd,index) in folders" :key="index" :folder="fd" 
                        @folderAccount="folderAccount = $event" 
                        @dialog_account="dialog_account = $event"
                        @folderUpdate="folder = $event"
                        @dialogUpdate="dialog = $event"
                        @openUpdate="update = $event"
                        @message="message = $event"/>
                </v-row>
            </v-card-text>
        </v-card>
    </v-col>
    <form-add-folder :dialog="dialog" @closeDialog="dialog = $event" :folder="folder" :update="update"/>
    <form-group-account :dialog="dialog_account" @closeDialog="dialog_account = $event" :folder="folderAccount"/>
</v-row>
</template>
<script>
export default {
    components: {
         'form-add-folder': () => import('@/components/dialog/formAddFolder.vue'),
         'form-group-account': () => import('@/components/dialog/formAccountGroup.vue'),
         'item-folder': () => import('@/components/manager/itemFolder.vue')
    },
    data()
    {
        return {
            dialog: false,
            folders: [],
            years: [],
            year: new Date().getFullYear(),
            folder: {
                YEAR_FOLDER: this.year,
                SAFE_FOLDER: ""
            },
            update: false,
            message: {
                type: null,
                text: null
            },
            dialog_account: false,
            folderAccount: {}
        }
    },
    watch:
    {
        year(newVal)
        {
            this.ApiGetFolder(newVal)
        },
        dialog(newVal)
        {
            if(newVal == false)
            {
                this.update = false
                this.folder = {
                    YEAR_FOLDER: this.year,
                    SAFE_FOLDER: ""
                }
                this.ApiGetFolder(this.year)
            }
            
        }
    },
    methods: {
       ApiGetFolder(year)
       {
            this.$http.get(this.$store.state.API_URL + 'folder?api_token='+this.$session.get('token')+'&year='+year).then((response) => {
                        this.folders = response.data 
                    })
           
       },
       
    },
    created()
    {
        var year = 2016
        var now = new Date().getFullYear()
        while(year != now)
        {
            this.years.push(year)
            year = year + 1
        }
        this.years.push(now)
        this.ApiGetFolder(this.year)
    }
}
</script>

