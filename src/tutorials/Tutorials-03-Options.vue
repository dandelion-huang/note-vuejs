<script>
    // Attribute Bindings

    export default {
        // component options
        // declare some reactive state here.
        props: {
            message: {
                type: String,
                default: '',
            },
        },
        data() {
            return {
                titleClass: 'title'
            }
        }
    }
</script>

<template>
    <!-- 這裡使用的是 v-bind 語法 -->
    <!-- <div v-bind:id="dynamicId"></div> -->
    <!-- 可以簡寫如下 -->
    <!-- <div :id="dynamicId"></div> -->
    <h1 :class="titleClass">
        {{ message.split('').reverse().join('') }}
    </h1>
</template>

<style>
    .title {
        color: #F09;
    }
</style>