<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const username = ref('')
const password = ref('')

const router = useRouter()

const handleLogin = () => {
    console.log("login attempted")
    router.push({name: 'Indexes'})
    console.log("routed")
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
        <button @click="handleLogin">Login</button>
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