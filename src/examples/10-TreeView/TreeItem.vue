<script setup>
    import { ref, computed } from 'vue';
    import { nanoid } from 'nanoid';

    const props = defineProps({
        model: {
            type: Object,
            default() {
                return {
                    name: '',
                    children: [],
                };
            }
        }
    });

    const emit = defineEmits(['transform', 'append'])

    const isOpen = ref(false);
    const isFolder = computed(() => {
        return props.model.children && props.model.children.length ;
    });

    const toggle = () => {
        isOpen.value = !isOpen.value;
    };

    // 如果把 vue/no-mutating-props 關閉已經可以正常運作
    // 一般來說子層不應該去更動到父層傳入的 props
    // 可以用 emit 處理

    const changeType = () => {
        if (!isFolder.value) {
            emit('transform', []);
            addChild();
            isOpen.value = true;
        }
    };

    const addChild = () => {
        emit('append', { name: 'new stuff', children: [] })
    };
</script>

<template>
    <!-- ul 在父層 -->
    <li>
        <div
            :class="{ bold: isFolder }"
            @click="toggle"
            @dblclick="changeType"
        >
            {{ model.name }}
            <span
                v-if="isFolder"
            >[</span>
            <span
                v-if="isFolder"
                class="notation"
            >
                {{ isOpen ? '-' : '+' }}
            </span>
            <span
                v-if="isFolder"
            >]</span>
        </div>
        <ul 
            v-show="isOpen" 
            v-if="isFolder"
        >
            <!--
                A component can recursively render itself using its
                "name" option (inferred from filename if using SFC)
            -->
            <!--
                WARNING: vue/no-template-shadow
                but we want to recursively render itself in this case
            -->
            <TreeItem
                v-for="model in model.children"
                :key="nanoid() + '-' + model.name"
                class="item"
                :model="model"
                @transform="(array) => model.children = array"
                @append="(childObject) => model.children.push(childObject)"
            />
            <li
                class="add"
                @click="addChild"
            >
                +
            </li>
        </ul>
    </li>
</template>

<style scoped>
    .notation {
        position: relative;
        top: -1px;
    }
</style>