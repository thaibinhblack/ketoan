<template>
<v-card  class="left-sidebar" :class="{active: classActive}" height="100%">
    <v-navigation-drawer
    permanent
    width="100%"
    >
    <template v-slot:prepend>
        <v-list>
        <v-list-item
            link
            two-line>
            <v-list-item-avatar>
            <v-avatar
                size="50px"
                color="#e2e2e2"
            >
                <img v-if="user.AVATAR != null" :src="$store.state.PUBLIC_URL + user.AVATAR" alt="alt">
            </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
            <v-list-item-title class="title">{{user.USERNAME}}</v-list-item-title>
            <v-list-item-subtitle>{{user.EMAIL}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
        </v-list-item>
        </v-list>
    </template>

    <v-divider></v-divider>

    <v-list
        nav
        dense
    >
        <v-list-group>
            <template v-slot:activator>
              
                    <v-list-item-icon>
                        <v-icon>mdi-book-open-page-variant</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Quản lý booking</v-list-item-title>
            </template>
            <v-list-item link class="item-sub" to="/manager/bookings">
                <v-list-item-title>Danh sách booking</v-list-item-title>
               
            </v-list-item>    
        </v-list-group>
        <!-- Quản lý user -->
        <v-list-group v-if="user.UUID_RULE == 'manager-2019'">
            <template v-slot:activator>
                <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                    Quản lý nhân viên
                </v-list-item-title>
            </template>
            <v-list-item link class="item-sub" to="/manager/users">
                
                <v-list-item-title >
                     Danh sách nhân viên
                </v-list-item-title>
            </v-list-item>
            <v-list-item link class="item-sub">
                <v-list-item-title>
                    <router-link to="/manager/add-user">
                        Thêm mới nhân viên
                    </router-link>
                </v-list-item-title>
            </v-list-item>
        </v-list-group>
        <!-- Quản lý chi nhánh -->
        <v-list-group >
           <template v-slot:activator>
              
                    <v-list-item-icon>
                        <v-icon>mdi-store</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Quản lý chi nhánh </v-list-item-title>
            </template>
            <v-list-item link class="item-sub" to="/manager/stores">
                <v-list-item-title >
                        Danh sách chi nhánh
                </v-list-item-title>
                
            </v-list-item>
            <v-list-item link class="item-sub" to="/manager/add-store">
                <v-list-item-title >
                   
                        Thêm chi nhánh
                 
                    
                </v-list-item-title>
                
            </v-list-item>
             <v-list-item link class="item-sub" to="/manager/services">
                <v-list-item-title>
                  
                        Danh sách dịch vụ
                
                </v-list-item-title>
                
            </v-list-item>
        </v-list-group>
        <v-list-group>
            <template v-slot:activator>
                <v-list-item-icon>
                        <v-icon>mdi-frequently-asked-questions</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Quản lý cẩu hỏi</v-list-item-title>
            </template>
            <v-list-item link class="item-sub" to="/manager/questions">
                <v-list-item-title>
                   
                        Danh sách câu hỏi
                   
                </v-list-item-title>
            </v-list-item>
        </v-list-group>
         <v-list-item link to="/manager/stylists">
            <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
            <v-list-item-title>
                    Quản lý stylist
            </v-list-item-title>
        </v-list-item>
        <v-list-item link to="/manager/historys">
            <v-list-item-icon><v-icon>mdi-history</v-icon></v-list-item-icon>
            <v-list-item-title>
                    Quản lý lịch sử
            </v-list-item-title>
        </v-list-item>
    </v-list>
</v-navigation-drawer>
</v-card>

</template>

<script>
export default {
    props: ["classActive"],
    data()
    {
        return {
            user: {}
        }
    },
    created()
    {
        this.$http.get(this.$store.state.API_URL + 'user/info?api_token='+this.$session.get('token')).then((response) => {
            this.user = response.data
        })
    }
}
</script>

<style scoped>
.item-sub {padding-left: 45px;text-transform: uppercase}
.left-sidebar {width: 0}
.left-sidebar.active {width: 250px}
a {text-decoration: none}
</style>