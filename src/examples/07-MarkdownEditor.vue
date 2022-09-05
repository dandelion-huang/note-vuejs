<!--
    A simple markdown editor.
-->

<script setup>
    import { ref, computed } from 'vue';
    import { marked } from 'marked';
    import { debounce } from 'lodash-es';

    const input = ref('# Hello');

    const output = computed(() => marked(input.value));

    //
    const update = debounce((e) => {
        input.value = e.target.value;
    }, 100);
</script>

<template>
    <div class="editor">
        <textarea
            class="input"
            :value="input"
            @input="update"
        />
        <!-- 
            v-html directives can lead to XSS attack.
        -->
        <!-- 
            Ref: https://blog.csdn.net/zhaoletf/article/details/115101293 
        -->
        <!-- 
            這裡先不去更動 @vue 中的 webpack-chain
            先採用第二種做法 
            在 main.js 引入 vue-dompurify-html
        -->
        <div
            v-dompurify-html="output"
            class="output"
        />
    </div>
</template>

<style scoped>
    body {
        margin: 0;
    }

    .editor {
        display: flex;
        height: 100vh;
    }

    .input,
    .output {
        box-sizing: border-box;
        width: 50%;
        height: 100%;
        overflow: auto;
        padding: 0 20px;
    }

    .input {
        border: none;
        border-right: 1px solid #CCCCCC;
        resize: none;
        outline: none;
        background-color: #F6F6F6;
        font-size: 14px;
        font-family: 'Monaco', courier, monospace;
        padding: 20px;
    }

    code {
        color: #FF6666;
    }
</style>