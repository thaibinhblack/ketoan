<template>
    <div id="login">
        <v-card id="form-login">
            <v-card-title primary-title>
                Đăng Nhập
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="ApiLogin()"> 
                    <v-row>
                        <v-col cols="12" sm="12">
                            <label for="EMAIL">Tài khoản</label>
                            <v-text-field
                                name="USERNAME"
                                label="Tài khoản"
                                id="email"
                                type="text"
                                placeholder="Nhập tài khoản của bạn"
                                v-model="user.USERNAME"
                                required
                                prepend-icon="mdi-email"
                                :counter="30"
                            ></v-text-field>
                            <label for="PASSWORD">Mât khẩu</label>
                            <v-text-field
                                name="PASSWORD"
                                label="Mật khẩu"
                                id="password"
                                type="password"
                                v-model="user.PASSWORD"
                                required
                                placeholder="Nhập mật khẩu của bạn"
                                prepend-icon="mdi-key"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6"></v-col>
                        <v-col cols="12" sm="6" style="text-align:right">
                            <button class="btn btn-add btn-login" type="submit">Đăng nhập</button>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            user: {}
        }
    },
    methods: {
        ApiLogin()
        {
            const data = new FormData()
            data.append("USERNAME",this.user.USERNAME)
            data.append("PASSWORD",this.user.PASSWORD)
            this.$http.post(this.$store.state.API_URL + 'user/login',data).then((response) => {
               if(response.data)
               {
                   this.$session.start()
                   this.$session.set('token',response.data)
                   this.$router.push('/manager')
               }
            })
        }
    }
}
</script>
<style scoped>
 #login {background-image: url('../assets/bg.jpg'); width: 100%;height: 100%;background-size: cover}
 #form-login {position: absolute;width: 500px;top: 50%;left: 50%;transform: translate(-50%,-50%)}
</style>