<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <PageHeader title="Mobil Sewa & Rute Mekah 🚗" subtitle="Jadwal transportasi dalam kota dengan info kepadatan">
        </PageHeader>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
        <Cuaca />

        <JadwalRute />
        </div>
    </div>
</template>

<script setup lang="ts">
import Cuaca from '~/components/RuteMobil/Cuaca.vue';
import JadwalRute from '~/components/RuteMobil/JadwalRute.vue';



</script>

<style scoped>

</style>