<script setup lang="ts">
import { MapPin, Users } from 'lucide-vue-next'
import DashboardCardHeader from '~/components/Dashboard/DashboardCardHeader.vue';
import StatusKloter from '~/components/Dashboard/StatusKloter.vue';
import PageHeader from '~/components/PageHeader.vue';

</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <PageHeader title="Selamat Datang" subtitle="Sistem Manajemen Tata Kelola Haji">
            <button class="flex items-center gap-2 px-4 py-2 text-sm rounded-xl
           bg-white text-gray-800 font-semibold
           border border-gray-200
           shadow-sm hover:shadow
           transition">
                <MapPin class="w-5 h-5" />
                <span>Live Tracking</span>
            </button>

            <button class="flex items-center gap-2 px-4 py-2 text-sm rounded-xl
           bg-emerald-600 text-white font-semibold
           shadow hover:bg-emerald-700
           transition">
                <Users class="w-5 h-5" />
                <span>Kelola Jamaah</span>
            </button>
        </PageHeader>

        <DashboardCardHeader/>

        <StatusKloter />

        <DashboardCardFooter />
    </div>
</template>

<style scoped></style>
