import { createApp } from 'vue'
//import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from "vue-router";
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import HomeVue from "@/views/Home";
import PlantCard from "@/views/PlantCard";
import InfoView from "@/views/InfoView";
import PredictView from "@/views/PredictView";




const routes = [
    { name: 'home', path: '/', component: HomeVue },
    { name: 'plants', path: '/plants', component: PlantCard },
    { name: 'plant', path: '/plant', component: InfoView },
    { name: 'predict', path: '/predict', component: PredictView, meta: { keepAlive: true } }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

const app = createApp(App);
app.use(ArcoVue).use(router);
app.mount('#app');
