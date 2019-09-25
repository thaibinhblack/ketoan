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
                component: () => import('@/page/folder/folder/vue')
            }
        ]
    }
]

export default new VueRouter({
    mode: 'history',
    routes: routes
})