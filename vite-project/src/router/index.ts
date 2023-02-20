import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { App } from 'vue'
import Layout from '../components/layout/index.vue'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'index',
        component:Layout,
        redirect: '/table',
        children: [{
            path: 'table',
            name: 'table',
            component: () => import('../components/lable/index.vue')
        }]
    },
    {
        path: "/login",
        name: "login",
        component: () => import('../views/login/index.vue')

    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,//路由配置
})
export const initRouter = (app: App<Element>) => {
    app.use(router)
}
// export default router