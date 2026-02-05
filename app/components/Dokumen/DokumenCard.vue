<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <BaseCard v-for="data in dataDokumen" :key="data.key">
            <div class="flex items-center gap-3">
                <div class="p-2" :class="data.bgColor + ' rounded-lg'">
                    <component :is="data.icon" class="w-5 h-5" :class="data.iconColor" />
                </div>
                <div>
                    <p class="text-2xl font-bold" :class="data.iconColor">{{ data.count }}</p>
                    <p class="text-xs text-slate-500">{{ data.title }}</p>
                </div>
            </div>
        </BaseCard>
    </div>
</template>

<script setup lang="ts">
import { CircleAlert, CircleCheck, FileText, User } from 'lucide-vue-next';
import BaseCard from '../BaseCard.vue';

const dataDokumen = [
    {
        key: 'total',
        title: 'Total Jamaah',
        count: 5,
        icon: User,
        iconColor: 'text-blue-600',
        bgColor: 'bg-blue-100',
    },
    {
        key: 'valid',
        title: 'Dokumen Lengkap',
        count: 95,
        icon: CircleCheck,
        iconColor: 'text-emerald-600',
        bgColor: 'bg-emerald-100',
    },
    {
        id: 3,
        title: 'Pending Validasi',
        count: 110,
        icon: CircleAlert,
        iconColor: 'text-amber-600',
        bgColor: 'bg-amber-100',
    },
    {
        id: 4,
        title: 'Tidak valid',
        count: 100,
        icon: FileText,
        iconColor: 'text-red-600',
        bgColor: 'bg-red-100',
    }
];

// const uiConfig: any = {
//   total: {
//     icon: User,
//     iconColor: 'text-blue-600',
//     bgColor: 'bg-blue-100',
//   },
//   valid: {
//     icon: CircleCheck,
//     iconColor: 'text-emerald-600',
//     bgColor: 'bg-emerald-100',
//   },
//   pending: {
//     icon: CircleAlert,
//     iconColor: 'text-amber-600',
//     bgColor: 'bg-amber-100',
//   },
//   invalid: {
//     icon: FileText,
//     iconColor: 'text-red-600',
//     bgColor: 'bg-red-100',
//   },
// }

// const dataDokumen = [
//   { "key": "total", "title": "Total Jamaah", "count": 5 },
//   { "key": "valid", "title": "Dokumen Lengkap", "count": 95 },
//   { "key": "pending", "title": "Pending Validasi", "count": 110 },
//   { "key": "invalid", "title": "Tidak Valid", "count": 100 }
// ].map((item) => ({
//     ...item,
//     ...uiConfig[item.key as keyof typeof uiConfig],
// }));
</script>

<style scoped></style>