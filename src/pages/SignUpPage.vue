<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { signUp } from '@/services/authService'

    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const password = ref('')
    const loading = ref(false);
    const error = ref<string|null>(null)
    const router = useRouter()

    const handleSignUp = async() => {
        loading.value = true
        error.value = null
        try{
            await signUp({
                first_name: firstName.value,
                last_name: lastName.value,
                email: email.value,
                password: password.value
            })
            router.push({name: 'Home'})
        } catch (e: unknown) {
            error.value = e instanceof Error ? e.message : String(e)
        } finally {
            loading.value = false
        }
    }

</script>
<template>
    <div class="signup-page">
        <h1>Sign up</h1>
        <form @submit.prevent="handleSignUp">
            <label>
                First Name:
                <input v-model="firstName" type="text" required />
            </label>
            <label>
                Last Name:
                <input v-model="lastName" type="text" required/>
            </label>
            <label>
                Email:
                <input v-model="email" type="email" required />
            </label>
            <label>
                Password:
                <input v-model="password" type="password" required />
            </label>
            <button type="submit" :disabled="loading">
                {{  loading ? 'Signing up...' : 'Sign up' }}
            </button>
            <p v-if="error" class="error">{{ error }}</p>
        </form>
    </div>
</template>

<style scoped>
.signup-page {
    max-width: 400px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
label {
    display: flex;
    flex-direction: column;
}
button[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
.error {
    color: red;
}
</style>