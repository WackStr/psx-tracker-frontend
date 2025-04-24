import {createRouter, createWebHistory} from 'vue-router'
import Indexes from   '@/pages/Indexes.vue'
import HomePage from '@/pages/HomePage.vue'
import { verifyToken } from '@/services/authService'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/indexes',
        name: 'Indexes',
        component: Indexes,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to) => {
    if (to.meta.requiresAuth) {
        try {
            await verifyToken()
        } catch {
            localStorage.removeItem('auth_token')
            return { name: 'Home'}
        }
    }
})

export default router