import {createRouter, createWebHistory} from 'vue-router'
import Indexes from   '@/pages/Indexes.vue'
import HomePage from '@/pages/HomePage.vue'
import SignUpPage from '@/pages/SignUpPage.vue'
import Dashboard from '@/pages/Dashboard.vue'
import DashboardIndexes from '@/pages/dashboard/Indexes.vue'
import DashboardMarketSnapshots from '@/pages/dashboard/MarketSnapshots.vue'
import DashboardOrders from '@/pages/dashboard/Orders.vue'
import { verifyToken } from '@/services/authService'

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/indexes', name: 'Indexes', component: Indexes, meta: { requiresAuth: true } },
    { path: '/signup',  name: 'SignUp',  component: SignUpPage },
    { 
        path: '/dashboard', 
        name: 'Dashboard', 
        component: Dashboard, 
        meta: { requiresAuth: true },
        children: [
            { path: '', redirect: '/dashboard/indexes' },
            { path: 'indexes', name: 'DashboardIndexes', component: DashboardIndexes },
            { path: 'market-snapshots', name: 'DashboardMarketSnapshots', component: DashboardMarketSnapshots },
            { path: 'orders', name: 'DashboardOrders', component: DashboardOrders }
        ]
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