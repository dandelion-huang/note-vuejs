<script setup>
    // 用來處理 side-effects 也就是說這相對於 useEffect() 與 useLayoutEffect()
    //                                    ^^^^^^^^^^

    import { ref, watch } from 'vue';

    const todoId = ref(1);
    const todoData = ref(null);

    const fetchData = async () => {
        todoData.value = null;
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
        );
        todoData.value = await res.json();
    }

    // Composition API 中並不需要包在 onMounted() 中
    // 這部分和 React 的 useEffect() 很不一樣
    fetchData();
    watch(todoId, fetchData);
</script>

<template>
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++">
        Fetch next todo
    </button>
    <p v-if="!todoData">
        Loading...
    </p>
    <pre v-else>{{ todoData }}</pre>
</template>