<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCountry } from '../hooks/useCountries'

const route = useRoute()
const code = route.params.code as string
const { country } = useCountry(code)
</script>

<template>
  <div v-if="country === null">Loading ...</div>
  <div v-else class="flex flex-col space-y-1">
    <router-link to="/countries" class="p-2 underline text-blue-500 text-sm"
      >Go to all countries</router-link
    >
    <div
      class="flex flex-row space-x-2 my-8 text-3xl items-center justify-center"
    >
      <div>
        {{ country.name }}
      </div>
      <div>
        {{ country.emoji }}
      </div>
    </div>
    <div class="flex flex-col w-72 space-y-2 pt-10">
      <div class="flex flex-row space-x-2">
        <div class="font-medium text-gray-700 w-1/2 text-right">Name:</div>
        <div class="text-sm text-gray-600 w-1/2 text-left">
          {{ country.name }}
        </div>
      </div>
      <div class="flex flex-row space-x-2">
        <div class="font-medium text-gray-700 w-1/2 text-right">Currency:</div>
        <div class="text-sm text-gray-600 w-1/2 text-left">
          {{ country.currency }}
        </div>
      </div>
      <div class="flex flex-row space-x-2">
        <div class="font-medium text-gray-700 w-1/2 text-right">Continent:</div>
        <div class="text-sm text-gray-600 w-1/2 text-left">
          {{ country.continent.name }}
        </div>
      </div>
    </div>
  </div>
</template>
