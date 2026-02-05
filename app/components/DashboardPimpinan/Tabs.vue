<script setup>
import { Calendar, FileCheck, Users, UtensilsCrossed } from 'lucide-vue-next';
import DokumenTab from './DokumenTab.vue';
import MakanTab from './MakanTab.vue';
import JadwalTab from './JadwalTab.vue';
import StatusJamaahTab from './StatusJamaahTab.vue';

const activeTab = ref('dokumen')

const tabs = [
    { key: 'dokumen', label: 'Dokumen', icon: FileCheck },
    { key: 'makan', label: 'Makan', icon: UtensilsCrossed },
    { key: 'jadwal', label: 'Jadwal', icon: Calendar },
    { key: 'status', label: 'Status Jamaah', icon: Users },
]
</script>

<template>
    <div>
        <div class="inline-flex gap-1 rounded-xl bg-white p-1 shadow-sm mt-5">
            <button v-for="tab in tabs" :key="tab.key" @click="activeTab = tab.key"
                class="rounded-lg px-4 py-2 text-sm font-medium transition cursor-pointer" :class="activeTab === tab.key
                        ? 'bg-gray-100 text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:bg-gray-50'
                    ">
                <component :is="tab.icon" class="w-4 h-4 inline mr-2" />
                {{ tab.label }}
            </button>
        </div>

        <div class="mt-6">
            <DokumenTab v-if="activeTab === 'dokumen'" />
            <MakanTab v-if="activeTab === 'makan'" />
            <JadwalTab v-if="activeTab === 'jadwal'" />
            <StatusJamaahTab v-if="activeTab === 'status'" />
        </div>
    </div>
</template>
