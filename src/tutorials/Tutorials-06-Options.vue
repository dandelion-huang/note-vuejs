<script>
    // Conditional Rendering

    export default {
        data() {
            return {
                awesome: true,
            }
        },
        methods: {
            toggle() {
                this.awesome = !this.awesome;
            }
        }
    }
</script>

<template>
    <!-- 透過 v-if 進行條件渲染 -->
    <button @click="toggle">
        toggle
    </button>
    <h1 v-if="awesome">
        Vue is awesome!
    </h1>
    <h1 v-else>
        Oh no 😢
    </h1>
</template>