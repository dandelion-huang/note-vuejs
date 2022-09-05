<script>
    // Components
    // 由於我們已經偷跑很久了 所以這個檔案只是用來代表原本的 App.vue

    // 這是使用 Options API 的寫法

    import ChildComp from './ChildComp.vue';

    export default {
        components: {
            ChildComp,
        }
    }
</script>

<template>
    <ChildComp />
</template>