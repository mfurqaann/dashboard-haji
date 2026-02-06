<template>
    <div>
        <BaseCard>
            <div class="flex flex-col space-y-1.5">
                <div class="font-bold leading-none tracking-tight flex items-center gap-2">
                    Feedback per Kategori
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div v-for="data in dataFeedback" class="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <p class="text-sm text-slate-500">
                            {{ data.kategori }}
                        </p>
                        <p class="text-2xl font-bold text-slate-800">{{ data.jumlah }}</p>
                    </div>
                </div>
            </div>
        </BaseCard>
    </div>
</template>

<script setup lang="ts">
import BaseCard from '../BaseCard.vue';

const dataFeedback = [
    {
        kategori: 'Makanan',
        jumlah: 2
    },
    {
        kategori: 'Makanan',
        jumlah: 2
    },
    {
        kategori: 'Makanan',
        jumlah: 2
    },
    {
        kategori: 'Makanan',
        jumlah: 2
    },
    {
        kategori: 'Makanan',
        jumlah: 2
    },
    {
        kategori: 'Makanan',
        jumlah: 2
    },
]

</script>

<style scoped>

</style>