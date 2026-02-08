<template>
  <div class="lg:col-span-1">
    <div class="rounded-xl bg-white text-card-foreground shadow">
      <div class="flex flex-col space-y-1.5 p-6">
        <div class="flex items-center justify-between">
          <div
            class="font-semibold leading-none tracking-tight flex items-center gap-2"
          >
            <Sun class="w-5 h-5" />
            <div class="font-semibold">Cuaca Mekah</div>
          </div>
          <button
            class="bg-white font-semibold text-black shadow h-8 px-3 rounded-md text-xs cursor-pointer hover:bg-gray-100"
          >
            Refresh
          </button>
        </div>
      </div>
      <div class="p-6 pt-0 space-y-4">
        <div
          class="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl"
        >
          <div class="flex items-center gap-4">
            <div class="p-3 bg-white rounded-full shadow-sm">
              <Sun class="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <p class="text-4xl font-bold text-slate-800">28°C</p>
              <div
                class="inline-flex items-center mt-1 rounded-md px-2.5 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-700 shadow hover:bg-primary/80"
              >
                Cerah
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3">
          <div class="p-3 bg-slate-50 rounded-lg text-center">
            <Droplets class="w-5 h-5 text-blue-600 mx-auto mb-1" />
            <p class="text-sm text-slate-500">Kelembaban</p>
            <p class="font-semibold text-slate-800">13%</p>
          </div>
          <div class="p-3 bg-slate-50 rounded-lg text-center">
            <Wind class="w-5 h-5 text-slate-600 mx-auto mb-1" />
            <p class="text-sm text-slate-500">Angin</p>
            <p class="font-semibold text-slate-800">9 km/h</p>
          </div>
          <div class="p-3 bg-slate-50 rounded-lg text-center">
            <ThermometerSun class="w-5 h-5 text-orange-600 mx-auto mb-1" />
            <p class="text-sm text-slate-500">Feels Like</p>
            <p class="font-semibold text-slate-800">30°C</p>
          </div>
        </div>

        <div class="p-3 bg-blue-50 rounded-lg border border-blue-100">
          <p class="text-sm text-blue-800">
            Cuaca cerah dengan sedikit kabut, suhu sekitar 30°C.
          </p>
        </div>

        <div class="p-3 bg-amber-50 rounded-lg border border-amber-100">
          <div class="flex items-start gap-2">
            <TriangleAlert class="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <p class="text-sm text-amber-800">
              Disarankan untuk mengenakan pakaian ringan dan nyaman, serta
              membawa payung atau penutup kepala untuk melindungi dari sinar
              matahari langsung. Pastikan juga untuk menjaga hidrasi dengan
              minum air yang cukup selama beraktivitas.
            </p>
          </div>
        </div>

        <button
          class="inline-flex items-center justify-center w-full text-white rounded-md gap-2 h-9 px-4 py-2 bg-emerald-600 hover:bg-emerald-700"
        >
          Minta Rekomendasi AI Lengkap
        </button>
      </div>
    </div>
  </div>

 
</template>

<script setup lang="ts">
import {
  Droplets,
  Sun,
  ThermometerSun,
  TriangleAlert,
  Wind,
} from "lucide-vue-next";



</script>

<style scoped></style>
