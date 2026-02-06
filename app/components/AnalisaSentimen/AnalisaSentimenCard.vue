<template>
    <div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="card in cards" :key="card.title">
                <div class="rounded-xl bg-white shadow border-l-4" :class="`border-${card.color}-500`" >
                    <div class="p-4">
                     <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-slate-500">
                                {{ card.title }}
                            </p>
                            <p class="text-3xl font-bold" :class="`text-${card.color}-600`">5</p>
                        </div>
                        <div class="p-3 rounded-lg" :class="`bg-${card.color}-100`">
                            <component :is="card.icon" class="w-6 h-6" :class="`text-${card.color}-600`" />
                        </div>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Frown, Meh, Smile, ThumbsUp } from 'lucide-vue-next';

const cards = [
    {
        title: 'Sentimen Positif',
        value: 0,
        color: 'emerald',
        icon: Smile
    },
    {
        title: 'Netral',
        value: 1,
        color: 'slate',
        icon: Meh
    },
    {
        title: 'Negatif',
        value: 1,
        color: 'red',
        icon: Frown
    },
    {
        title: 'Rating rata-rata',
        value: 0,
        color: 'amber',
        icon: ThumbsUp
    }
]

</script>

<style scoped>

</style>