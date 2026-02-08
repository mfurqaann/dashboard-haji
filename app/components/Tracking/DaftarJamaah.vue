<template>
    <div class="grid gap-3">
        <BaseCard v-for="data in dataJamaah">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <div
                        class="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold">
                        {{ data.initial }}
                    </div>
                    <div>
                        <h3 class="font-semibold text-slate-800">
                            {{ data.name }}
                        </h3>
                        <p class="text-sm text-slate-500">
                            NIK: {{ data.nik }}
                        </p>
                    </div>
                </div>
                <div class="text-right">
                    <span class="items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                            :class="[statusMap[data.status].bg, statusMap[data.status].text]">
                        {{ statusMap[data.status].label }}
                    </span>
                </div>
            </div>
        </BaseCard>
    </div>
</template>

<script setup lang="ts">
import BaseCard from '../BaseCard.vue';

const statusMap: any = {
  madinah: {
    label: 'Di Madinah',
    bg: 'bg-teal-50',
    text: 'text-teal-700',
  },
  perjalanan: {
    label: 'Dalam Perjalanan',
    bg: 'bg-purple-50',
    text: 'text-purple-700',
  },
  siap: {
    label: 'Siap Berangkat',
    bg: 'bg-amber-50',
    text: 'text-amber-700'
  }
};

const dataJamaah = [
  {
    id: 1,
    name: 'Siti Fatimah',
    nik: '3201234567890002',
    initial: 'S',
    status: 'madinah',
  },
  {
    id: 2,
    name: 'Siti Fatimah',
    nik: '3201234567890002',
    initial: 'S',
    status: 'perjalanan',
  },
  {
    id: 3,
    name: 'Siti Fatimah',
    nik: '3201234567890002',
    initial: 'S',
    status: 'siap',
  },
]



</script>

<style scoped></style>