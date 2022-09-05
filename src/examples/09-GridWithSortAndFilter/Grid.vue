<script setup>
    import { ref, computed } from 'vue';

    const props = defineProps({
        // 寫法應該和 Object 相同
        // 空陣列應該積極做 Type Annotation 日後處理
        data: {
            type: Array,
            default() {
                return [];
            }
        },
        columns: {
            type: Array,
            default() {
                return [];
            }
        },
        filterKey: {
            type: String,
            default: '',
        },
    });

    const sortKey = ref('');
    const sortOrders = ref(
        props.columns.reduce((o, key) => ((o[key] = 1), o), {})
    );

    const filteredData = computed(() => {
        let { data, filterKey } = props;
        
        if (filterKey) {
            filterKey = filterKey.toLowerCase();
            data = data.filter((row) => {
                return Object.keys(row).some((key) => {
                    return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
                })
            })
        }

        const key = sortKey.value;

        if (key) {
            const order = sortOrders.value[key];
            data = data.slice().sort((a, b) => {
                a = a[key];
                b = b[key];
                return (a === b ? 0 : a > b ? 1 : -1) * order;
            })
        }

        return data;
    });

    const sortBy = (key) => {
        sortKey.value = key;
        sortOrders.value[key] *= -1;
    };

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
</script>

<template>
    <table v-if="filteredData.length">
        <thead>
            <tr>
                <th
                    v-for="key in columns"
                    :key="key"
                    :class="{ active: sortKey === key}"
                    @click="sortBy(key)"
                >
                    {{ capitalize(key) }}
                    <span
                        class="arrow"
                        :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"
                    />
                </th>
            </tr>
        </thead>
        <tbody>
            <tr 
                v-for="entry in filteredData"
                :key="entry"
            >
                <td 
                    v-for="key in columns"
                    :key="key"
                >
                    {{ entry[key] }}
                </td>
            </tr>
        </tbody>
    </table>
    <p v-else>
        No matches found.
    </p>
</template>

<style>
    table {
        border: 2px solid #42B983;
        border-radius: 3px;
        background-color: #FFFFFF;
    }

    th {
        background-color: #42B983;
        color: #FFFFFFA8;
        cursor: pointer;
        user-select: none;
    }

    td {
        background-color: #F9F9F9;
    }

    th,
    td {
        min-width: 120px;
        padding: 10px 20px;
    }

    th.active {
        color: #FFFFFF;
    }

    th.active .arrow {
        opacity: 1;
    }

    .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: 0.66;
    }

    .arrow.asc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #fff;
    }

    .arrow.dsc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #fff;
    }
</style>