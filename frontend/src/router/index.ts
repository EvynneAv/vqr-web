import { RouteRecordRaw, createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'

const routes: RouteRecordRaw[] = [
    {path: "/", component: Home},
    {path: "/login", component: Login}
]

export const router = createRouter({
    routes,
    history:createWebHistory()
})