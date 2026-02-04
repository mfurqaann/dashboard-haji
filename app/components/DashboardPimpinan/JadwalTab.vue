<template>
    <div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="card in cards" :key="card.title" class="rounded-xl bg-white shadow">
                <div class="p-4">
                    <div class="flex items-center gap-3">
                        <div :class="card.iconBg + ' p-2 rounded-lg'">
                            <component :is="card.icon" :class="card.iconColor + ' w-5 h-5 mx-auto'" />
                        </div>

                        <div>
                            <p :class="card.iconColor + ' text-2xl font-bold'">
                                {{ card.value }}
                            </p>
                            <p class="text-xs text-slate-500">
                                {{ card.title }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="rounded-xl bg-white shadow mt-4">
            <div class="flex flex-col space-y-1.5 p-6">
                <div class="font-semibold tracking-tight text-lg">
                    Jadwal Hari Ini
                </div>
            </div>
            <div class="p-6 pt-0">
                <div class="text-center py-8">
                    <Calendar class="w-12 h-12 text-slate-300 mx-auto mb-2" />

                    <p class="text-slate-500">Tidak ada jadwal hari ini</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Calendar, CircleAlert, CircleCheck, CircleX } from 'lucide-vue-next';

const cards = [
    {
        title: 'Kepatuhan',
        value: '0%',
        icon: CircleCheck,
        iconBg: 'bg-emerald-100',
        iconColor: 'text-emerald-700',
    },
    {
        title: 'Hari Ini',
        value: '0',
        icon: Calendar,
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
    },
    {
        title: 'Terlambat',
        value: '0',
        icon: CircleAlert,
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-600'
    },
    {
        title: 'Dibatalkan',
        value: 0,
        icon: CircleX,
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600'
    }
];

</script>

<style scoped></style>