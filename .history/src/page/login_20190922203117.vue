<template>
    <div id="login">
        <v-card id="form-login">
            <v-card-title primary-title>
                Đăng Nhập
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-row>
                        <v-col cols="12" sm="12">
                            <label for="EMAIL">Eamil</label>
                            <v-text-field
                                name="EMAIL"
                                label="Email"
                                id="email"
                                type="email"
                                placeholder="Nhập email của bạn"
                                v-model="user.EMAIL"
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
                                placeholder="Nhập mật khẩu của bạn"
                                prepend-icon="mdi-key"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6"></v-col>
                        <v-col cols="12" sm="6" style="text-align:right">
                            <button class="btn btn-add btn-login">Đăng nhập</button>
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
            data.append("USERNAME",this.user.EMAIL)
            data.append("PASSWORD",this.user.PASSWORD)
            this.$http(this.$store.state.API_URL + 'user/login',data).then((response) => {
                console.log(response.data)
            })
        }
    }
}
</script>
<style scoped>
 #login {background-image: url('../assets/bg.jpg'); width: 100%;height: 100%;background-size: cover}
 #form-login {position: absolute;width: 500px;top: 50%;left: 50%;transform: translate(-50%,-50%)}
</style>