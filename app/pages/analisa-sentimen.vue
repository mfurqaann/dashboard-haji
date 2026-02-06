<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <PageHeader title="Analisis Sentimen Jamaah 💬" subtitle="Monitor kepuasan dan feedback jamaah dengan AI">
        </PageHeader>

        <div class="bg-white rounded-xl border border-slate-100 p-4 mt-5">
            <div class="flex flex-col md:flex-row gap-4">
                <div class="flex-1">
                    <SearchInput v-model="searchQuery" placeholder="Cari jamaah berdasarkan nama, NIK, atau kota..." />
                </div>
                <USelectMenu v-model="valueDropdownKloter" :items="dataDropdownKloter" class="cursor-pointer w-48" />
                <USelectMenu v-model="valueDropdownKategori" :items="dataDropdownKategori" class="cursor-pointer w-48" />
                <USelectMenu v-model="valueDropdownSentimen" :items="dataDropdownSentimen" class="cursor-pointer w-48" />
            </div>
        </div>

        <AnalisaSentimenCard class="mt-5" />

        <DistribusiSentimen class="mt-5" />

        <Feedback class="mt-5" />

        <MasalahMendesak class="mt-5" />
        
        <FeedbackNegatif class="mt-5" />
    </div>
</template>

<script setup lang="ts">
import AnalisaSentimenCard from '~/components/AnalisaSentimen/AnalisaSentimenCard.vue';
import DistribusiSentimen from '~/components/AnalisaSentimen/DistribusiSentimen.vue';
import Feedback from '~/components/AnalisaSentimen/Feedback.vue';
import FeedbackNegatif from '~/components/AnalisaSentimen/FeedbackNegatif.vue';
import MasalahMendesak from '~/components/AnalisaSentimen/MasalahMendesak.vue';

const searchQuery = ref('')

const dataDropdownKategori = ref(['Semua Kategori', 'Makanan', 'Akomodasi', 'Transportasi']);
const valueDropdownKategori = ref('Semua Kategori');

const dataDropdownKloter = ref(['Semua Kloter', 'Kloter 1', 'Kloter 2', 'Kloter 3']);
const valueDropdownKloter = ref('Semua Kloter');

const dataDropdownSentimen = ref(['Semua Sentimen', 'Positif', 'Netral', 'Negatif']);
const valueDropdownSentimen = ref('Semua Sentimen');
</script>

<style scoped>

</style>