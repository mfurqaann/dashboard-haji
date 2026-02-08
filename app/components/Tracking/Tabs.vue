<script setup>
import BaseCard from '../BaseCard.vue';
import { ref } from 'vue'
import SearchInput from '../SearchInput.vue';


const activeTab = ref(0)

const items = ref([
    {
        label: 'Peta',
        icon: 'i-lucide-map-pin',
    },
    {
        label: 'Jamaah',
        icon: 'i-lucide-users',
    }
]);


const searchQuery = ref('');
const dataDropdownStatus = ref(['Semua Status', 'Dalam Perjalanan', 'Di Mekah', 'Di Madinah']);
const valueDropdownStatus = ref('Semua Status');

const zoom = ref(6);


</script>

<template>
    <div>
        <div class="inline-flex mt-5 items-center">
            <UTabs v-model="activeTab" color="neutral" :items="items" class="w-full inline-flex" />
        </div>

        <div class="mt-6">
            <BaseCard v-if="activeTab == 0">
                <div class="flex flex-col space-y-1.5 py-4">
                    <div class="flex items-center justify-between">
                        <div class="font-semibold tracking-tight text-lg">
                            Lokasi Real-time
                        </div>

                        <div class="flex items-center gap-4 text-sm text-slate-500">
                            <div class="flex items-center gap-2">
                                <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                                <span>0 Jamaah</span>
                            </div>

                            <div class="flex items-center gap-2">
                                <span class="w-3 h-3 rounded-full bg-blue-500"></span>
                                <span>0 Kendaraan</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-0">
                    <div class="h-125">
                        <div class="h-full w-full rounded-xl overflow-hidden border border-slate-200">
                            <LMap ref="map" :zoom="zoom" :center="[47.21322, -1.559482]" :use-global-leaflet="false">
                                <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                                    layer-type="base" name="OpenStreetMap" />
                            </LMap>
                        </div>
                    </div>
                </div>
            </BaseCard>


            <div v-if="activeTab == 1">
                <div class="rounded-xl border border-slate-100 p-4 mt-5">
                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="flex-1 max-w-md">
                            <SearchInput v-model="searchQuery"
                                placeholder="Cari jamaah berdasarkan nama, NIK, atau kota..." />
                        </div>
                        <USelectMenu v-model="valueDropdownStatus" :items="dataDropdownStatus"
                            class="cursor-pointer w-48" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
