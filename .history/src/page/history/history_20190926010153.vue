<template>
    <v-row>
        <v-col cols="12" sm="4">
        <span class="title-content">Thông tin lịch sử thao tác user</span>
        </v-col>
        <v-col cols="12" sm="8">
            <ul class="list-link">
                <li><v-icon>mdi-home</v-icon> Home</li>
                <li><v-icon>mdi-chevron-right</v-icon></li>
                <li><v-icon>mdi-update</v-icon> Lịch sử</li>
            </ul>
        </v-col>
        <v-col cols="12" sm="12">
            <v-card>
                <v-data-table
                    :headers="headers"
                    :items="historys"
                >
                    
                </v-data-table>
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
                {text: 'TÊN THAO TÁC', value: 'NAME_HISTORY'},
                {text: 'NỘI DUNG THAO TÁC', value: 'NOTE_HISTORY'},
                {text: 'NGÀY THAO TÁC', value: 'CREATED_AT'}
            ],
            historys: []
        }
    },
    methods:{

    }
}
</script>