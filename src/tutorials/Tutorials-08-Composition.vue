<script setup>
    import { ref, computed } from 'vue';

    let id = 0;
    
    const newTodo = ref('');
    const hideCompleted = ref(false);
    const todos = ref([
        { id: id++, text: 'learn HTML', done: true },
        { id: id++, text: 'learn CSS', done: true },
        { id: id++, text: 'learn JS', done: true },
        { id: id++, text: 'learn Vue', done: false },
    ]);

    const filteredTodos = computed(() => {
        return hideCompleted.value
            ? todos.value.filter((t) => !t.done)
            : todos.value
    });

    const addTodo = () => {
        if (newTodo.value !== '') {
            todos.value.push({
                id: id++,
                text: newTodo.value,
                done: false,
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
            v-for="todo in filteredTodos"
            :key="todo.id"
        >
            <input
                v-model="todo.done"
                type="checkbox"
            >
            <!-- 條件渲染 className -->
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
            <button @click="removeTodo(todo)">
                X
            </button>
        </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
        <!-- Conditional Rendering -->
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
</template>

<style>
    .done {
        text-decoration: line-through;
    }
</style>