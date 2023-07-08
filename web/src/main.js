import { createApp } from 'vue'
//import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import HomeVue from "@/views/Home";
import PlantCard from "@/views/PlantCard";
import InfoView from "@/views/InfoView";
import PredictView from "@/views/PredictView";
import SearchList from "@/views/SearchList";



const routes = [
    { name: 'home', path: '/', component: HomeVue },
    { name: 'plants', path: '/plants', component: PlantCard },
    { name: 'plant', path: '/plant', component: InfoView },
    { name: 'predict', path: '/predict', component: PredictView },
    { name: 'key-search', path: '/key-search', component: SearchList }
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    to.params.from = from.path;
    next();
})

const app = createApp(App);
app.use(ArcoVue).use(router);
app.mount('#app');
