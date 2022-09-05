<script>
    // Emits (發射)
    
    // 在 React 中子層要傳遞資料給父層的話
    // 必須使用父層傳遞下來的 setState() 方法 (單向資料流)
    
    // 而在雙向資料流的 Vue 中
    // 子層可以發射事件給父層
    // 而父層可以監聽子層發出的事件 (by v-on)

    import ChildComp13O from './ChildComp-13-Options.vue';

    export default {
        components: {
            ChildComp13O,
        },
        data() {
            return {
                childMsg: 'No child msg yet',
            };
        }
    }
</script>

<template>
    <ChildComp13O @response="(msg) => childMsg = msg" />
    <p>{{ childMsg }}</p>
</template>