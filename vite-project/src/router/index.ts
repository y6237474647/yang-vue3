import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router';

const routes:RouteRecordRaw[] = [

    {
        path:"/login",
        name:"login",
        component:() =>import('../views/login/login.vue')

    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes,//路由配置
})