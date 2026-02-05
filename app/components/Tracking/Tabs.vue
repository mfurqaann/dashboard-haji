<script setup>
import BaseCard from '../BaseCard.vue';

const activeTab = ref(0)

const items = ref([
    {
        label: 'Account',
        icon: 'i-lucide-map-pin',
    },
    {
        label: 'Password',
        icon: 'i-lucide-users',
    }
])


</script>

<template>
    <div>
        <div class="inline-flex mt-5 items-center">
            <UTabs v-model="activeTab" color="neutral" :items="items" class="w-full inline-flex" />
        </div>

        <div class="mt-6">
            <BaseCard>
                <div class="flex flex-col space-y-1.5 p-4 border-b">
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
                    <div class="h-[500px]">
                        <div class="h-full w-full rounded-xl overflow-hidden border border-slate-200">
                            Leaflet
                        </div>
                    </div>
                </div>
            </BaseCard>


            <div v-if="activeTab == 1">
                konten Makan
            </div>

        </div>
    </div>
</template>
