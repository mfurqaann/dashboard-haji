<template>
    <div class="min-h-screen p-4 md:p-8">
        <PageHeader title="Dashboard Pimpinan 🎯" subtitle="Monitoring menyeluruh situasi jamaah dan operasional">
            <USelectMenu v-model="value" :items="items" class="cursor-pointer w-48" />
        </PageHeader>

        <DashboardPimpinan />

        <Tabs />
    </div>
</template>

<script setup lang="ts">
import Tabs from '~/components/DashboardPimpinan/Tabs.vue';
import DashboardPimpinan from '~/components/DashboardPimpinan/DashboardPimpinan.vue';

const items = ref(['Semua Kloter', 'KLT-0500', 'KLT-0501', 'KLT-0502', 'KLT-0503']);
const value = ref('Semua Kloter')

</script>

<style scoped>

</style>