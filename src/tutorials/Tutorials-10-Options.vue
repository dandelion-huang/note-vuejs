<script>
    // Watchers

    // 用來處理 side-effects 也就是說這相對於 componentDidUpdate()

    export default {
        data() {
            return {
                todoId: 1,
                todoData: null,
            }
        },
        watch: {
            // 如果 todoID 改變了就重新抓資料
            // 相對於 React Class Components 的 componentDidUpdate()
            // 可以利用 prevProps 做比對
            todoId() {
                this.fetchData();
            }
            // count(newCount) {
            //     // yes, console.log() is a side effect
            //     console.log(`new count is: ${newCount}`)
            // }
        },
        mounted() {
            this.fetchData();
        },
        methods: {
            async fetchData() {
                this.todoData = null; // 使 Loading... 運作
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/todos/${this.todoId}`
                );
                this.todoData = await res.json();
            }
        }
    }
</script>

<template>
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++">
        Fetch next todo
    </button>
    <p v-if="!todoData">
        Loading...
    </p>
    <pre v-else>{{ todoData }}</pre>
</template>