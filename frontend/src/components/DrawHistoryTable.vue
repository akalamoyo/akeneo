<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { onMounted, ref } from 'vue'
import fetchData from '@/components/base/apiClient'
import { formattedDatetime } from '@/utils'
import BaseCard from './base/BaseCard.vue'

const data = ref()
const getDrawHistory = async () => {
  data.value = await fetchData('/history/', 'GET', null)
}

onMounted(() => {
  getDrawHistory()
})

const formatDraws = (relationships: { string: string }) => {
  return Object.entries(relationships)
    .map(([left, right]) => {
      return `${left} <strong> <-------> </strong>${right}`
    })
    .join('<br>')
}
</script>

<template>
  <div class="flex ml-12">
    <BaseCard>
      <Button
        type="submit"
        class="text-blue-300 text-xs bg-gray-800 h-8 rounded-lg mr-8 p-2"
        @click="getDrawHistory()"
        >Refresh</Button
      >
    </BaseCard>
    <DataTable :value="data">
      <Column field="relationships" header="Draws">
        <template #body="slotProps">
          <span v-html="formatDraws(slotProps.data.relationships)" />
        </template>
      </Column>
      <Column field="date" header="Draw Date">
        <template #body="slotProps">
          <span>{{ formattedDatetime(slotProps.data.date) }}</span>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
