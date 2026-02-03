<template>
  <div class="flex min-h-screen bg-gray-50">
    <Sidebar
      :open="sidebarOpen"
      @close="sidebarOpen = false"
    />

    <div class="flex-1 flex flex-col">
      <header
        class="lg:hidden flex items-center gap-3 px-4 h-14 bg-white border-b"
      >
        <button
          @click="sidebarOpen = true"
          class="p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu class="w-6 h-6" />
        </button>

        <span class="font-semibold text-gray-800">
          Haji Manager
        </span>
      </header>

      <main class="flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'
import { Menu } from 'lucide-vue-next'

const sidebarOpen = ref(false)
</script>
