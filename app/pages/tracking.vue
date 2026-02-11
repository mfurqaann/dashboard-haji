<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <PageHeader title="Live Tracking" subtitle="Pantau lokasi jamaah dan transportasi secara realtime">
            <button class="flex items-center gap-2 px-4 py-2 text-sm rounded-xl
           bg-white text-black font-semibold
           shadow hover:bg-gray-200
           transition">
                <RefreshCcw class="w-5 h-5" />
                <span>Refresh</span>
            </button>
        </PageHeader>

        <TrackingCard class="mt-5" />

        <Tabs />
    </div>
</template>

<script setup lang="ts">
import { RefreshCcw } from 'lucide-vue-next';
import DaftarJamaah from '~/components/Tracking/DaftarJamaah.vue';
import Tabs from '~/components/Tracking/Tabs.vue';
import TrackingCard from '~/components/Tracking/TrackingCard.vue';

</script>

<style scoped>

</style>