<template>
    <q-page>
        <div class="q-pa-md">
            <q-table flat bordered title="Data Table" :columns="columns" :rows="rows" row-key="name" full-width>
                <q-tr>
                    <q-td key="name" label="Name"></q-td>
                    <q-td key="age" label="Age"></q-td>
                </q-tr>
            </q-table>
        </div>
    </q-page>
</template>

<style></style>

<script>
export default {
    name: 'DataSetList',

    data() {
        return {
            columns: [{
                name: 'name',
                label: 'Da Name',
                field: 'name',
                required: true,
                align: 'left',
                sortable: true,
            }, {
                name: 'age',
                label: 'Da Age',
                field: 'age',
            }],
            rows: [{ name: 'John', age: 30 }, { name: 'Alice', age: 25 }]
        };
    }
}
</script>
