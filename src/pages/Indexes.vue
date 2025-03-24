<script setup lang="ts">
import {ref, onMounted} from 'vue'
import { fetchIndexData, IndexData} from '@/services/indexService'

const Indexes = ref<IndexData[]>([])
const isLoading = ref(true)
const error = ref<string | null>(null)


const fetchData = async () => {
    try{
        const data = await fetchIndexData()
        Indexes.value = data
    }catch (err: unknown) {
        if(err instanceof Error){
            error.value = err.message
        }else{
            error.value = String(err)
        }
    } finally {
        isLoading.value = false;
    }
}

onMounted(() => {
    fetchData()
})
</script>

<template>
    <div class="table-page">
        <h1>Indexes</h1>

        <div v-if="isLoading">Loading data...</div>
        <div v-else-if="error" class="error">Error fetching data</div>
    
        <table v-else>
            <thead>
                <tr>
                    <th>Company Script</th>
                    <th>Measured on</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(Index, index) in Indexes" :key="index">
                    <td>{{  Index.company_script  }}</td>
                    <td>{{  Index.measured_on }}</td>
                    <td>{{  Index.price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.table-page {
    margin: 2rem;
    text-align: center;
}

table {
    margin: 0 auto;
    border-collapse: collapse;
    width: 50%;
}

th, td {
    border: 1px solid #ccc;
    padding: 8px 12px;
}
</style>