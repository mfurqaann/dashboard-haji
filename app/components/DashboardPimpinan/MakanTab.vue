<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="card in cards" :key="card.title">
            <div class="rounded-xl border shadow opacity-50 bg-white">
                <div class="flex flex-col space-y-1.5 p-6 pb-3">
                    <div class="flex items-center justify-between">
                        <div class="font-semibold tracking-tight text-base flex items-center gap-2">
                            <UtensilsCrossed class="w-4 h-4" />
                            {{ card.title }}
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-0 space-y-3">
                    <div v-if="card.data.length === 0" class="text-center py-6">
                        <UtensilsCrossed class="w-8 h-8 mx-auto text-slate-300 mb-2" />
                        <p class="text-sm text-slate-400">Belum ada data</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { UtensilsCrossed } from 'lucide-vue-next';

const cards = [
    {
        title: 'Sarapan',
        data: []
    },
    {
        title: 'Makan Siang',
        data: []
    },
    {
        title: 'Makan Malam',
        data: []
    },
];

</script>

<style scoped>

</style>