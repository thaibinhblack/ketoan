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
    <v-col cols="12" sm="12">
        <v-card>
            <v-card-title primary-title>
                <v-alert style="width: 100%" :type="message.type" v-if="message.text != null" :value="true">
                    {{message.text}}
                </v-alert>
            </v-card-title>
            <v-form @submit.prevent="updateUser()">
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
                                <img v-else :src="$store.state.PUBLIC_URL + user.AVATAR" alt="">
                            </v-avatar>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                                name="USERNAME"
                                label="Tài khoản"
                                prepend-icon="mdi-account"
                                placeholder="Nhập tài khoản cho người dùng"
                                v-model="user.USERNAME"
                                disabled
                                :counter="30"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                                name="NAME"
                                label="Họ & Tên"
                                prepend-icon="mdi-account-card-details-outline"
                                placeholder="Nhập họ và tên cho người dùng"
                                v-model="user.NAME"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                                name="EMAIL"
                                label="Email"
                                prepend-icon="mdi-email"
                                placeholder="Nhập nhập email cho người đùng" 
                                v-model="user.EMAIL"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                                name="PHONE"
                                label="SĐT"
                                prepend-icon="mdi-phone"
                                placeholder="Nhập số điện thoại" 
                                v-model="user.PHONE"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                        <v-select
                            :items="genders"
                            v-model="user.GENDER"
                            prepend-icon="mdi-gender-male-female"
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
                    <button class="btn-add" type="submit">Cập nhật</button>
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
            user: {},
            genders: [
                {text: 'Nam', value: 1},
                {text: 'Nữ', value: 0}
            ],
            date: new Date().toISOString().substr(0, 10),
            dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
            menu1: false,
            message:{
                type: null,
                text: null
            }
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
        updateUser()
        {
            const data = new FormData()
            if(this.avatar != null)
            {
                data.append("AVATAR",this.user.AVATAR)
            }
            data.append("USERNAME",this.user.USERNAME)
            // data.append("PASSWORD",this.user.PASSWORD)
            data.append("NAME",this.user.NAME)
            data.append("EMAIL",this.user.EMAIL)
            data.append("PHONE",this.user.PHONE)
            data.append("GENDER",this.user.GENDER)
            data.append("BIRTH_DAY",this.date)
            data.append("ADDRESS",this.user.ADDRESS)
           
            this.$http.post(this.$store.state.API_URL + 'user/'+this.user.UUID_USER+'/update?api_token='+this.$session.get('token'),data).then(() =>{
                this.message.type = 'success'
                this.message.text = 'Thêm người dùng mới thành công'
                this.ApiDetailUser()
            }).catch(() => {
                this.message.type = 'error'
                this.message.text = 'Lôi! Xin vui lòng thử lại!'
            })
            
           
        },
        ApiDetailUser()
        {
            this.$http.get(this.$store.state.API_URL + 'user/'+this.$route.params.username +'?api_token='+this.$session.get('token')).then((response) => {
                this.user = response.data
            })
        }
    },
    created()
    {
        this.ApiDetailUser()
    }
}
</script>

<style scoped>
.avatar {position: relative;text-align: center}
.input-file {position: absolute;z-index: 999;top: 0;left: 0;width: 100%;height: 100%;opacity: 0;cursor: pointer;;}
</style>