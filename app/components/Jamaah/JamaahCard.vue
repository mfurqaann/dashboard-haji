<template>
  <div>
    <div v-if="display === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      <BaseCard v-for="data in dataJamaah" :key="data.nik" class="hover:shadow-lg transition-all cursor-pointer"
        @click="$emit('select', data)">
        <JamaahProfile :data="data" @menu="$emit('menu', data)" @click="$emit('select', data)" />
      </BaseCard>
    </div>

    <div v-if="display === 'list'" class="space-y-3 mt-5">
      <BaseCard v-for="data in dataJamaah" :key="data.nik" class="hover:shadow-lg transition-all cursor-pointer">
        <JamaahProfile :data="data" @menu="$emit('menu', data)" @click="$emit('select', data)" />
      </BaseCard>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { LucideMapPin, Phone } from 'lucide-vue-next'
import BaseCard from '../BaseCard.vue'
import JamaahProfile from './JamaahProfile.vue';

defineProps<{
  dataJamaah: {
    name: string
    nik: string
    status: string
    city: string
    phone: string
    roundedColor: string
    statusColor: string
  }[],
  display: string
}>()

defineEmits<{
  (e: 'select', data: any): void
  (e: 'menu', data: any): void
}>()
</script>
