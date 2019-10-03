<template>
<v-row>
    <v-col cols="12" md="4">
        <span class="title-content">Thông tin cá nhân</span>
    </v-col>
    <v-col cols="12" sm="12" md="8">
        <ul class="list-link">
            <li><v-icon>mdi-home</v-icon> Home</li>
            <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><router-link to="/manager/users">Danh sách người dùng</router-link></li>
             <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><v-icon>mdi-account-plus</v-icon> Thêm mới</li>
        </ul>
    </v-col>

</v-row>
</template>