<template>
    <div class="min-h-screen p-4 md:p-8">
        <USlideover v-model="isOpenForm">

            <template #content>
                <TambahJamaahForm />
            </template>

            <PageHeader title="Data Jamaah 🎯" subtitle="Kelola seluruh data jamaah haji">
                <button class="flex items-center gap-2 px-4 py-2 text-sm rounded-xl
           bg-emerald-600 text-white font-semibold
           shadow hover:bg-emerald-700
           transition cursor-pointer" @click="isOpenForm = true">
                    <Plus class="w-5 h-5" />
                    <span>Tambah Jamaah</span>
                </button>
            </PageHeader>

            <div class="bg-white rounded-xl border border-slate-100 p-4 mt-5">
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="flex-1">
                        <SearchInput v-model="searchQuery"
                            placeholder="Cari jamaah berdasarkan nama, NIK, atau kota..." />
                    </div>

                    <div class="flex gap-3">
                        <USelectMenu v-model="value" :items="items" class="cursor-pointer w-48" />

                        <div class="flex border border-slate-200 rounded-lg overflow-hidden">
                            <button class="p-2" :class="display === 'grid' ? 'bg-slate-100' : 'hover:bg-slate-50'"
                                @click="display = 'grid'">
                                <Grid3x3 class="w-4 h-4" />
                            </button>
                            <button class="p-2" :class="display === 'list' ? 'bg-slate-100' : 'hover:bg-slate-50'"
                                @click="display = 'list'">
                                <List class="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                </div>

                <div class="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                    <p class="text-sm text-slate-500">
                        Menampilkan {{ dataJamaahlength }} dari {{ dataJamaahlength }} jamaah
                    </p>
                </div>
            </div>

            <JamaahCard :display="display" :data-jamaah="dataJamaah" @select="onSelect" @menu="onMenu" />


        </USlideover>
    </div>
</template>

<script setup lang="ts">
import { Grid3x3, List, Plus } from 'lucide-vue-next';
import TambahJamaahForm from '~/components/Jamaah/TambahJamaahForm.vue';

const isOpenForm = ref(false);
const display = ref('grid');
const searchQuery = ref('')
const dataJamaah = [
    {
        name: 'Siti Fatimah',
        nik: '12321321312321',
        status: 'MAKKAH',
        city: 'Bandung',
        phone: '082345678912',
    },
    {
        name: 'Zara Fatimah',
        nik: '12321321312321',
        status: 'MADINAH',
        city: 'Bandung',
        phone: '082345678912',
    },
    {
        name: 'Siti Fatimah',
        nik: '12321321312321',
        status: 'PERJALANAN',
        city: 'Bandung',
        phone: '082345678912',
    },
    {
        name: 'Siti Fatimah',
        nik: '12321321312321',
        status: 'TIBA',
        city: 'Bandung',
        phone: '082345678912',
    },
].map(mapJamaahUI)

const items = ref(['Semua Status', 'Terdaftar', 'Dokumen Lengkap', 'Siap Berangkat', 'Dalam Perjalanan', 'Di Makkah', 'Di Madinah']);
const value = ref('Semua Status')

const dataJamaahlength = dataJamaah.length;

const onSelect = (jamaah: any) => {
    console.log('Card clicked:', jamaah)
}

const onMenu = (jamaah: any) => {
    console.log('Menu clicked:', jamaah)
}
</script>

<style scoped></style>