<!--
    This example fetches latest Vue.js commits data from GitHub’s API and displays them as a list.
    You can switch between the two branches.
-->

<script setup>
    import { ref, watchEffect } from 'vue';

    const API_URL = 
        `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`;

    const branches = ['main', 'v2-compat'];

    const currentBranch = ref(branches[0]);
    const commits = ref(null);

    watchEffect(async () => {
        // this effect will run immediately and then re-run whenever currentBranch.value changes.

        const url = `${API_URL}${currentBranch.value}`;
        commits.value = await (await fetch(url)).json();
    });

    const truncate = (v) =>  {
        const newline = v.indexOf('\n');
        return newline > 0 ? v.slice(0, newline) : v;
    };

    const formatDate = (v) => {
        return v.replace(/T|Z/g, ' ');
    };
</script>

<template>
    <h1>Latest Vue Core Commits</h1>
    <!-- 
        HTML template 初次解析時不會被渲染 留待需要之時
    -->
    <template
        v-for="branch in branches"
        :key="branch.sha"
    >
        <input 
            :id="branch"
            v-model="currentBranch"
            type="radio"
            :value="branch"
            name="branch"
        >
        <label :for="branch">{{ branch }}</label>
    </template>
    <p>vuejs/vue@{{ currentBranch }}</p>
    <ul>
        <li
            v-for="{ html_url, sha, author, commit } in commits"
            :key="sha"
        >
            <a
                :href="html_url"
                target="_blank"
                class="commit"
            >{{ sha.slice(0, 7) }}</a>
            - 
            <span class="message">{{ truncate(commit.message) }}</span><br>
            by 
            <span class="author">
                <a
                    :href="author.html_url"
                    target="_blank"
                >{{ commit.author.name }}</a>
            </span>
            at 
            <span class="date">{{ formatDate(commit.author.date) }}</span>
        </li>
    </ul>
</template>

<style scoped>
    a {
        text-decoration: none;
        color: #42B883;
    }
    li {
        line-height: 1.5em;
        margin-bottom: 20px;
    }
    .author,
    .date {
        font-weight: bold;
    }
</style>