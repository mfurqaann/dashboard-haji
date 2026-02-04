<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="data in datas" :key="data.title" class="rounded-xl bg-white shadow">
                <div class="p-4 text-center">
                    <component :is="data.icon" :class="data.iconColor + ' w-8 h-8 mx-auto mb-2'" />
                    <p class="text-3xl font-bold" :class="data.countColor">{{ data.count }}</p>
                    <p class="text-sm text-slate-500">{{ data.title }}</p>
                </div>
            </div>
        </div>

        <div class="rounded-xl bg-white shadow mt-5">
            <div class="flex flex-col space-y-1.5 p-6">
                <div class="font-semibold leading-none tracking-tight">
                    Kelengkapan Dokumen Per Kloter
                </div>
            </div>

            <div class="p-6 pt-0">
                <div class="space-y-4">
                    <ProgressBarItem
                        v-for="data in dataDokumen"
                        :key="data.label"
                        :label="data.label"
                        :progress="data.progress"
                    >
                        <template #value>
                            <div class="text-slate-500">
                            {{ data.value }}/{{ data.total }} jamaah ({{ data.progress }}%)
                            </div>
                        </template>
                    </ProgressBarItem>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CircleCheck, CircleX, TriangleAlert } from 'lucide-vue-next';
import ProgressBarItem from '../ProgressBarItem.vue';

const datas = [
    {
        title: 'Dokumen Valid',
        count: 0,
        icon: CircleCheck,
        iconColor: 'text-emerald-600',
        countColor: 'text-emerald-700',
    },
    {
        title: 'Dokumen Perlu Diperbarui',
        count: 0,
        icon: TriangleAlert,
        iconColor: 'text-amber-600',
        countColor: 'text-amber-700',

    },
    {
        title: 'Dokumen Kadaluarsa',
        count: 0,
        icon: CircleX,
        iconColor: 'text-red-600',
        countColor: 'text-red-700',
    },
]

const dataDokumen = [
    { label: 'KLT-0500', value: 1, total: 5 },
    { label: 'KLT-0500', value: 5, total: 10 },
    { label: 'KLT-0501', value: 3, total: 20 },
].map(item => ({
    ...item,
    progress: item.total > 0 ? (item.value / item.total) * 100 : 0
}));



</script>

<style scoped></style>