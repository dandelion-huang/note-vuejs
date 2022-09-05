<script setup>
    import { ref } from 'vue';

    const message = ref('Hello World');

    const reverseMessage = () => {
        // Access/mutate the value of a ref via its .value property.
        message.value = message.value.split('').reverse().join('');
    };

    const notify = () => {
        alert('Navigation was prevented haha!!');
    };
</script>

<template>
    <!--
        Note we don't need .value inside templates because
        refs are automatically "unwrapped" in templates.
    -->
    <h1>{{ message }}</h1>
    <button @click="reverseMessage">
        Reverse Message
    </button>
    <!-- 
        Can also be an inline expression statement 
    -->
    <button @click="message += '!'">
        Append "!"
    </button>
    <!--
        Vue also provides modifiers for common tasks
        such as e.preventDefault() and e.stopPropagation()
    -->
    <a
        href="https://vuejs.org"
        @click.prevent="notify"
    >
        A link with e.preventDefault()
    </a>
</template>

<style>
    button, a {
        display: block;
        margin-bottom: 1em;
    }
</style>
