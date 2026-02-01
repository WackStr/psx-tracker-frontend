import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/router'

async function enableMocking() {
    if (import.meta.env.VITE_USE_MOCK_API !== 'true') {
        return
    }

    const { worker } = await import('./mocks/browser')
    
    return worker.start({
        onUnhandledRequest: 'bypass'
    })
}

enableMocking().then(() => {
    const app = createApp(App)
    app.use(router)
    app.mount('#app')
})
