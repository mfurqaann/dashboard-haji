<template>
    <div class="min-h-screen p-4 md:p-8">
        <USlideover v-model="isOpenForm">

            <template #content>
                <TambahKloterForm />
            </template>

            <PageHeader title="Manajemen Kloter" subtitle="Kelola kloter keberangkatan jamaah">
                <button class="flex items-center gap-2 px-4 py-2 text-sm rounded-xl
           bg-emerald-600 text-white font-semibold
           shadow hover:bg-emerald-700
           transition cursor-pointer" @click="isOpenForm = true">
                    <Plus class="w-5 h-5" />
                    <span>Tambah Kloter</span>
                </button>
            </PageHeader>
            <div class="max-w-md my-6">
                <SearchInput v-model="searchQuery" placeholder="Cari kloter... atau maskapai" />
            </div>

            <KloterCard />

        </USlideover>
    </div>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
import KloterCard from '~/components/Kloter/KloterCard.vue';
import TambahKloterForm from '~/components/Kloter/TambahKloterForm.vue';
import SearchInput from '~/components/SearchInput.vue';

const searchQuery = ref('');
const isOpenForm = ref(false);


</script>

<style scoped></style>