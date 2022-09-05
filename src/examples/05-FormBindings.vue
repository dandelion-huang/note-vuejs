<!--
    We can create two-way bindings between state and form inputs using the v-model directive.
-->

<script setup>
    import { ref } from 'vue';

    const text = ref('Edit me');
    const checked = ref(true);
    const checkedNames = ref(['Jack']);
    const picked = ref('One');
    const selected = ref('A');
    const multiSelected = ref(['A']);
</script>

<template>
    <h2>Text Input</h2>
    <!-- 
        Vue DISALLOW self-closing
    -->
    <input v-model="text">
    <!-- Compare with :class="{ abc: isAbc }" -->
    <p class="p-dec">
        {{ text }}
    </p>

    <h2>CheckBox</h2>
    <input
        id="checkbox"
        v-model="checked"
        type="checkbox"
    >
    <label for="checkbox">
        Checked: {{ checked }}
    </label>

    <!--
        multiple checkboxes can bind to the same
        array v-model value
    -->
    <h2>Multi Checkbox</h2>
    <input
        id="jack"
        v-model="checkedNames"
        type="checkbox"
        value="Jack"
    >
    <label for="jack">Jack</label>
    <input
        id="jojo"
        v-model="checkedNames"
        type="checkbox"
        value="Jojo"
    >
    <label for="jojo">Jojo</label>
    <input
        id="jaguma"
        v-model="checkedNames"
        type="checkbox"
        value="Jaguma"
    >
    <label for="jaguma">Jaguma</label>
    <p>Checked names:</p>
    <pre>{{ checkedNames }}</pre>

    <h2>Radio</h2>
    <input
        id="one"
        v-model="picked"
        type="radio"
        value="One"
    >
    <label for="one">One</label>
    <!-- 
        Vue DISALLOW self-closing
    -->
    <br>
    <input
        id="two"
        v-model="picked"
        type="radio"
        value="Two"
    >
    <label for="two">Two</label>
    <br>
    <input
        id="three"
        v-model="picked"
        type="radio"
        value="Three"
    >
    <label for="three">Three</label>

    <h2>Select</h2>
    <select v-model="selected">
        <option
            disabled
            value=""
        >
            --Please select one--
        </option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span class="select">Selected: {{ selected }}</span>

    <h2>Multi Select</h2>
    <select
        v-model="multiSelected"
        multiple
        style="width: 100px"
    >
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span class="multi-select">Selected: {{ multiSelected }}</span>
</template>

<style>
    .p-dec {
        display: inline;
        text-decoration: underline;
        margin-left: 8px;
        position: relative;
        top: 1px;
    }
    .select, .multi-select {
        padding-left: 8px;
    }
</style>