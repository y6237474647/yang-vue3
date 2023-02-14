import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { App } from 'vue'
const routes: RouteRecordRaw[] = [

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