<script setup>
    import { ref } from 'vue';

    // A "ref" is a reactive data source that stores a value.
    //              ^^^^^^^^

    // ref      : 可以接受任何型態的資料，
    //            但是不會對物件或陣列內部的屬性變動做監聽。
    // reactive : 只能接受 Object 或 Array，會對內部的屬性變動做深層的監聽，
    //            取資料時不需要 .value。
    const message = ref('Hello World');
</script>

<template>
    <h1>{{ message }}</h1>
</template>