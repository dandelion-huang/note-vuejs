<script>
    // Slots (插槽)
    
    // 除了透過 props 來傳遞數據之外
    // 父層還可以透過 slot 將模板片段傳遞給子層
    // 相當於 React 的 props.children 的反向
    // <ChildComp>
    //     This is some slot content!
    // </ChildComp>

    import ChildComp14O from './ChildComp-14-Options.vue';

    export default {
        components: {
            ChildComp14O,
        },
        data() {
            return {
                msg: 'from parent',
            };
        }
    }
</script>

<template>
    <ChildComp14O>
        Message: {{ msg }}
    </ChildComp14O>
</template>