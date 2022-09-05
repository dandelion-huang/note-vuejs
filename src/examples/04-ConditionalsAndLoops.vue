<script setup>
    import { ref } from 'vue';
    import { nanoid } from 'nanoid';

    const show = ref(true);
    const list = ref([1, 2, 3]);
</script>

<template>
    <button @click="show = !show">
        Toggle List
    </button>
    <button @click="list.push(list.length + 1)">
        Push Number
    </button>
    <button @click="list.pop()">
        Pop Number
    </button>
    <button @click="list.reverse()">
        Reverse List
    </button>

    <ul v-if="show && list.length">
        <li 
            v-for="item of list"
            :key="nanoid() + item"
        >
            {{ item }}
        </li>
    </ul>
    <p v-else-if="list.length">
        List is not empty, but hidden.
    </p>
    <p v-else>
        List is empty.
    </p>
</template>

<style scoped>
    /* Ref: scoped v.s. deep selector */
    /* https://ithelp.ithome.com.tw/articles/10266005?sc=iThelpR */
    button + button {
        margin-left: 8px;
    }
</style>