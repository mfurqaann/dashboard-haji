<template>
  <div
    :class="[
      'relative overflow-hidden rounded-2xl shadow-sm border border-slate-100 p-5',
      bg ? bg : 'bg-white'
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  bg: {
    type: String,
    default: ''
  }
})
</script>
