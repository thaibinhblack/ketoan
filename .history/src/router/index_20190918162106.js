import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/manager',
        component: () => import('@/page/manager.vue')
    }
]

export default new VueRouter({
    mode: 'history',
    routes: routes
})