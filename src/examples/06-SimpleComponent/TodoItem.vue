<script setup>
    // vue/require-default-prop 這個規則希望有預設值
    // Object 的寫法會和 Primitive 稍微不一樣
    /*
        {
            type: String,
            default: 'Wololo~',
        }
    */
    const props = defineProps({
        todo: { 
            type: Object,
            require: false,
            default() { 
                return { 
                    id: 0,
                    text: 'Todododo~~~'
                }; 
            },
        }
    });
</script>

<template>
    <li>{{ todo.text }}</li>
</template>