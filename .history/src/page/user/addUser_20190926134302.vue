<template>
<v-row>
   <v-col cols="12" md="4">
        <span class="title-content">Thêm người dùng mới</span>
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
    <v-col cols="12" sm="12">
        <v-card>
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="12" class="avatar">
                        <v-avatar
                            size="120px"
                            color="#e2e2e2"
                            style="border:1px solid #e2e2e2"
                        >
                            <input type="file" ref="MyAvatar" class="input-file" @change="renderAvatar()">
                            <img v-if="avatar != null" :src="avatar" alt="alt">
                        </v-avatar>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field
                            name="USERNAME"
                            label="Tài khoản"
                            prepend-icon="mdi-account"
                            placeholder="Nhập tài khoản cho người dùng"
                            v-model="user.USERNAME"
                            required
                            :counter="30"
                        ></v-text-field>
                    </v-col>
                     <v-col cols="12" sm="6" md="4">
                        <v-text-field
                            name="USERNAME"
                            label="Mật khẩu"
                            prepend-icon="mdi-key"
                            placeholder="Nhập mật khẩu cho người dùng"
                            v-model="user.EMAIL"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field
                            name="USERNAME"
                            label="Họ & Tên"
                            prepend-icon="mdi-account-card-details-outline"
                            placeholder="Nhập họ và tên cho người dùng"
                            v-model="user.NAME"
                        ></v-text-field>
                    </v-col>
                     <v-col cols="12" sm="6" md="4">
                        <v-text-field
                            name="USERNAME"
                            label="Email"
                            prepend-icon="mdi-email"
                            placeholder="Nhập nhập email cho người đùng" 
                            v-model="user.EMAIL"
                        ></v-text-field>
                    </v-col>
                     <v-col cols="12" sm="6" md="4">
                        <v-text-field
                            name="USERNAME"
                            label="Email"
                            prepend-icon="mdi-phone"
                            placeholder="Nhập số điện thoại" 
                        ></v-text-field>
                    </v-col>
                    
                </v-row>
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
            avatar: null,
            user: {}
        }
    },
    methods: {
        renderAvatar()
        {
            var reader  = new FileReader()
            const file = this.$refs.MyAvatar.files[0]
            // this.user.AVATAR = file
            this.avatar  = URL.createObjectURL(file)
            // console.log(file)
        },
    }
}
</script>
<style scoped>
.avatar {position: relative;text-align: center}
.input-file {position: absolute;z-index: 999;top: 0;left: 0;width: 100%;height: 100%;opacity: 0;cursor: pointer;;}
</style>