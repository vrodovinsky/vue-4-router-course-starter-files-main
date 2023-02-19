import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/destination/:id/:slug",
            name: "destination.show",
            component: () => import('@/views/DestinationShow.vue')
        }
    ],
})

export default router
