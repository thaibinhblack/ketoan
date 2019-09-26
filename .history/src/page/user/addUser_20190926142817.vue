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
            <v-form @submit.prevent="createUser()">
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
                                :error="user.error"
                                :error-messages="user.message_error"
                                :success="user.success"
                                :success-messages="user.message_success"
                                @change="checkUsername()"
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
                                v-model="user.PHONE"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                        <v-select
                            :items="genders"
                            v-model="user.GENDER"
                            label="Giới Tính"
                        ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-menu
                            ref="menu1"
                            v-model="menu1"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="290px"
                            >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                v-model="dateFormatted"
                                label="Date"
                                hint="MM/DD/YYYY format"
                                persistent-hint
                                prepend-icon="mdi-calendar-range"
                                @blur="date = parseDate(dateFormatted)"
                                required
                                v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                                name="ADDRESS"
                                label="Địa chỉ"
                                prepend-icon="mdi-map-marker"
                                placeholder="Nhập địa chỉ cho người dùng"
                                v-model="user.ADDRESS"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <button class="btn-add" type="submit">Thêm mới</button>
                </v-card-actions>
            </v-form>
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
            user: {
                GENDER: 1,
                error: false,
                message_error: '',
                success: false,
                message_success: ''
            },
            genders: [
                {text: 'Nam', value: 1},
                {text: 'Nữ', value: 0}
            ],
            date: new Date().toISOString().substr(0, 10),
            dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
            menu1: false,
                }
    },
    computed: {
        computedDateFormatted () {
            return this.formatDate(this.date)
        },
    },
    watch: {
        date (val) {
            this.dateFormatted = this.formatDate(this.date)
        },
    },
    methods: {
        renderAvatar()
        {
            var reader  = new FileReader()
            const file = this.$refs.MyAvatar.files[0]
            this.user.AVATAR = file
            this.avatar  = URL.createObjectURL(file)
            // console.log(file)
        },
         formatDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${day}/${month}/${year}`
        },
        parseDate (date) {
            if (!date) return null
            const [month, day, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        checkUsername()
        {
            this.$http.post(this.$store.state.API_URL + 'user/check?api_token='+this.$session.get('token')+'&USERNAME='+this.user.USERNAME)
            .then((response) => {
                if(response.data == true)
                {
                    this.user.erorr = false
                    this.user.message_error = ''
                    this.user.message_success = 'Tài khoản hợp lệ!'
                    this.user.success = true
                }
                else
                {
                    this.user.success = false
                    this.user.message_success = ''
                    this.user.message_error = 'Tài khoản không hợp lệ!'
                    this.user.erorr = true

                }
            })
        },
        createUser()
        {
            const data = new FormData()
            if(this.avatar != null)
            {
                data.append("AVATAR",this.user.AVATAR)
            }
            data.append("USERNAME",this.user.USERNAME)
            data.append("PASSWORD",this.user.PASSWORD)
            data.append("NAME",this.user.NAME)
            data.append("EMAIL",this.user.EMAIL)
            data.append("PHONE",this.user.PHONE)
            data.append("GENDER",this.user.GENDER)
            data.append("BIRTH_DATE",this.date)
            data.append("ADDRESS",this.user.ADDRESS)
            this.$http.post(this.$store.state.API_URL + 'user?api_token='+this.$session.get('token'),data).then((response) =>{
                console.log(response.data)
            })
        }
    }
}
</script>
<style scoped>
.avatar {position: relative;text-align: center}
.input-file {position: absolute;z-index: 999;top: 0;left: 0;width: 100%;height: 100%;opacity: 0;cursor: pointer;;}
</style>