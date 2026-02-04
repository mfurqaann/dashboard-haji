<template>
  <!-- Overlay (mobile) -->
  <div
    v-if="open"
    class="fixed inset-0 bg-black/40 z-40 lg:hidden"
    @click="$emit('close')"
  />

  <!-- Sidebar -->
  <aside
    class="fixed lg:static inset-y-0 left-0 z-50
           w-70 bg-white flex flex-col
           px-5 py-6
           transform transition-transform duration-300
           lg:translate-x-0"
    :class="open ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- Header -->
    <div class="flex items-center gap-3 mb-5">
      <div
        class="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-lg"
      >
        H
      </div>

      <div>
        <h1 class="text-sm font-semibold text-gray-900">
          Haji Manager
        </h1>
        <p class="text-xs text-gray-400 tracking-wide">
          SISTEM MANAJEMEN
        </p>
      </div>

      <!-- Close button (mobile) -->
      <button
        class="ml-auto lg:hidden p-2 rounded-lg hover:bg-gray-100"
        @click="$emit('close')"
      >
        ✕
      </button>
    </div>

    <!-- Menu -->
    <nav class="flex-1 space-y-1">
      <NuxtLink
        v-for="item in menu"
        :key="item.label"
        :to="item.to"
        @click="$emit('close')"
        class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 font-medium transition"
        :class="isActive(item.to)
          ? 'bg-emerald-50 text-emerald-600'
          : 'hover:bg-gray-100'"
      >
        <component :is="item.icon" class="w-5 h-5" />
        <span>{{ item.label }}</span>

        <span
          v-if="isActive(item.to)"
          class="ml-auto w-2 h-2 bg-emerald-500 rounded-full"
        />
      </NuxtLink>
    </nav>

    <!-- User -->
    <div class="mt-6">
      <button
        class="w-full flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100"
      >
        <div
          class="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center font-semibold"
        >
          U
        </div>
        <span class="text-sm font-medium text-gray-700">
          User
        </span>
      </button>
    </div>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'
import {
  LayoutGrid,
  Activity,
  Users,
  FileText,
  MessageCircle,
  Plane,
  Ticket,
  Bus,
  Box,
  MapPin
} from 'lucide-vue-next'

defineProps({
  open: Boolean,
})

defineEmits(['close'])

const route = useRoute()
const isActive = (path) => route.path === path

const menu = [
  { label: 'Dashboard', to: '/', icon: LayoutGrid },
  { label: 'Dashboard Pimpinan', to: '/dashboard-pimpinan', icon: Activity },
  { label: 'Jamaah', to: '/jamaah', icon: Users },
  { label: 'Dokumen', to: '/dokumen-jamaah', icon: FileText },
  { label: 'Analisa Sentimen', to: '/analisa-sentimen', icon: MessageCircle },
  { label: 'Kloter', to: '/kloter', icon: Plane },
  { label: 'Tiket', to: '/tiket', icon: Ticket },
  { label: 'Rute Mobil Mekah', to: '/rute-mobil', icon: Bus },
  { label: 'Transportasi', to: '/transportasi', icon: Bus },
  { label: 'Aset', to: '/aset', icon: Box },
  { label: 'Tracking', to: '/tracking', icon: MapPin },
]
</script>
