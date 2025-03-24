import {createRouter, createWebHistory} from 'vue-router'
import Indexes from   '@/pages/Indexes.vue'
import HomePage from '@/pages/HomePage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/indexes',
        name: 'Indexes',
        component: Indexes
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router