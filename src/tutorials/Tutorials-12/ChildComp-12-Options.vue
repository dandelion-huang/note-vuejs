<script>
    // Props

    export default {
        props: {
            msg: {
                type: String,
                default: '',
            },
        }
    }
</script>

<template>
    <h2>{{ msg || 'No props passed yet' }}</h2>
</template>