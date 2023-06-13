import { RouteLocationNormalized, RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import EventoForm from '../pages/EventoForm.vue'
import AdminHome from '../pages/AdminHome.vue'
import { useUserStore } from '../stores/userStore'


const routes: RouteRecordRaw[] = [
    {path: "/", component: Home},
    {path: "/login", component: Login},
    {path: "/criarEvento", component: EventoForm},
    {path: "/admin", component: AdminHome, meta: { permissions: ['admin'] } }
]

export const router = createRouter({
    routes,
    history:createWebHistory()
})

router.beforeEach((to: RouteLocationNormalized, _) => {

    const userStore = useUserStore()
  
    if (to.meta.permissions) {
      if (!userStore.isAuthenticated) {
        return { path: "/login" }
      } else {
        if(!userStore.isAdmin) {
          return { path: "/" }
        }
      }
    }
  })