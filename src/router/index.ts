import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes:Array<RouteRecordRaw> = [
    {
        path:'/home',
        name:'Home',
        component:()=>import("../components/HelloWorld.vue"),
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;