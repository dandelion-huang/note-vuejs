<script>
    // Form Bindings

    export default {
        data() {
            return {
                text: '',
            }
        },
        // methods: {
        //     onInput(e) {
        //         // a v-on handler receives the native DOM event
        //         // as the argument.
        //         this.text = e.target.value
        //     }
        // }
    }
</script>

<template>
    <!-- 透過 v-bind 和 v-on 一起使用便可以在表單元素上進行雙向綁定 -->
    <!-- <input :value="text" @input="onInput"> -->
    <!-- 記得搭配 methods: { onInput(e)... } -->
    <!-- 可以簡化為 v-model 本質上是上面的語法糖 -->
    <input
        v-model="text"
        placeholder="Type something?"
    >
    <p>{{ text }}</p>
    <!-- v-model 不需要再寫 onInput(e)... -->
</template>