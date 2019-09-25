<template>
<v-dialog
    v-model="dialog"
    persistent :overlay="false"
    max-width="600px"
    transition="dialog-transition"
>
    <v-card>
        <v-card-title primary-title>
            <span>Form thành viên quản lý thư mục</span>
        </v-card-title>
        <v-card-text>
            <v-slide-group
                class="pa-4"
                active-class="success"
                show-arrows
                >
                <v-slide-item
                    v-for="n in 15"
                    :key="n"
                    v-slot:default="{ active, toggle }"
                >
                    <v-avatar
                        size="80px"
                        color="#e2e2e2"
                    >
                        <!-- <img src="src" alt="alt"> -->
                    </v-avatar>
                </v-slide-item>
            </v-slide-group>
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
                <v-col cols="12" sm="12" v-if="searchs.length > 0">
                    <v-row v-for="(user, index) in searchs" :key="index" >
                        <v-col cols="12" sm="4" md="3">
                            <v-avatar
                                size="50px"
                                color="#e2e2e2"
                            >
                                <!-- <img src="src" alt="alt"> -->
                            </v-avatar>
                        </v-col>
                        <v-col cols="12" sm="6" md="7" style="line-height:50px">{{user.USERNAME}}</v-col>
                        <v-col cols="12" sm="2">
                            <v-checkbox v-model="check" :value="user.UUID_USER"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</v-dialog>
</template>

<script>
export default {
    props: ["dialog"],
    data()
    {
        return{
            search: "",
            searchs: [],
            check: []
        }
    },
    methods:{
        ApiSearchUser()
        {
            this.$http.get(this.$store.state.API_URL + 'user?api_token='+this.$session.get('token')+'&search='+this.search)
            .then((response) => {
               this.searchs = response.data
               console.log(response.data)
            })
        }
    }
}
</script>