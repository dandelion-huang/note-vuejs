<script>
    // Declarative Rendering

    // 學習時使用 SFC (Single-File Component) 寫法
    // Vue 的核心特性是 Declarative Rendering, MVVM

    export default {
        // component options
        // declare some reactive state here.
        data() {
            return {
                message: 'Wololo~',
                counter: {
                    count: 0
                }
            }
        }
    }
</script>

<template>
    <!-- 這是 mustache 語法 ({{}}) -->
    <h1>{{ message }}</h1>
    <p>Count is: {{ counter.count }}</p>
</template>