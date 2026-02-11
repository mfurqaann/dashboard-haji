<template>
    <div>
        <BaseCard>
            <div class="flex flex-col space-y-1.5">
                <div class="font-semibold leading-none tracking-tight">
                    Status Dokumen Per Jamaah
                </div>
            </div>
            <div class="pt-0 mt-4">
                <div class="overflow-x-auto">
                    <div class="relative w-full overflow-auto">
                        <table class="min-w-full">
                            <thead>
                                <tr
                                    class="border-b border-slate-300 text-left text-sm font-bold text-gray-500 hover:bg-muted rounded-2xl">
                                    <th class="py-4">Jamaah</th>
                                    <th class="py-4">Kloter</th>
                                    <th class="py-4">Kelengkapan</th>
                                    <th class="py-4 text-center">KTP</th>
                                    <th class="py-4 text-center">Paspor</th>
                                    <th class="py-4 text-center">Visa</th>
                                    <th class="py-4 text-center">Vaksin</th>
                                    <th class="py-4">Aksi</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="item in jamaah" :key="item.nik"
                                    class="border-b border-slate-300 last:border-b-0">
                                    <td class=" py-4">
                                        <p class="font-semibold text-gray-800">
                                            {{ item.nama }}
                                        </p>
                                        <p class="text-sm text-gray-500">
                                            {{ item.nik }}
                                        </p>
                                    </td>

                                    <td class=" py-4 text-gray-600">
                                        {{ item.kloter || '-' }}
                                    </td>

                                    <td class=" py-4 w-64">
                                        <p class="mb-1 text-sm font-medium text-gray-600">
                                            {{ item.progress }}%
                                        </p>
                                        <div class="h-2 w-full rounded-full bg-gray-200">
                                            <div class="h-2 rounded-full bg-gray-400"
                                                :style="{ width: item.progress + '%' }" />
                                        </div>
                                    </td>

                                    <td class="p-2 align-middle">
                                        <StatusDot :status="item.ktp" />
                                    </td>
                                    <td class="p-2 align-middle">
                                        <StatusDot :status="item.paspor" />
                                    </td>
                                    <td class="p-2 align-middle">
                                        <StatusDot :status="item.visa" />
                                    </td>
                                    <td class="p-2 align-middle">
                                        <StatusDot :status="item.vaksin" />
                                    </td>

                                    <td class="p-2 align-middle">
                                        <button
                                            class="inline-flex items-center gap-2 rounded-lg 
                                            bg-emerald-600 px-3 py-2 text-sm font-semibold 
                                            text-white hover:bg-emerald-700 cursor-pointer"
                                            @click="$emit('openForm', item.nama)"
                                            >
                                            <Plus class="w-4 h-4" />
                                            Upload
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </BaseCard>
    </div>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
import BaseCard from '../BaseCard.vue';
import StatusDot from './StatusDot.vue';

defineEmits(['openForm'])

const jamaah = ref([
    {
        nama: 'Siti Fatimah',
        nik: '3201234567890002',
        kloter: '',
        progress: 0,
        ktp: 'pending',
        paspor: 'pending',
        visa: 'pending',
        vaksin: 'pending',
    },
    {
        nama: 'Nurul Hidayah',
        nik: '3201234567890004',
        kloter: '',
        progress: 0,
        ktp: 'invalid',
        paspor: 'pending',
        visa: 'pending',
        vaksin: 'pending',
    },
    {
        nama: 'Ahmad Hidayat',
        nik: '3201234567890001',
        kloter: '',
        progress: 0,
        ktp: 'invalid',
        paspor: 'pending',
        visa: 'pending',
        vaksin: 'pending',
    },
])

function handleClickJamaah(nama: string) {
  console.log(nama)
}



</script>

<style scoped></style>