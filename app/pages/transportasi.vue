<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <USlideover v-model="isOpenForm" title="Tambah Kendaraan Baru" description="Isi data kendaraan">

            <template #body>
                <TambahTransportasiForm />
            </template>
            <PageHeader title="Transportasi" subtitle="Kelola kendaraan dan angkutan jamaah">
                <button class="flex items-center gap-2 px-4 py-2 text-sm rounded-xl
           bg-emerald-600 text-white font-semibold
           shadow hover:bg-emerald-700
           transition cursor-pointer">
                    <Plus class="w-5 h-5" />
                    <span>Tambah Kendaraan</span>
                </button>
            </PageHeader>
        </USlideover>
        <div class="max-w-md my-6">
            <SearchInput v-model="searchQuery" placeholder="Cari kendaraan, plat, atau driver" />
        </div>

        <TransportasiCard />

    </div>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
import TambahTransportasiForm from '~/components/Transportasi/TambahTransportasiForm.vue';
import TransportasiCard from '~/components/Transportasi/TransportasiCard.vue';

const searchQuery = ref('');
const isOpenForm = ref(false);

</script>

<style scoped></style>