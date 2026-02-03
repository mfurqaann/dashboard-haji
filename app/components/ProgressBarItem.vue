<template>
    <div>
        <div class="flex justify-between text-sm mb-2">
            <span>{{ label }}</span>
            <span class="font-medium">
                <slot name="value" />
            </span>
        </div>
        <div class="h-3 w-full rounded-full bg-gray-300 overflow-hidden">
            <div class="h-full rounded-full bg-black transition-all duration-300" :style="{ width: `${progress}%` }" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label: string
    progress: number
}>()
</script>

<style scoped></style>