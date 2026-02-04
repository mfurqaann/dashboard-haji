<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <div v-for="data in dataTransportasi" :key="data.id" class="rounded-xl shadow bg-white overflow-hidden hover:shadow-lg transition-shadow">
            <div class="flex flex-col space-y-1.5 bg-linear-to-r from-amber-500 to-amber-600 text-white p-5">
                <div class="flex items-start justify-between">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-white/20 rounded-lg">
                            <Plane class="w-5 h-5" />
                        </div>
                        <div>
                            <div class="font-semibold tracking-tight text-base">
                                {{ data.jenis }}
                            </div>
                            <p class="text-amber-100 text-sm">{{ data.nomor }}</p>
                        </div>
                    </div>
                    <div>titik tiga</div>
                </div>
            </div>

            <div class="p-4 space-y-3">
                <div class="flex items-center justify-between">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">Tersedia</span>
                    <span class="text-sm text-slate-500">
                        Kapasitas: {{ data.kapasitas }}
                    </span>
                </div>

                <div class="flex items-center gap-2 text-sm">
                    <Route class="w-4 h-4 text-slate-400" />
                    <span class="text-slate-600 truncate">{{ data.rute }}</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                    <User class="w-4 h-4 text-slate-400" />
                    <span class="text-slate-600">{{ data.sopir }}</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                    <Phone class="w-4 h-4 text-slate-400" />
                    <span class="text-slate-600">{{ data.kontak }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Phone, Plane, Route, User } from 'lucide-vue-next';

const dataTransportasi = [
    {
        id: 1,
        jenis: 'Bus',
        nomor: 'B 9012 HAJ',
        rute: 'Hotel Mekah - Hotel Madinah',
        sopir: 'Pak Hasan',
        kontak: '08123456789',
        kapasitas: 45,
        status: 'Tersedia',
    },
    {
        id: 1,
        jenis: 'Bus',
        nomor: 'B 9012 HAJ',
        rute: 'Hotel Mekah - Hotel Madinah',
        sopir: 'Pak Hasan',
        kontak: '08123456789',
        kapasitas: 45,
        status: 'Tersedia',
    },
];

</script>

<style scoped>

</style>