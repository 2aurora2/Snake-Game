import {createRouter, createWebHistory, RouterOptions} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/play',
            name: 'play',
            component: () => import('../views/GameView.vue')
        },
        {
            path: '/intro',
            name: 'intro',
            component: () => import('../views/IntroView.vue')
        }
    ]
} as RouterOptions)

export default router
