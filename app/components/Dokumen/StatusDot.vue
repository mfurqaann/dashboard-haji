<template>
  <div class="flex justify-center">
    <span
      v-if="status === 'pending'"
      class="h-5 w-5 rounded-full bg-gray-300"
    />

    <span
      v-else-if="status === 'valid'"
      class="h-5 w-5 rounded-full bg-emerald-500"
    />

    <span
      v-else
      class="text-xl font-bold text-red-600"
    >
      ✕
    </span>
  </div>
</template>

<script setup>
defineProps({
  status: {
    type: String,
    default: 'pending',
  },
})
</script>
