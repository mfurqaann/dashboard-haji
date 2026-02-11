<template>
    <div class="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <USlideover v-model:open="isOpenForm" title="Tambah Aset Baru" description="Isi data aset">

            <template #body>
                <TambahAsetForm />
            </template>
        </USlideover>

        <PageHeader title="Manajemen Aset" subtitle="Kelola inventaris dan perlengkapan">
            <button class="flex items-center gap-2 px-4 py-2 text-sm rounded-xl
           bg-emerald-600 text-white font-semibold
           shadow hover:bg-emerald-700
           transition cursor-pointer" @click="isOpenForm = true">
                <Plus class="w-5 h-5" />
                <span>Tambah Aset</span>
            </button>
        </PageHeader>
        <div class="flex flex-col md:flex-row gap-4 mt-5">
            <div class="flex-1 max-w-md">
                <SearchInput v-model="searchQuery" placeholder="Cari aset atau kode..." />
            </div>
            <USelectMenu v-model="value" :items="items" class="cursor-pointer w-48" />
        </div>

        <AsetCard class="mt-6" />
    </div>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
import AsetCard from '~/components/Aset/AsetCard.vue';
import TambahAsetForm from '~/components/Aset/TambahAsetForm.vue';

const searchQuery = ref('');
const items = ref(['Semua Kategori', 'Perlengkapan Ibadah', 'Perlengkapan Kesehatan', 'Dokumen', 'Kendaraan', 'Elektronik']);
const value = ref('Semua Kategori');
const isOpenForm = ref(false)

</script>

<style scoped>

</style>