<script setup>
    // Vue 官方文件是說 defineProps 和 defineEmits 是 compiler macro
    // No need to be imported
    
    // 不過 eslint 會跳出警示
    // 可以選擇讓 eslint ignore 這隻檔案或 import 它
    // 反正無傷大雅
    // 這次我們選擇 npm i eslint-plugin-vue 搭配 .eslintrc 來處理    

    // import { defineProps } from 'vue';

    const props = defineProps({
        msg: {
            type: String,
            default: '',
        },
    }); 
</script>

<template>
    <h2>{{ msg || 'No props passed yet' }}</h2>
</template>