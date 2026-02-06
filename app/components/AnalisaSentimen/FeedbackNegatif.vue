<template>
    <div>
        <BaseCard>
            <div class="flex flex-col space-y-1.5">
                <div class="font-bold leading-none tracking-tight flex items-center gap-2">
                    Feedback Negatif Terbaru
                </div>
            </div>

            <div class="p-6 pt-0 space-y-3 mt-5">
                <div class="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div class="flex items-start gap-3">
                        <div class="p-2 rounded-lg bg-red-100 shrink-0">
                            <Frown class="w-4 h-4 text-red-500" />
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2 mb-1">
                                <div class="items-center rounded-md border px-2.5 py-0.5 font-semibold text-xs">Makanan
                                </div>
                                <span class="text-xs text-slate-400">14 Jan</span>
                            </div>

                            <p class="text-sm text-slate-700">makanan ga enak</p>
                            <div class="flex flex-wrap gap-1 mt-2">
                                <span class="text-xs px-2 py-0.5 bg-slate-200 text-slate-600 rounded">
                                    makanan
                                </span>
                                <span class="text-xs px-2 py-0.5 bg-slate-200 text-slate-600 rounded">
                                    makanan
                                </span>
                                <span class="text-xs px-2 py-0.5 bg-slate-200 text-slate-600 rounded">
                                    makanan
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div class="flex items-start gap-3">
                        <div class="p-2 rounded-lg bg-red-100 shrink-0">
                            <Frown class="w-4 h-4 text-red-500" />
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2 mb-1">
                                <div class="items-center rounded-md border px-2.5 py-0.5 font-semibold text-xs">Makanan
                                </div>
                                <span class="text-xs text-slate-400">14 Jan</span>
                            </div>

                            <p class="text-sm text-slate-700">makanan ga enak</p>
                            <div class="flex flex-wrap gap-1 mt-2">
                                <span class="text-xs px-2 py-0.5 bg-slate-200 text-slate-600 rounded">
                                    makanan
                                </span>
                                <span class="text-xs px-2 py-0.5 bg-slate-200 text-slate-600 rounded">
                                    makanan
                                </span>
                                <span class="text-xs px-2 py-0.5 bg-slate-200 text-slate-600 rounded">
                                    makanan
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </BaseCard>
    </div>
</template>

<script setup lang="ts">
import { Frown } from 'lucide-vue-next';


</script>

<style scoped></style>