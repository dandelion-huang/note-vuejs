<script setup>
    import { ref } from 'vue';

    let id = 0;

    const newTodo = ref('');
    const todos = ref([
        { id: id++, text: 'learn HTML' },
        { id: id++, text: 'learn CSS' },
        { id: id++, text: 'learn JS' },
        { id: id++, text: 'learn Vue' }
    ])

    const addTodo = () => {
        if (newTodo.value !== '') {
            todos.value.push({
                id: id++,
                text: newTodo.value,
            })
            newTodo.value = ''; // 清空 input
        }
    };

    const removeTodo = (todo) => {
        todos.value = todos.value.filter((t) => t !== todo);
    };
</script>

<template>
    <form @submit.prevent="addTodo">
        <input v-model="newTodo">
        <button>Add Todo</button>    
    </form>
    <ul>
        <li
            v-for="todo in todos"
            :key="todo.id"
        >
            {{ todo.text }}
            <button @click="removeTodo(todo)">
                X
            </button>
        </li>
    </ul>
</template>