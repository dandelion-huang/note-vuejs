<script>
    // Computed Property

    let id = 0;

    export default {
        data() {
            return {
                newTodo: '',
                hideCompleted: false,
                todos: [
                    { id: id++, text: 'learn HTML', done: true },
                    { id: id++, text: 'learn CSS', done: true },
                    { id: id++, text: 'learn JS', done: true },
                    { id: id++, text: 'learn Vue', done: false },
                ],
            }
        },
        computed: {
            filteredTodos() {
                return this.hideCompleted
                    ? this.todos.filter((t) => !t.done)
                    : this.todos
            }
        },
        methods: {
            addTodo() {
                if (this.newTodo !== '') {
                    this.todos.push({
                        id: id++,
                        text: this.newTodo,
                        done: false,
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