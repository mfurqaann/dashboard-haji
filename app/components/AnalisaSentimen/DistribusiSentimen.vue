<template>
    <div>
        <BaseCard>
            <div class="flex flex-col space-y-1.5">
                <div class="font-bold leading-none tracking-tight flex items-center gap-2">
                    <TrendingUp class="w-5 h-5" />
                    Distribusi Sentimen
                </div>
            </div>

            <div class="p-6 pt-0 mt-6">
                <div class="space-y-4">
                    <ProgressBarItem
                        v-for="data in dataDokumen"
                        :key="data.label"
                        :label="data.label"
                        :progress="data.progress"
                        :color="data.color"
                    >
                        <template #value>
                            <div class="text-slate-500">
                            {{ data.value }}/{{ data.total }} feedback ({{ data.progress }}%)
                            </div>
                        </template>
                    </ProgressBarItem>
                </div>
            </div>

            <div class="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <div class="flex items-center gap-2 text-emerald-700">
                    <TrendingUp class="w-5 h-5" />
                    <span class="font-semibold">Tingkat Kepuasan: 50.0%</span>
                </div>
                <p class="text-sm text-emerald-600 mt-1">
                    Baik, ada area yang perlu ditingkatkan
                </p>
            </div>
        </BaseCard>
    </div>
</template>

<script setup lang="ts">
import { TrendingUp } from 'lucide-vue-next';
import BaseCard from '../BaseCard.vue';
import ProgressBarItem from '../ProgressBarItem.vue';


const dataDokumen = [
    { label: 'Positif', value: 1, total: 5, color: 'emerald' },
    { label: 'Netral', value: 5, total: 10, color: 'slate' },
    { label: 'Negatif', value: 3, total: 20, color: 'red' },
].map(item => ({
    ...item,
    progress: item.total > 0 ? (item.value / item.total) * 100 : 0
}));


</script>

<style scoped>

</style>