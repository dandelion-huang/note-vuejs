<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        message: {
            type: String,
            default: '',
        },
    })

    const titleClass = ref('title');
    const message = ref(props.message) 
</script>

<template>
    <h1 :class="titleClass">
        {{ message.split('').reverse().join('') }}
    </h1>
</template>

<style>
    .title {
        color: #F09;
    }
</style>