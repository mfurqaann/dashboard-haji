<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <BaseCard v-for="(card, index) in cards" :key="index">
            <div class="flex items-start justify-between">
                <div class="space-y-2">
                    <p class="text-sm font-medium text-slate-500">{{ card.title }}</p>
                    <p class="text-3xl font-bold text-slate-800">{{ card.total }}</p>
                    <div class="flex items-center gap-1 text-sm text-emerald-600">
                        <span> <ArrowUp/> </span>
                        <span v-if="card.info">{{ card.info }}</span>
                    </div>
                </div>
                <div class="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                    <component :is="card.icon" class="text-white" />
                </div>
            </div>
        </BaseCard>
    </div>
</template>

<script setup lang="ts">
import { ArrowUp, Bus, Package, Plane, Users } from 'lucide-vue-next';

const cards = [
  {
    title: 'Total Jamaah',
    total: 5,
    info: '2 di Tanah Suci',
    icon: Users,
  },
  {
    title: 'Total Jamaah',
    total: 5,
    info: '0 aktif',
    icon: Plane,
  },
  {
    title: 'Total Jamaah',
    total: 5,
    info: '1 beroperasi',
    icon: Bus,
  },
  {
    title: 'Total Jamaah',
    total: 5,
    info: null,
    icon: Package,
  },
]

</script>

<style scoped></style>