<template>
    <div class="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        
        <PageHeader title="Dokumen Jamaah" subtitle="Kelola dan validasi dokumen penting jamaah">
        </PageHeader>

        <DokumenCard class="mt-5" />

        <div class="bg-white rounded-xl border border-slate-100 p-4 mt-5">
            <div class="flex flex-col md:flex-row gap-4">
                <div class="flex-1">
                    <SearchInput v-model="searchQuery" placeholder="Cari jamaah berdasarkan nama, NIK, atau kota..." />
                </div>
                <USelectMenu v-model="valueDropdownKloter" :items="dataDropdownKloter" class="cursor-pointer w-48" />
                <USelectMenu v-model="valueDropdownStatus" :items="dataDropdownStatus" class="cursor-pointer w-48" />
            </div>
        </div>
        <USlideover v-model:open="isOpenForm" :title="`Upload Dokumen - ${namaJamaah}`">

            <template #body>
                <UploadForm />
            </template>
        </USlideover>
        
        <StatusDokumen class="mt-5" @openForm="openUploadForm" />
    </div>
</template>

<script setup lang="ts">
import DokumenCard from '~/components/Dokumen/DokumenCard.vue';
import StatusDokumen from '~/components/Dokumen/StatusDokumen.vue';
import UploadForm from '~/components/Dokumen/UploadForm.vue';

const searchQuery = ref('');
const isOpenForm = ref(false);
const namaJamaah = ref('');

const dataDropdownStatus = ref(['Semua Status', 'Dokumen Lengkap', 'Belum Lengkap']);
const valueDropdownStatus = ref('Semua Status');

const dataDropdownKloter = ref(['Semua Kloter', 'Kloter 1', 'Kloter 2', 'Kloter 3']);
const valueDropdownKloter = ref('Semua Kloter');

function openUploadForm (nama: string) {
    isOpenForm.value = true
    namaJamaah.value = nama
}

</script>

<style scoped></style>