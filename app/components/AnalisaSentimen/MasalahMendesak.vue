<template>
    <div>
        <BaseCard bg="bg-red-50">
            <div class="flex flex-col space-y-1.5">
                <div class="font-semibold leading-none tracking-tight flex items-center gap-2 text-red-900">
                    <CircleAlert class="w-5 h-5" />
                    Masalah Mendesak (4)
                </div>
            </div>

            <div class="p-6 pt-0 space-y-3 mt-5">
                <div v-for="data in dataMasalah" class="p-3 bg-white rounded-lg border border-red-200">
                    <div class="flex items-start gap-3">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-red-600 text-white">{{ data.status }}</div>
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-slate-800 mb-1">
                                {{ data.title }}
                            </p>
                            <p class="text-sm text-slate-600 line-clamp-2">
                                {{ data.description }}
                            </p>
                            <p class="text-xs text-red-600 mt-2">
                                {{ data.saran }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </BaseCard>
    </div>
</template>

<script setup lang="ts">
import { CircleAlert } from 'lucide-vue-next';

const dataMasalah = [
    {
        title: 'Pelayanan',
        status: 'uregent',
        description: 'petugasnya kurang banyak',
        saran: 'Meningkatkan jumlah petugas untuk meningkatkan kualitas layanan dan kepuasan jamaah.'
    },
    {
        title: 'Ibadah',
        status: 'uregent',
        description: 'harus lebih cepat menuju area masjid',
        saran: 'Tinjau dan tingkatkan aksesibilitas menuju area masjid di lokasi ibadah haji.'
    },
]

</script>

<style scoped></style>