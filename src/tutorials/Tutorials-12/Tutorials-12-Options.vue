<script>
    // Props

    import ChildComp12O from './ChildComp-12-Options.vue';

    export default {
        components: {
            ChildComp12O,
        },
        data() {
            return {
                greeting: 'hello from parent',
            };
        }
    }
</script>

<template>
    <!-- 可以留意 msg 和 :msg 的差別 -->
    <ChildComp12O :msg="greeting" />
</template>