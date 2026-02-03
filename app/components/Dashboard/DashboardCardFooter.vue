<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
        <NuxtLink v-for="card in cards" :key="card.title" :to="card.link">
            <BaseCard class="hover:shadow-lg transition-all cursor-pointer group mt-3">
                <div  :class="card.backgroundColor + ' w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform'">
                    <component :is="card.icon" :class="card.iconColor" />
                </div>
                <p class="font-medium text-slate-800">{{ card.title }}</p>
                <p class="text-sm text-slate-400">{{ card.description }}</p>
            </BaseCard>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { Bus, Package, Plane, User } from 'lucide-vue-next';
import BaseCard from '../BaseCard.vue';

const cards = [
  {
    title: 'Jamaah',
    icon: User,
    backgroundColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    link: '/jamaah',
    description: 'Kelola Jamaah',
  },
  {
    title: 'Kloter',
    icon: Plane,
    backgroundColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    link: '/kloter',
    description: 'Kelola Kloter',
  },
  {
    title: 'Transportasi',
    icon: Bus,
    backgroundColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    link: '/transportasi',
    description: 'Kelola Transportasi',
  },
  {
    title: 'Aset',
    icon: Package,
    backgroundColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    link: '/aset',
    description: 'Kelola Aset',
  },
]

</script>

<style scoped>

</style>