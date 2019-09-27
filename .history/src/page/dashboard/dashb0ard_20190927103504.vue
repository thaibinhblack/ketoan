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
            <li><v-icon>mdi-folder-open</v-icon> Thư mục {{folder.NAME_FOLDER}}</li>
        </ul>
    </v-col>
    <v-col cols="12" sm="4" md="3">
        <v-select
            :items="months"
            v-model="month"
            width="200px"
            label="Tháng"
        ></v-select>
    </v-col>
</v-row>
</template>