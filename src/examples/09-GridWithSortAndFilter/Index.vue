<!--
    受不了了 關掉 vue/multi-word-component-names
    同時也將 VSCode Extension: vetur 更改為 volor
-->

<script setup>
    import { ref } from 'vue';
    import Grid from './Grid.vue';

    const searchQuery = ref('');
    const gridColumns = ['name', 'power'];
    const gridData = [
        { id: 1, name: 'Chuck Norris', power: Infinity },
        { id: 2, name: 'Bruce Lee', power: 9000 },
        { id: 3, name: 'Jackie Chan', power: 7000 },
        { id: 4, name: 'Jet Li', power: 8000 }
    ];
</script>

<template>
    <form id="search">
        Search: 
        <input 
            v-model="searchQuery"
            name="query" 
        >
    </form>
    <!-- 注意 filter-key 傳入後變成 filterKey -->
    <Grid
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery"
    />
</template>

<style scoped>
    #search {
        margin-bottom: 20px;
    }
</style>