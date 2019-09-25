<template>
<v-card  class="left-sidebar" :class="{active: active}"  height="100%">
    <v-navigation-drawer
    permanents
    width="100%"
    height="100%"
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
                <!-- <img v-if="user.AVATAR != null" :src="$store.state.PUBLIC_URL + user.AVATAR" alt="alt"> -->
            </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
            <!-- <v-list-item-title class="title">{{user.USERNAME}}</v-list-item-title>
            <v-list-item-subtitle>{{user.EMAIL}}</v-list-item-subtitle> -->
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
    <v-list-item link to="/manager"> 
        <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Dashboard</v-list-item-title>
    </v-list-item>
        <v-list-item link to="/manager/folders">
            <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                Quản lý folder
            </v-list-item-title>
        </v-list-item>
        <!-- Quản lý user -->
        <v-list-group>
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
    props: ["active"],
    data()
    {
        return {
            user: {}
        }
    },
    created()
    {
    }
}
</script>

<style scoped>
.item-sub {padding-left: 45px;text-transform: uppercase}
.left-sidebar {width: 0}
.left-sidebar.active {width: 250px}
a {text-decoration: none}
</style>