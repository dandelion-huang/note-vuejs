<script>
    // Event Listening

    export default {
        data() {
            return {
                count: 0
            }
        },
        // increment 必須要宣告在 methods 中
        methods: {
            increment() {
                this.count++;
            }
        }
    }
</script>

<template>
    <button @click="increment">
        count is: {{ count }}
    </button>
</template>