<template>
    <v-row>
        <v-col cols="12" sm="4">
        <span class="title-content">Thư mục</span>
    </v-col>
    <v-col cols="12" sm="8">
        <ul class="list-link">
            <li><v-icon>mdi-home</v-icon> Home</li>
            <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><router-link to="/manager/folders"><v-icon>mdi-folder-open</v-icon> Danh sách thư mục</router-link></li>
            <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><v-icon>mdi-folder-open</v-icon> Thư mục</li>
        </ul>
    </v-col>
    <v-col cols="12" sm="3">
        <v-select
            :items="months"
            v-model="month"
            width="200px"
            label="Tháng"
        ></v-select>
    </v-col>
    <v-col cols="12" sm="12">
        <v-card>
            <v-row style="padding:15px;">
                <v-col cols="12" sm="4" md="3" v-for="(file, index) in files" :key="index">
                    <div class="item-file">
                        <v-icon>mdi-file</v-icon> 
                        <span>{{file.NAME_FILE}}</span>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </v-col>
    <v-dialog
        v-model="true"
       
    >
        
    </v-dialog>
    </v-row>
</template>

<script>
export default {
    data()
    {
        return {
            months: [1,2,3,4,5,6,7,8,9,10,11,12],
            files: []
        }
    },
    created()
    {
        this.$http.get(this.$store.state.API_URL + 'file?api_token='+this.$session.get('token')+'&folder='+this.$route.params.uuid).then((response) => {
            this.files = response.data
        })
    }
}
</script>

<style scoped>
.item-file {border: 1px solid #e2e2e2;padding: 8px 10px;background: #e2e2e2; border-radius: 5px;cursor: pointer;}
.item-file:hover {background: #cce8ff;}
.item-file.active {background: #cce8ff;}
.item-file i {color: #6dcdf3;}
.item-file span {font-weight: bold;margin-left: 10px;}
.item-file a {text-decoration: none}
</style>