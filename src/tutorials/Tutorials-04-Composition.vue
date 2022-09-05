<script setup>
    import { ref } from 'vue';

    const count = ref(0);

    const increment = () => {
        count.value++;
    };
</script>

<template>
    <!-- 這裡使用的是 v-on 語法 -->
    <!-- <button v-on:click="increment">{{ count }}</button> -->
    <!-- 可以簡寫如下 -->
    <!-- <button @click="increment">{{ count }}</button> -->
    <button @click="increment">
        count is: {{ count }}
    </button>
</template>