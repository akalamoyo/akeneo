<script setup>
import { computed, ref } from 'vue'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import fetchData from '@/components/base/apiClient'
import BaseCard from './base/BaseCard.vue'

const toast = useToast()
const response = ref()
const formData = ref({
  name: '',
  email: ''
})

const handleSubmit = async () => {
  const payload = {
    name: formData.value.name,
    email: formData.value.email
  }
  try {
    response.value = await fetchData('/participant/', 'POST', payload)
    toast.add({
      severity: 'success',
      summary: 'Cool!',
      detail: 'Participant added. Hit refresh to update table.',
      life: 5000
    })
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: "That didn't work out!",
      detail: `${error.error}`,
      life: 5000
    })
  }
  formData.value = {
    name: '',
    email: ''
  }
}

const isFormValid = computed(() => {
  return formData.value.name && formData.value.email
})

const textFieldClass = 'px-4 text-black flex flex-row gap-4 mt-4'
const inputFieldClass =
  'block w-full h-10 px-3 py-2 border-4 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="container flex flex-col gap-2 font-semibold font-akaya-kanadaka mx-12 max-w-xs border-2 border-gray-400 rounded-2xl"
  >
    <div :class="textFieldClass">
      <label for="name">Name:</label>
      <input type="text" id="name" :class="inputFieldClass" v-model="formData.name" />
    </div>

    <div :class="textFieldClass">
      <label for="email">Email:</label>
      <input type="email" id="email" :class="inputFieldClass" v-model="formData.email" />
    </div>
    <BaseCard class="flex justify-center">
      <Button
        type="submit"
        class="mx-auto text-blue-300 bg-gray-800 w-26 rounded-2xl mb-4"
        :disabled="!isFormValid"
        >Add participant</Button
      >
    </BaseCard>
  </form>
  <Toast />
</template>
