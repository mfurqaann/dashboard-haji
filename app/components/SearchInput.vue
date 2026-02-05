<script setup lang="ts">
import { Search } from 'lucide-vue-next'

interface Props {
  placeholder?: string
  modelValue?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="relative">
    <Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    <input
      type="text"
      :placeholder="props.placeholder"        
      :value="props.modelValue"               
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="h-9 w-full rounded-md border border-slate-300 px-3 pl-10 focus:outline-none focus:ring-1"
    />
  </div>
</template>
