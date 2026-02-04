<template>
    <div class="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <PageHeader title="Manajemen Tiket" subtitle="Kelola tiket penerbangan jamaah">
            <button class="flex items-center gap-2 px-4 py-2 text-sm rounded-xl
           bg-emerald-600 text-white font-semibold
           shadow hover:bg-emerald-700
           transition">
                <Plus class="w-5 h-5" />
                <span>Tambah Tiket</span>
            </button>
        </PageHeader>
        <div class="flex flex-col md:flex-row gap-4 mt-5">
            <div class="flex-1 max-w-md">
                <SearchInput v-model="searchQuery" placeholder="Cari kloter... atau maskapai"/>
            </div>
            <USelectMenu v-model="value" :items="items" class="cursor-pointer w-48" />
        </div>
        <TiketCard />
    </div>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
import TiketCard from '~/components/Tiket/TiketCard.vue';

const searchQuery = ref('');

const items = ref(['Semua Status', 'Pending', 'Confirmed', 'Cancelled', 'Check-In', 'Boarded', 'Completed']);
const value = ref('Semua Status')

</script>

<style scoped></style>