<script setup lang="ts">
import { useCountries } from '../hooks/useCountries'

const { countries } = useCountries()
</script>

<template>
  <div class="flex flex-col mt-10">
    <div class="font-semibold text-gray-600 m-2 text-3xl">Countries</div>

    <div v-if="countries === null" class="text-gray-600 text-xl">
      Loading Countries ...
    </div>
    <div v-else class="flex flex-col">
      <div class="my-4">Total countries {{ countries.length }}</div>
      <div class="flex flex-col border divide-y rounded">
        <div v-for="country in countries" :key="country.code">
          <router-link
            :to="'/country/' + country.code"
            class="flex items-center justify-center p-2"
          >
            {{ country.name }} {{ country.emoji }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
