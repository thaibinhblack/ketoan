<template>
<v-row>
     <v-col cols="12" sm="4">
        <span class="title-content">Danh sách người dùng</span>
    </v-col>
    <v-col cols="12" sm="8">
        <ul class="list-link">
            <li><v-icon>mdi-home</v-icon> Home</li>
            <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><v-icon>mdi-account</v-icon> user</li>
        </ul>
    </v-col>
    <v-col cols="12" sm="12">
        <v-card>
            <v-card-title primary-title>
                <button class="btn-add btn"> <router-link to="/manager/add-user"><v-icon>mdi-account-plus</v-icon> Thêm người dùng mới</router-link></button>
            </v-card-title>
            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="users"
                >
                    <template v-slot:item.AVATAR="{item}"> 
                        <v-avatar
                            size="50px"
                            color="#e2e2e2"
                        >
                            <img v-if="item.AVATAR != null" :src="$store.state.PUBLIC_URL + item.AVATAR">
                        </v-avatar>
                    </template>
                     <template v-slot:item.ACTION="{item}"> 
                         <button><v-icon>mdi-chevron-right</v-icon></button>
                    </template>
                </v-data-table>
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
            headers: [
                {text: '', value: 'AVATAR', sortable: false, align: 'center'},
                {text: 'Tài khoản', value: 'USERNAME'},
                {text: 'Họ & Tên', value: 'NAME'},
                {text: 'Email', value: 'EMAIL'},
                {text: 'SĐT', value: 'PHONE', sortable: false},
                {text: 'GT', value: 'GENDER', sortable: false, align: 'center'},
                {text: 'Ngày sinh', value: 'GENDER'},
                {text: 'Địa chỉ', value: 'ADDRESS'},
                {text: 'Tác vụ', value: 'ACTION'}
            ],
            users: []
        }
    },
    methods: {
        ApiGetUser()
        {
            this.$http.get(this.$store.state.API_URL + 'user?api_token='+this.$session.get('token')).then((response) => {
                this.users = response.data
            })
        }
    },
    created()
    {
        this.ApiGetUser()
    }
}
</script>