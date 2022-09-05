<script setup>
    import { ref } from 'vue';
    import ChildComp12C from './ChildComp-12-Composition.vue';

    const greeting = ref('Hello From Parent~');
</script>

<template>
    <ChildComp12C :msg="greeting" />
</template>