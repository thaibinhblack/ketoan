<template>
<v-row>
    <v-col cols="12" sm="4">
        <span class="title-content">Chi tiết người dùng </span>
    </v-col>
    <v-col cols="12" sm="8">
        <ul class="list-link">
            <li><v-icon>mdi-home</v-icon> Home</li>
            <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><router-link to="/manager/users">Danh sách ngươi dùng</router-link></li>
            <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><v-icon>mdi-account</v-icon> user</li>
        </ul>
    </v-col>
</v-row>
</template>