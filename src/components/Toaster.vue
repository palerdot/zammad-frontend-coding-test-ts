<script setup lang="ts">
import { inject } from 'vue'
import type { Notification } from '../hooks/useToast'

const toasts: Array<Notification> = inject('toasts') || []
</script>

<template>
  <div class="fixed top-4 space-y-1 m-2 w-auto z-50">
    <div
      v-for="toast in toasts"
      class="border p-2 bg-white rounded font-medium"
      :key="toast.id"
    >
      {{ toast.message }}
    </div>
  </div>
</template>
