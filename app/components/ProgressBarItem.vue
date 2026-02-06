<template>
    <div>
        <div class="flex justify-between text-sm mb-2">
            <span :class="color ? `text-${color}-600` : 'text-black' ">{{ label }}</span>
            <span class="font-medium">
                <slot name="value" />
            </span>
        </div>
        <div class="h-3 w-full rounded-full bg-gray-300 overflow-hidden">
            <div class="h-full rounded-full transition-all duration-300"
                :class="color ? `bg-${color}-500` : 'bg-black'" :style="{ width: `${progress}%` }" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label: string
    progress: number,
    color: string
}>()
</script>

<style scoped></style>