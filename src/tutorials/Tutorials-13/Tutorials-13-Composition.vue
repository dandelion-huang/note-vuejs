<script setup>
    import { ref } from 'vue';
    import ChildComp13C from './ChildComp-13-Composition.vue';

    const childMsg = ref('No child msg yet');
</script>

<template>
    <ChildComp13C @response="(msg) => childMsg = msg" />
    <p>{{ childMsg }}</p>
</template>