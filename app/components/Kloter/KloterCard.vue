<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="data in dataKloter" :key="data.code" class="rounded-xl border border-slate-300 shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div class="flex flex-col space-y-1.5 bg-linear-to-r from-emerald-500 to-emerald-600 text-white p-5">
                <div class="flex items-start justify-between">
                    <div>
                        <div class="font-semibold tracking-tight text-lg">
                            {{ data.code }}
                        </div>
                        <p class="text-emerald-100 text-sm mt-1">
                            {{ data.airline }}
                        </p>
                    </div>
                    <UDropdownMenu :items="items" :content="{
          align: 'start',
          side: 'bottom',
          sideOffset: 8
        }" :ui="{
      content: 'w-48'
    }">
          <UButton icon="i-lucide-ellipsis-vertical" color="neutral" variant="ghost" class="text-white hover:text-black cursor-pointer" />
        </UDropdownMenu>
                </div>
            </div>
            <div class="p-5 space-y-4">
                <div class="flex items-center justify-between">
                    <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                        {{ data.status }}
                    </span>
                    <span class="text-sm text-slate-500"></span>
                </div>
                <div class="space-y-3">
                    <div class="flex items-center gap-3 text-sm">
                        <Calendar />
                        <div>
                            <p class="text-slate-600">{{ data.departureDate }}</p>
                            <p class="text-xs text-slate-400">Keberangkatan</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 text-sm">
                        <Plane />
                        <div>
                            <p class="text-slate-600">{{ data.route }}</p>
                            <p class="text-xs text-slate-400">Rute</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 text-sm">
                        <Users />
                        <div>
                            <p class="text-slate-600">
                                {{ data.capacity.booked }} / {{ data.capacity.total }} jamaah
                            </p>
                            <p class="text-xs text-slate-400">
                                Kapasitas
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 text-sm">
                        <Building2 />
                        <div>
                            <p class="text-slate-600">
                                {{ data.hotelMekah }}
                            </p>
                            <p class="text-xs text-slate-400">
                                Hotel Mekah
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';
import { Building2, Calendar, Plane, Users } from 'lucide-vue-next';

const dataKloter = [
    {
        code: 'KLT-0500',
        airline: 'Emirates',
        status: 'Persiapan',
        departureDate: '11 Mar 2026',
        route: 'KNO Medan -> JED Jeddah',
        capacity: { total: 442, booked: 0 },
        hotelMekah: 'Hotel Mekah 1',
    },
    {
        code: 'KLT-0500',
        airline: 'Emirates',
        status: 'Persiapan',
        departureDate: '11 Mar 2026',
        route: 'KNO Medan -> JED Jeddah',
        capacity: { total: 442, booked: 0 },
        hotelMekah: 'Hotel Mekah 1',
    },
    {
        code: 'KLT-0500',
        airline: 'Emirates',
        status: 'Persiapan',
        departureDate: '11 Mar 2026',
        route: 'KNO Medan -> JED Jeddah',
        capacity: { total: 442, booked: 0 },
        hotelMekah: 'Hotel Mekah 1',
    },
    {
        code: 'KLT-0500',
        airline: 'Emirates',
        status: 'Persiapan',
        departureDate: '11 Mar 2026',
        route: 'KNO Medan -> JED Jeddah',
        capacity: { total: 442, booked: 0 },
        hotelMekah: 'Hotel Mekah 1',
    },
    {
        code: 'KLT-0500',
        airline: 'Emirates',
        status: 'Persiapan',
        departureDate: '11 Mar 2026',
        route: 'KNO Medan -> JED Jeddah',
        capacity: { total: 442, booked: 0 },
        hotelMekah: 'Hotel Mekah 1',
    },
];

const items = ref<DropdownMenuItem[]>([
  {
    label: 'Edit',
  },
  {
    label: 'Hapus',
    color: 'error'
  }
])

</script>

<style scoped></style>