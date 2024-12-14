<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { ref, onMounted } from 'vue'
import { formattedDatetime } from '@/utils'
import fetchData from '@/components/base/apiClient'
import BaseCard from './base/BaseCard.vue'

const data = ref()
const isLoading = ref(true)

const getParticipants = async () => {
  data.value = await fetchData('/participant', 'GET', null)
}

onMounted(() => {
  getParticipants()
  isLoading.value = false
})
</script>

<template>
  <div class="flex">
    <BaseCard>
      <Button
        type="submit"
        class="text-blue-300 text-xs bg-gray-800 h-8 rounded-lg mr-8 p-2"
        @click="getParticipants()"
        >Refresh</Button
      >
    </BaseCard>
    <DataTable :value="data" dataKey="id" :loading="isLoading">
      <Column field="id" header=""></Column>
      <Column field="name" header="Participant Name"></Column>
      <Column header="Date Joined">
        <template #body="slotProps">
          <span>{{ formattedDatetime(slotProps.data.created_date) }}</span>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
