<script setup>
import {ref} from 'vue'

const Indexes = ref(
    [{name: 'KSE-100', description: 'The KSE-100 index', stocks: 100, marketCap: 100_000_00}]
)
</script>

<template>
    <div class="table-page">
        <h1>Indexes</h1>
        <table>
            <thead>
                <tr>
                    <th>Index Name</th>
                    <th>Description</th>
                    <th>stocks</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(Index, index) in Indexes" :key="index">
                    <td>{{  Index.name  }}</td>
                    <td>{{  Index.description }}</td>
                    <td>{{  Index.stocks }}</td>
                    <td>{{  Index.marketCap }}</td>
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