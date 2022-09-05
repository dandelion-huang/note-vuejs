<script>
    // Lifecycle and Template Refs

    // Lifecycle diagram:
    // https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram

    // mounted() 就相當於 React Class Component 的 componentDidMount()

    export default {
        mounted() {
            // 注意是 $refs
            this.$refs.p.textContent = 'mounted!';
        }
    }
</script>

<template>
    <p ref="p">
        Hello~
    </p>
</template>