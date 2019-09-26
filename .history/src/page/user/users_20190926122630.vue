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
            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="users"
                >
                    
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
                {text: '', value: 'AVATAR', sortable: false, align: 'center'}
                {text: 'Tài khoản', value: 'USERNAME'},
                {text: 'Họ & Tên', value: 'NAME'},
                {text: 'Email', value: 'EMAIL'},
                {text: 'SĐT', value: 'PHONE', sortable: false},
                {text: 'GT', value: 'GENDER', sortable: false, align: 'center'},
                {text: 'Ngày sinh', value: 'GENDER'},
                {text: 'Địa chỉ', value: 'ADDRESS'}
            ],
            users: []
        }
    }
}
</script>