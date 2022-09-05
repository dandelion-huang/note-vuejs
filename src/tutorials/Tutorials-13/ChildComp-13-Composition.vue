<script setup>
    const emit = defineEmits(['response']);

    emit('response', 'Hello From Child~');
</script>

<template>
    <h2>Child Component</h2>
</template>