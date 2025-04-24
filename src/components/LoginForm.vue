<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import { login } from '@/services/authService'

const username = ref('')
const password = ref('')
const loading = ref(false)
const error = ref<string | null>(null)

const router = useRouter()

const handleLogin = async () => {
    loading.value = true
    error.value = null

    try {
        const { token } = await login(username.value, password.value)
        // store token somewher secure (e.g. localStorage)
        localStorage.setItem('auth_token', token)
        // Redirect to your protected page
        router.push({ name: 'TablePage'})
    } catch (e: unknown) {
        error.value = e instanceof Error ? e.message : String(e)
    } finally {
        loading.value = false
    }
}
</script>

<template>
        <div class="login-container">
            <h2>Login</h2>
        <label>
            Username:
            <input v-model="username"  type="text"/>
        </label>
        <br />
        <label>
            Password:
            <input v-model="password" type="password" />
        </label>
        <br />
        <button :disabled="loading" @click="handleLogin">
            {{ loading ? 'Logging in...' : 'Login' }}
        </button>

        <p v-if="error" class="error">{{  error }}</p>
    </div>
</template>

<style scoped>
.login-container {
    max-width: 300px;
    margin: 40px auto;
    text-align: left;
}
.login-container h2 {
    text-align: center;
    margin-bottom: 1rem;
}
.login-container label {
    display: block;
    margin-bottom: 0.5rem;
}
.login-container input {
    width: 100%;
    padding: 0.5 rem;
    margin-top: 0.25rem;
    box-sizing: border-box;
}
.login-container button{
    margin-top: 1rem;
    width: 100%;
    padding: 0.5rem;
    cursor: pointer;
}
</style>