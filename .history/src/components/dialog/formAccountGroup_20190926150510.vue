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
                <v-col cols="12" sm="12">
                    <item-user-folder v-for="(user, index) in searchs" :key="index" :user="user" />
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
             <div class="flex-grow-1"></div>
            <v-btn color="green darken-1" text @click="$emit('closeDialog',false)">Close</v-btn>
            <v-btn color="green darken-1"  type="submit" text>Save</v-btn>
        </v-card-actions>
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
            }
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
                }
                else
                {
                    this.searchs = []
                }
               
            //    console.log(response.data)
            })
        }
    }
}
</script>