<template>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5">
        <div v-for="card in cards" :key="card.title">
            <div class="rounded-xl shadow bg-gradient-to-br" :class="card.bgColor">
                <div class="p-4">
                    <component :is="card.icon" class="text-white"/>
                    <p class="text-3xl text-white font-bold mt-3">{{ card.count }}</p>
                    <p class="text-xs text-white opacity-90">{{ card.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Activity, Calendar, FileCheck, MapPin, Plane, Users } from 'lucide-vue-next';

const cards = [
    {
        title: 'Total Jamaah',
        count: 5,
        icon: Users,
        bgColor: 'from-emerald-500 to-emerald-600',
    },
    {
        title: 'Di Tanah Suci',
        count: 2,
        icon: MapPin,
        bgColor: 'from-blue-500 to-blue-600',
    },
    {
        title: 'Kloter Aktif',
        count: 0,
        icon: Plane,
        bgColor: 'from-purple-600 to-purple-500'
    },
    {
        title: 'Dokumen Valid',
        count: 0,
        icon: FileCheck,
        bgColor: 'from-amber-500 to-amber-600'
    },
    {
        title: 'Jadwal Hari Ini',
        count: 5,
        icon: Calendar,
        bgColor: 'from-rose-600 to-rose-500'
    },
    {
        title: 'Kendaraan Aktif',
        count:  1,
        icon: Activity,
        bgColor: 'from-teal-500 to-teal-600'
    }
];

</script>

<style scoped>

</style>