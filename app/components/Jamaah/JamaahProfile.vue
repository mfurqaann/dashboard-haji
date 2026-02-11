<template>
  <div class="flex items-start gap-4">
    <div class="relative">
      <div
        class="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
        <span class="text-xl font-bold text-white">
          {{ data.name.charAt(0).toUpperCase() }}
        </span>
      </div>

      <div :class="data.roundedColor" class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white">
      </div>
    </div>

    <div class="flex-1 min-w-0">
      <div class="flex items-start justify-between">
        <div>
          <h3 class="font-semibold text-slate-800 truncate">
            {{ data.name }}
          </h3>
          <p class="text-sm text-slate-500">
            NIK: {{ data.nik }}
          </p>
        </div>

        <UDropdownMenu :items="items" :content="{
          align: 'start',
          side: 'bottom',
          sideOffset: 8
        }" :ui="{
      content: 'w-48'
    }">
          <UButton icon="i-lucide-ellipsis-vertical" color="neutral" variant="ghost" />
        </UDropdownMenu>
      </div>

      <div class="flex flex-wrap items-center gap-2 mt-3">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" :class="data.statusColor">
          {{ data.status }}
        </span>

        <span class="flex items-center gap-1 text-xs text-slate-400">
          <LucideMapPin class="w-3 h-3" />
          {{ data.city }}
        </span>
      </div>

      <div class="flex items-center gap-2 mt-3 text-sm text-slate-500">
        <Phone class="w-3.5 h-3.5" />
        <span>{{ data.phone }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';
import { LucideMapPin, Phone } from 'lucide-vue-next';

defineProps<{
  data: {
    name: string
    nik: string
    status: string
    statusColor: string
    roundedColor: string
    city: string
    phone: string
  }
}>();

const items = ref<DropdownMenuItem[]>([
  {
    label: 'Lihat Detail',
  },
  {
    label: 'Edit',
  },
  {
    label: 'Hapus',
    color: 'error'
  }
])
</script>

<style scoped></style>