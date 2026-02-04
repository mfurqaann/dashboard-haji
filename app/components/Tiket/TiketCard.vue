<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <div class="rounded-xl shadow bg-white overflow-hidden hover:shadow-lg transition-shadow">
            <div class="flex flex-col space-y-1.5 bg-linear-to-r from-blue-500 to-blue-600 text-white p-4">
                <div class="flex items-start justify-between">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-white/20 rounded-lg">
                            <Plane class="w-5 h-5" />
                        </div>
                        <div>
                            <div class="font-semibold tracking-tight text-base">
                                Garuda Indonesia
                            </div>
                            <p class="text-blue-100 text-sm">Kloter: 123456</p>
                        </div>
                    </div>
                    <div>titik tiga</div>
                </div>
            </div>

            <div class="p-4 space-y-3">
                <div class="flex items-center justify-between">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">Pending</span>
                    <span class="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700">
                        Berangkat
                    </span>
                </div>

                <div class="flex items-center gap-2 text-sm">
                    <User class="w-4 h-4" />
                    <span class="text-slate-600 truncate">Nurul Hidayah</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                    <Plane class="w-4 h-4" />
                    <span class="text-slate-600">KLT-BDG-003</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Plane, User } from 'lucide-vue-next';


</script>

<style scoped>

</style>