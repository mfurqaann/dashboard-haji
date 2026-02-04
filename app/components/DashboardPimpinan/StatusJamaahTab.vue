<template>
    <div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="card in cards" :key="card.title">
                <div class="rounded-xl bg-white shadow border-l-4" :class="card.borderColor">
                    <div class="p-4">
                        <p class="text-2xl font-bold">{{ card.value }}</p>
                        <p class="text-sm text-slate-600">{{ card.title }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="rounded-xl bg-white shadow mt-5">
            <div class="flex flex-col space-y-1.5 p-6">
                <div class="font-semibold leading-none tracking-tight">
                    Distribusi Jamaah
                </div>
            </div>
            <div class="p-6 pt-0">
                <div class="space-y-4">
                    <ProgressBarItem
                        v-for="distribusi in distribusiJamaah"
                        :key="distribusi.label"
                        :label="distribusi.label"
                        :progress="distribusi.progress"
                    >
                        <template #value>
                            {{ distribusi.value }}/{{ distribusi.total }}
                        </template>
                    </ProgressBarItem>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProgressBarItem from '../ProgressBarItem.vue';


const cards = [
    {
        title: 'Terdaftar',
        value: 0,
        borderColor: 'border-slate-500'
    },
    {
        title: 'Dokumen Lengkap',
        value: 1,
        borderColor: 'border-blue-50'
    },
    {
        title: 'Siap Berangkat',
        value: 1,
        borderColor: 'border-amber-500'
    },
    {
        title: 'Dalam Perjalanan',
        value: 0,
        borderColor: 'border-purple-500'
    },
    {
        title: 'Di Mekah',
        value: 0,
        borderColor: 'border-emerald-500'
    },
    {
        title: 'Di Madinah',
        value: 0,
        borderColor: 'border-teal-500'
    },
    {
        title: 'Pulang',
        value: 0,
        borderColor: 'border-orange-500'
    },
    {
        title: 'Selesai',
        value: 0,
        borderColor: 'border-green-500'
    }
];

const distribusiJamaah = [
    { label: 'Jamaah dengan tracking lokasi', value: 0, total: 5 },
    { label: 'Jamaah dengan riwayat kesehatan lengkap', value: 4, total: 5 },
].map(item => ({
    ...item,
    progress: item.total > 0 ? (item.value / item.total) * 100 : 0
}));


</script>

<style scoped></style>