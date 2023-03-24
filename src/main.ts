import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from "./store";
import VConsole from "vconsole";
new VConsole();

const app = createApp(App)
//配置模块
app.use(router) //路由
app.use(store)  //缓存
app.mount('#app')
