<template>
<v-row>
    <v-col cols="12" md="4">
        <span class="title-content">Thông tin cá nhân</span>
    </v-col>
    <v-col cols="12" sm="12" md="8">
        <ul class="list-link">
            <li><router-link to="/manager"><v-icon>mdi-home</v-icon> Home</router-link></li>
            <li><v-icon>mdi-chevron-right</v-icon></li>
            <li><v-icon>mdi-account</v-icon> profile</li>
        </ul>
    </v-col>
     <v-col cols="12" sm="12">
        <v-card>
            <v-card-title primary-title>
                <v-alert style="width: 100%" :type="message.type" v-if="message.text != null" :value="true">
                    {{message.text}}
                </v-alert>
            </v-card-title>
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
                                name="PASSWORD"
                                label="Mật khẩu"
                                prepend-icon="mdi-key"
                                placeholder="Nhập mật khẩu cho người dùng"
                                v-model="user.PASSWORD"
                                required
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
                        <v-col cols="12" sm="6" md="4" v-if="rules.length > 0">
                            <v-select
                                :items="rules"
                                item-text="NAME_RULE"
                                item-value="UUID_RULE"
                                v-model="user.UUID_RULE"
                                prepend-icon="mdi-account-key"
                                label="Quyền"
                            ></v-select>
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
            user: {}
        }
    },
    async created()
    {
        this.$store.state.loading = true
        await this.$http.get(this.$store.state.API_URL + 'Authorizon?api_token='+this.$session.get('token'))
        .then((response) => {
            this.user = response.data
        })
         this.$store.state.loading = false
    }
}
</script>