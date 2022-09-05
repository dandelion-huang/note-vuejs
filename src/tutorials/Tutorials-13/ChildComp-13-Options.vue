<script>
    export default {
        emits: ['response'],
        // 第一個參數是事件名稱 其他所有參數都會傳遞給事件偵聽器
        created() {
            this.$emit('response', 'hello from child');
        }
    }
</script>

<template>
    <h2>Child Component</h2>
</template>