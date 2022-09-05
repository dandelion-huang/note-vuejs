<!--
    Here we show the simplest possible component which accepts a prop and renders it.
-->
<!--
    Vue 要求所有的 Component 必須有 Multi-word component names 以避免和 HTML 標籤搞混，
    就像是 React 要求 Component 以大駝峰式命名一樣。
-->

<script setup>
    import { ref } from 'vue';
    import TodoItem from './TodoItem.vue';

    const todoList = ref([
        { id: 1, text: 'Wake up!' },
        { id: 2, text: 'Take a bath.' },
        { id: 3, text: 'Drink a cup of coffee.' },
    ]);
</script>

<template>
    <ol>
        <TodoItem
            v-for="item in todoList"
            :key="item.id"
            :todo="item"
        />
    </ol>
</template>