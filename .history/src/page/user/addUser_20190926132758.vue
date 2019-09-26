<template>
<v-row>
   <v-col cols="12" sm="4">
        <span class="title-content">Thêm người dùng mới</span>
    </v-col>
    <v-col cols="12" sm="8">
        <ul class="list-link">
            <li><v-icon>mdi-home</v-icon> Home</li>
            <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><router-link to="/manager/users">Danh sách người dùng</router-link></li>
             <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><v-icon>mdi-account-plus</v-icon> Thêm mới</li>
        </ul>
    </v-col>
    <v-col cols="12" sm="12">
        <v-card>
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="12" class="avatar">
                        <v-avatar
                            size="120px"
                            color="#e2e2e2"
                        >
                            <input type="file" ref="MyAvatar" class="input-file">
                            <!-- <img src="src" alt="alt"> -->
                        </v-avatar>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.avatar {position: relative;}
.input-file {position: absolute;z-index: 999;top: 0;left: 0;width: 100%;height: 100%;;}
</style>