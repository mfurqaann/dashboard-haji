<template>
    <div class="lg:col-span-2 space-y-4">
        <div class="rounded-xl bg-white text-card-foreground shadow">
            <div class="p-4">
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="flex-1">
                        <label class="text-sm text-slate-600 mb-2 block">
                            Tanggal
                        </label>
                        <input type="date" class="w-full px-3 py-2 border border-slate-200 rounded-lg">
                    </div>
                    <div class="flex-1">
                        <label class="text-sm text-slate-600 mb-2 block">
                            Tujuan
                        </label>
                        <USelectMenu v-model="valueDropdownStatus" :items="dataDropdownStatus"
                            class="cursor-pointer w-full h-10" />
                    </div>
                </div>
            </div>
        </div>

        <div class="rounded-xl bg-white shadow">
            <div class="flex flex-col space-y-1.5 p-6">
                <div class="font-bold leading-none tracking-tight">
                    Jadwal Rute Hari Ini
                </div>
            </div>
            <div class="p-6 pt-0">
                <div class="text-center py-12">
                    <Bus class="w-12 h-12 text-slate-300 mx-auto mb-3`" />
                    <p class="text-slate-500">
                        Tidak ada jadwal rute
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Bus } from 'lucide-vue-next';


const dataDropdownStatus = ref(['Semua Rute', 'Masjidil Haram', 'Pasar', 'Hospital']);
const valueDropdownStatus = ref('Semua Rute');

</script>

<style scoped></style>