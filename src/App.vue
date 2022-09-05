<script setup>
// 日後請統一改成使用 Composition API 的 <script setup>
// 包括 App.vue
// 主要有四大優點
// （一）語法簡潔
// （二）可以使用 Pure TypeScript 宣告 props / 發射 (emit) 事件
// （三）更好的效能 (runtime performance) 樣板只會在 render function scope 被編譯
// （四）夠好的 IDE type-interface performance

// DONE: Tutorials
// import Tutorials11OVue from './tutorials/Tutorials-11-Options.vue';
// import Tutorials11CVue from './tutorials/Tutorials-11-Composition.vue';
// import Tutorials14OVue from './tutorials/Tutorials-14/Tutorials-14-Options.vue';
// import Tutorials14CVue from './tutorials/Tutorials-14/Tutorials-14-Composition.vue';

// DONE: Examples/Basics
// import HelloWorld from './examples/01-HelloWorld.vue';
// import HandlingUserInput from './examples/02-HandlingUserInput.vue';
// import AttributeBindings from './examples/03-AttributeBindings.vue';
// import ConditionalAndLoops from './examples/04-ConditionalsAndLoops.vue';
// import FormBindings from './examples/05-FormBindings.vue'
// import SimpleComponent from './examples/06-SimpleComponent/SimpleComponent.vue';

// TODO: Examples/Practical
// import MarkdownEditor from './examples/07-MarkdownEditor.vue';
// import FetchingData from './examples/08-FetchingData.vue';
// import GridWithSortAndFilter from './examples/09-GridWithSortAndFilter/Index.vue';
import TreeView from './examples/10-TreeView/Index.vue';
</script>

<template>
    <TreeView />
</template>
