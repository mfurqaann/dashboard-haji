<template>
    <div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <BaseCard v-for="item in stats" :key="item.key" :bg="item.bg">
                <div class="flex items-center gap-3">
                    <div :class="['p-2 rounded-lg', item.iconBg]">
                        <component :is="item.icon" class="w-5 h-5" :class="item.iconColor" />
                    </div>

                    <div>
                        <p class="text-2xl font-bold" :class="item.valueColor">
                            {{ item.total }}
                        </p>
                        <p class="text-sm" :class="item.labelColor">
                            {{ item.label }}
                        </p>
                    </div>
                </div>
            </BaseCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Bus, MapPin, Users } from 'lucide-vue-next';
import BaseCard from '../BaseCard.vue';

const statsFromApi = [
    {
        key: 'mekah',
        label: 'Di Mekah',
        total: 1,
    },
    {
        key: 'madinah',
        label: 'Di Madinah',
        total: 1,
    },
    {
        key: 'perjalanan',
        label: 'Dalam Perjalanan',
        total: 1,
    },
    {
        key: 'kendaraan',
        label: 'Kendaraan Aktif',
        total: 1,
    },
]


const uiConfig = {
    mekah: {
        bg: 'bg-emerald-50',
        iconBg: 'bg-emerald-100',
        icon: MapPin,
        iconColor: 'text-emerald-600',
        valueColor: 'text-emerald-700',
        labelColor: 'text-emerald-600',
    },
    madinah: {
        bg: 'bg-teal-50',
        iconBg: 'bg-teal-100',
        icon: MapPin,
        iconColor: 'text-teal-600',
        valueColor: 'text-teal-700',
        labelColor: 'text-teal-600',
    },
    perjalanan: {
        bg: 'bg-purple-50',
        iconBg: 'bg-purple-100',
        icon: Users,
        iconColor: 'text-purple-600',
        valueColor: 'text-purple-700',
        labelColor: 'text-purple-600',
    },
    kendaraan: {
        bg: 'bg-amber-50',
        iconBg: 'bg-amber-100',
        icon: Bus,
        iconColor: 'text-amber-600',
        valueColor: 'text-amber-700',
        labelColor: 'text-amber-600',
    },
}

const stats = computed(() =>
    statsFromApi.map(item => ({
        ...item,
        ...uiConfig[item.key as keyof typeof uiConfig],
    }))
)

</script>

<style scoped></style>