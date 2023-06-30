import { createApp } from 'vue'
//import VueRouter from 'vue-router'
import {createRouter, createWebHashHistory} from "vue-router";
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import HomeVue from "@/views/Home";
import PlantCard from "@/views/PlantCard";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    { path: '/', component: HomeVue },
    { path: '/plants', component: PlantCard },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
//const router = new VueRouter({
//    routes:routes
//})
const router = createRouter({history:createWebHashHistory(),
routes: routes})

const app = createApp(App);
app.use(ArcoVue).use(router);
app.mount('#app');
