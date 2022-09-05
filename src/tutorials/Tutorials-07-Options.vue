<script>
    // List Rendering

    // There are two ways to update the list:
    // 1. Call mutating methods on the source array:
    // this.todos.push(newTodo)
    // 2. Replace the array with a new one:
    // this.todos = this.todos.filter(/* ... */)

    let id = 0;

    export default {
        data() {
            return {
                newTodo: '',
                todos: [
                    { id: id++, text: 'learn HTML' },
                    { id: id++, text: 'learn CSS' },
                    { id: id++, text: 'learn JS' },
                    { id: id++, text: 'learn Vue' },
                ],
            }
        },
        methods: {
            addTodo() {
                if (this.newTodo !== '') {
                    this.todos.push({
                        id: id++,
                        text: this.newTodo,
                    })
                    this.newTodo = ''; // 清空 input
                }
            },
            removeTodo(todo) {
                this.todos = this.todos.filter((t) => t !== todo);
            }
        }
    }
</script>

<template>
    <!-- submit 事件並 preventDefault() -->
    <form @submit.prevent="addTodo">
        <input v-model="newTodo">
        <button>Add Todo</button>    
    </form>
    <!-- 透過 v-for 進行條列式渲染 -->
    <ul>
        <!-- todo is a local variable -->
        <!-- It's only accessible on or inside the v-for element, -->
        <!-- similar to a function scope. -->
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