<template>
<v-dialog
    v-model="dialog"
    persistent :overlay="false"
    max-width="600px"
    transition="dialog-transition"
>
    <v-card>
        <v-card-title primary-title>
            <span>Form thành viên quản lý thư mục {{folder.NAME_FOLDER}}</span>
            <v-alert :type="message.type" v-if="message.text != null" :value="true">
                {{message.text}}
            </v-alert>
        </v-card-title>
        <v-form @submit.prevent="addUserManagerFolder()">
            <v-card-text>
                <v-row>
                    <v-col class="item-avatar" cols="12" sm="3" md="2" v-for="(user,index) in users" :key="index">
                        <v-avatar
                            size="70px"
                            color="#e2e2e2e2"
                        >
                            <img v-if="user.AVATAR != null" :src="$store.state.PUBLIC_URL + user.AVATAR" alt="">
                        </v-avatar>
                        <p>{{user.USERNAME}}</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12">
                        <v-text-field
                            name="SEARCH"
                            label="Tìm kiếm user"
                            append-icon="mdi-account-search"
                            v-model="search"
                            @keypress="ApiSearchUser()"
                            @click:append="ApiSearchUser()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12">
                        <v-row  v-for="(user, index) in searchs" :key="index" :user="user">
                            <v-col cols="12" sm="4" md="3">
                                <v-avatar
                                    size="50px"
                                    color="#e2e2e2"
                                >
                                    <img v-if="user.AVATAR != null" :src="$store.state.PUBLIC_URL + user.AVATAR" alt="">
                                </v-avatar>
                            </v-col>
                            <v-col cols="12" sm="6" md="7" style="line-height:50px">{{user.USERNAME}}</v-col>
                            <v-col cols="12" sm="2">
                                <v-checkbox v-model="check" :value="user.UUID_USER"></v-checkbox>
                            </v-col>
                        </v-row>
                        <!-- <item-user-folder :check="check"/> -->
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="green darken-1" text @click="$emit('closeDialog',false)">Close</v-btn>
                <v-btn color="green darken-1"  type="submit" text>Save</v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</v-dialog>
</template>

<script>
export default {
    props: ["dialog","folder"],
    components: {
        'item-user-folder': () => import('@/components/manager/itemUserFolder.vue')
    },
    data()
    {
        return{
            search: "",
            searchs: [],
            check: [],
            message: {
                type: null,
                text: null
            },
            users: []
        }
    },
    watch: {
        folder()
        {
            this.ApiGetManagerFolder()
        }
    },
    methods:{
        ApiSearchUser()
        {
            this.$http.get(this.$store.state.API_URL + 'user?api_token='+this.$session.get('token')+'&search='+this.search)
            .then((response) => {
                console.log(response.data.length)
                if(response.data.length > 0)
                {
                    this.searchs = response.data
                    this.check = []
                    this.users.forEach(element => {
                        this.check.push(element["UUID_USER"])
                    });
                }
                else
                {
                    this.searchs = []
                    this.check = []
                     this.users.forEach(element => {
                        this.check.push(element["UUID_USER"])
                    });
                
                }
               
            //    console.log(response.data)
            })
        },
        addUserManagerFolder()
        {
            const data = new FormData()
            console.log(this.check)
            data.append("UUIDS",this.check)
            data.append("UUID_FOLDER_MANAGEMENT",this.folder.UUID_FOLDER_MANAGEMENT)
            this.$http.post(this.$store.state.API_URL + 'manager/folder/create?api_token='+this.$session.get('token')+'&NAME_FOLDER='+this.folder.NAME_FOLDER,data)
            .then((response) => {
                this.ApiGetManagerFolder()
            })
        },
        ApiGetManagerFolder()
        {
            this.$http.get(this.$store.state.API_URL + 'manager/folder?api_token='+this.$session.get('token')+'&UUID_FOLDER_MANAGEMENT='+this.folder.UUID_FOLDER_MANAGEMENT).then((response) => {
                this.users = response.data
                response.data.forEach(element => {
                    this.check.push(element["UUID_USER"])
                });
            })
        }
    },
    created()
    {
        this.$http.get(this.$store.state.API_URL + 'user?api_token='+this.$session.get('token')).then((response) => {
            this.searchs = response.data
        })
    }
}
</script>

<style scoped>
.item-avatar {text-align: center}
</style>