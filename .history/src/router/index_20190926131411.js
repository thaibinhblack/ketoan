import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('@/page/login.vue')
    },
    {
        path: '/manager',
        component: () => import('@/page/manager.vue'),
        children: [
            {
                path: 'folders',
                component: () => import('@/page/folder/folder.vue')
            },
            {
                path: 'folder/:uuid',
                component: () => import('@/page/folder/detailFolder.vue')
            },
            {
                path: 'historys',
                component: () => import("@/page/history/history.vue")
            },
            {
                path: 'users',
                component: () => import("@/page/user/users.vue")
            },
            {
                path: 'add-user',
                component: () => import('@/page/user/addUser.vue')
            }
        ]
    }
]

export default new VueRouter({
    mode: 'history',
    routes: routes
})