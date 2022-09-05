<script setup>
    import { ref } from 'vue';
    import ChildComp14C from './ChildComp-14-Composition.vue';

    const msg = ref('From Parent~');
</script>

<template>
    <ChildComp14C>
        Message: {{ msg }}
    </ChildComp14C>
</template>