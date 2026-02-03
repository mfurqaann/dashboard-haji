<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center justify-between">
                <h2 class="text-xl font-semibold text-slate-800">
                    Status Kloter
                </h2>
                <NuxtLink to="/kloter">
                    <button>
                        Lihat Semua
                    </button>
                </NuxtLink>
            </div>
            <div class="space-y-4">
                <div v-for="kloter in kloters" :key="kloter.code"
                    class="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-md transition-shadow">
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h3 class="font-semibold text-slate-800">{{ kloter.code }}</h3>
                            <p class="text-sm text-slate-500">{{ kloter.jamaah }} jamaah</p>
                        </div>
                        <span class="px-3 py-1 text-xs font-medium rounded-full" :class="statusClass(kloter.status)">
                            {{ kloter.status }}
                        </span>
                    </div>
                    <div class="flex items-center justify-between">
                        <template v-for="(Icon, index) in steps" :key="index">
                            <div class="flex items-center">
                                <div class="relative flex items-center justify-center w-8 h-8 rounded-full transition-all"
                                    :class="stepClass(kloter.current_step, index)">
                                    <component :is="Icon" class="w-4 h-4"
                                        :class="iconClass(kloter.current_step, index)" />
                                </div>

                                <div v-if="index < steps.length - 1" class="w-6 md:w-10 h-0.5 mx-1"
                                    :class="lineClass(kloter.current_step, index)" />
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>

        <AktivitasTerkini />
    </div>
</template>

<script setup lang="ts">
import { Building2, House, MapPin, Plane } from 'lucide-vue-next';
import AktivitasTerkini from './AktivitasTerkini.vue';


const steps = [
    Building2, 
    Plane,    
    Plane,     
    MapPin,    
    House,     
    Building2  
]

const kloters = ref([
    {
        code: 'KLT-0500',
        jamaah: 442,
        status: 'Persiapan',
        current_step: 0
    },
    {
        code: 'KLT-0501',
        jamaah: 410,
        status: 'Berangkat',
        current_step: 2
    },
    {
        code: 'KLT-0502',
        jamaah: 398,
        status: 'Tiba',
        current_step: 4
    }
])

const stepClass = (current: any, index: any) =>
    index <= current
        ? 'bg-emerald-500 ring-4 ring-emerald-100'
        : 'bg-slate-100'

const iconClass = (current: any, index: any) =>
    index <= current
        ? 'text-white'
        : 'text-slate-400'

const lineClass = (current: any, index: any) =>
    index < current
        ? 'bg-emerald-300'
        : 'bg-slate-100'

const statusClass = (status: string) => {
    switch (status) {
        case 'Persiapan':
            return 'bg-emerald-50 text-emerald-700'
        case 'Berangkat':
            return 'bg-blue-50 text-blue-700'
        case 'Tiba':
            return 'bg-purple-50 text-purple-700'
        default:
            return 'bg-slate-100 text-slate-700'
    }
}

</script>

<style scoped></style>