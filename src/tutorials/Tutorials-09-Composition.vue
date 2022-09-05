<script setup>
    // Lifecycle diagram:
    // https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram

    // 注意 setup 這個 Composition API 會比 Init Options API 更早
    // 這部分和 React 是相對的
    // (畢竟乍看之下 Vue Options 比較像 React Class Components)
    // (而 Vue Composition API 比較像 React Functional Components)

    import { ref, onMounted } from 'vue';

    const p = ref(null);

    // 使用 onMounted 這個 Hook

    onMounted(() => {
        p.value.textContent = 'mounted!';
    });
</script>

<template>
    <p ref="p">
        Hello~
    </p>
</template>