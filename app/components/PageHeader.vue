<template>
    <div class="max-w-7xl mx-auto space-y-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
                <h1 class="text-3xl md:text-3xl font-bold text-slate-800">{{ title }}</h1>
                <p class="text-slate-500 mt-1">{{ subtitle }}</p>
            </div>

            <div class="flex gap-3">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps({
        title: String,
        subtitle: String
    })
</script>

<style scoped></style>
