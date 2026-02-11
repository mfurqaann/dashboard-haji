<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div v-for="data in dataAset" :key="data.kode"
            class="rounded-xl bg-white shadow overflow-hidden hover:shadow-lg transition-shadow h-full">
            <div class="flex flex-col space-y-1.5 p-4 pb-2">
                <div class="flex items-start justify-between">
                    <div class="flex items-center gap-3">
                        <Pill class="w-6 h-6 text-emerald-600" />
                        <div class="min-w-0">
                            <div class="font-semibold tracking-tight text-base truncate">
                                {{ data.nama }}
                            </div>
                            <p class="text-xs text-slate-400">
                                {{ data.kode }}
                            </p>
                        </div>
                    </div>
                    <UDropdownMenu :items="items" :content="{
                        align: 'start',
                        side: 'bottom',
                        sideOffset: 8
                    }" :ui="{
                        content: 'w-48'
                    }">
                        <UButton icon="i-lucide-ellipsis-vertical" color="neutral" variant="ghost" />
                    </UDropdownMenu>
                </div>
            </div>

            <div class="p-4 pt-2 space-y-2">
                <div class="flex items-center justify-between">
                    <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
                        {{ data.kondisi }}
                    </span>
                    <span class="text-sm font-medium text-slate-600">
                        {{ data.jumlah }} set
                    </span>
                </div>
                <div class="flex items-center gap-1 text-xs text-slate-400">
                    <Tag class="w-3 h-3" />
                    <span>{{ data.kategori }}</span>
                </div>
                <div class="flex items-center gap-1 text-xs text-slate-400">
                    <MapPin class="w-3 h-3" />
                    <span>{{ data.lokasi }}</span>
                </div>
                <div class="flex items-center gap-1 text-xs text-slate-400">
                    <User class="w-3 h-3" />
                    <span>{{ data.penanggungJawab }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';
import { Ellipsis, EllipsisVertical, MapPin, Pill, Tag, User } from 'lucide-vue-next';

const dataAset = [
    {
        nama: 'Obat-obatan P3K',
        kode: 'AST-002',
        kondisi: 'Baik',
        jumlah: 100,
        kategori: 'Perlengkapan Kesehatan',
        lokasi: 'Posko Kesehatan',
        penanggungJawab: 'Admin Gudang',
    },
    {
        nama: 'Radio Komunikasi HT',
        kode: 'AST-003',
        kondisi: 'Baik',
        jumlah: 50,
        kategori: 'Perlengkapan Komunikasi',
        lokasi: 'Ruang Petugas',
        penanggungJawab: 'Pak Ridwan',
    },
    {
        nama: 'Sajadah Travel',
        kode: 'AST-004',
        kondisi: 'Baik',
        jumlah: 600,
        kategori: 'Perlengkapan Ibadah',
        lokasi: 'Gudang Utama Jakarta',
        penanggungJawab: 'Pak Slamet',
    },
    {
        nama: 'Obat-obatan P3K',
        kode: 'AST-002',
        kondisi: 'Baik',
        jumlah: 100,
        kategori: 'Perlengkapan Kesehatan',
        lokasi: 'Posko Kesehatan',
        penanggungJawab: 'Admin Gudang',
    },
];

const items = ref<DropdownMenuItem[]>([
    {
        label: 'Edit',
    },
    {
        label: 'Hapus',
        color: 'error'
    },
])

</script>

<style scoped></style>