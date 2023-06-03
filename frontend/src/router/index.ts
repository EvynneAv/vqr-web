import { RouteRecordRaw, createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import EventoForm from '../pages/EventoForm.vue'


const routes: RouteRecordRaw[] = [
    {path: "/", component: Home},
    {path: "/login", component: Login},
    {path: "/criarEvento", component: EventoForm}
]

export const router = createRouter({
    routes,
    history:createWebHistory()
})