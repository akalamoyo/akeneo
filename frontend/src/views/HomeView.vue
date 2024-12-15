<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue'
import AddParticipantForm from '@/components/AddParticipantForm.vue'
import Divider from 'primevue/divider'
import ParticipantsTable from '@/components/ParticipantsTable.vue'
import DrawHistoryTable from '@/components/DrawHistoryTable.vue'
import Button from 'primevue/button'
import { computed, onMounted, ref, watch } from 'vue'
import fetchData from '@/components/base/apiClient'
import { useToast } from 'primevue/usetoast'
import Select from 'primevue/select'
import MultiSelect from 'primevue/multiselect'
import Toast from 'primevue/toast'
import type { Participants } from '@/types/dataDetails'

const toast = useToast()
const data = ref()
const participants = ref<Participants>()

const getParticipants = async () => {
  participants.value = await fetchData('/participant', 'GET', null)
}

onMounted(() => {
  getParticipants()
})

const startDraw = async () => {
  try {
    data.value = await fetchData('/draw/', 'POST', participants.value)
    toast.add({
      severity: 'success',
      summary: 'Yay!',
      detail: 'You are matched! Hit refresh to update draw history table.',
      life: 5000
    })
  } catch (error: any) {
    toast.add({
      severity: 'error',
      summary: "That didn't work out!",
      detail: `${error.error}`,
      life: 5000
    })
  }
}

const assignBlacklist = async () => {
  let payload = selectedParticipant.value
  payload.blacklist = blacklist.value.map(({ email }: { email: string }) => email)
  payload.update_blacklist = true
  data.value = await fetchData('/participant/', 'PATCH', payload)
  toast.add({
    severity: 'success',
    summary: 'Got it!',
    detail: 'These folks would not end up together in a match.',
    life: 5000
  })
}
const blacklist = ref()
const selectedParticipant = ref()

const options = computed(() =>
  participants.value?.map(({ name, email }: { name: string; email: string }) => ({ name, email }))
)

watch(selectedParticipant, () => {
  const selectedParticipantBlacklist =
    participants.value?.find(
      (participant) => participant.email === selectedParticipant.value?.email
    )?.blacklist || []

  blacklist.value = participants.value?.filter((participant) =>
    selectedParticipantBlacklist.includes(participant.email)
  )
  if (blacklist.value.length === 0) {
    blacklist.value = null
  }
})

const multiSelectOptions = computed(() => {
  const selectedParticipantBlacklist =
    participants.value?.find(
      (participant) => participant.email === selectedParticipant.value?.email
    )?.blacklist || []

  const otherParticipants =
    participants.value?.filter(
      (participant) =>
        !selectedParticipantBlacklist.includes(participant.email) &&
        participant.email !== selectedParticipant.value?.email
    ) || []

  return [...(blacklist.value || []), ...otherParticipants]
})
</script>

<template>
  <div
    class="flex justify-center text-2xl text-white font-bold bg-gradient-to-r from-blue-600 via-green-600 to-red-600"
  >
    Akeneo's Secret Santa
  </div>
  <div class="flex flex-row mt-12">
    <AddParticipantForm />
    <Divider layout="vertical" />
    <ParticipantsTable />
    <Divider layout="vertical" />
    <div class="flex flex-col gap-2 ml-12">
      <Select
        v-model="selectedParticipant"
        :options="options"
        optionLabel="name"
        placeholder="Select participant"
        class="w-56"
        showClear
      />
      <MultiSelect
        v-model="blacklist"
        :options="multiSelectOptions"
        optionLabel="name"
        filter
        placeholder="Select blacklist"
        :maxSelectedLabels="3"
        class="w-56"
      />
      <BaseCard>
        <Button
          type="submit"
          class="text-blue-300 text-3xl w-56 mt-4 bg-gray-800 h-12 rounded-lg tracking-[4px]"
          @click="assignBlacklist()"
          :disabled="!selectedParticipant || blacklist?.length === 0"
        >
          Assign blacklist
        </Button>
      </BaseCard>
    </div>
  </div>
  <Divider />
  <BaseCard class="flex justify-center">
    <Button
      type="submit"
      class="text-blue-300 text-3xl bg-gray-800 h-12 w-72 rounded-lg tracking-[4px]"
      @click="startDraw()"
    >
      Start a draw
    </Button>
  </BaseCard>
  <Divider />
  <DrawHistoryTable />
  <Toast />
</template>
