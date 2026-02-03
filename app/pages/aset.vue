<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <PageHeader title="Manajemen Aset" subtitle="Kelola inventaris dan perlengkapan">
            <button class="flex items-center gap-2 px-4 py-2 text-sm rounded-xl
           bg-emerald-600 text-white font-semibold
           shadow hover:bg-emerald-700
           transition">
                <Plus class="w-5 h-5" />
                <span>Tambah Aset</span>
            </button>
        </PageHeader>
    </div>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next';


</script>

<style scoped>

</style>