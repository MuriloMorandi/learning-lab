<template>
  <q-page class="row items-center justify-evenly">
    <q-table
      :rows="todos"
      :columns="columns"
      :visible-columns="visibleColumns"
      row-key="id"
    >
      <template v-slot:top-right>
        <q-select
          v-model="visibleColumns"
          multiple
          outlined
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
        />
      </template>
    </q-table>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Todo } from 'components/models'
import { api } from 'src/boot/axios'
import { QTableColumn } from 'quasar'

defineOptions({
  name: 'IndexPage'
})

const columns: QTableColumn[] = [
  {
    name: 'id',
    label: 'ID',
    align: 'left',
    field: 'id',
    sortable: true,
    required: true
  },
  {
    name: 'text',
    label: 'Title',
    align: 'left',
    field: 'text',
    sortable: true,
    required: false
  }
]

const visibleColumns = ref(
  columns.filter((column) => !column.required).map((column) => column.name)
)

const todos = ref<Todo[]>([])

const refresh = () => {
  api.get('/todos').then((response) => {
    todos.value = response.data
  })
}

onMounted(() => {
  refresh()
})
</script>
