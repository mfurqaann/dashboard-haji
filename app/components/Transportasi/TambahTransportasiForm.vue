<template>
    <div class="overflow-auto max-w-2xl">
        <UForm :state="form" class="space-y-4" @submit="onSubmit">
            <div class="grid grid-cols-2 gap-4">
                <UFormField label="Nama Kendaraan" name="namaKendaraan" class="col-span-2">
                    <UInput v-model="form.namaKendaraan" placeholder="Garuda Indonesia" class="w-full" />
                </UFormField>
                <UFormField label="Jenis" name="jenis">
                    <USelectMenu v-model="form.jenis" :items="dataJenis" placeholder="Pilih Jenis" class="w-full" />
                </UFormField>
                <UFormField label="Nomor Plat" name="nomorPlat">
                    <UInput v-model="form.nomorPlat" class="w-full" />
                </UFormField>
                <UFormField label="Kapasitas" name="kapasitas">
                    <UInput v-model="form.kapasitas" class="w-full" />
                </UFormField>   
                <UFormField label="Status" name="status">
                    <USelectMenu v-model="form.status" :items="statuses" class="w-full" />
                </UFormField>
                <UFormField label="Nama Driver" name="namaDriver">
                    <UInput v-model="form.namaDriver" class="w-full" />
                </UFormField>
                <UFormField label="No. Telepon Driver" name="noTeleponDriver">
                    <UInput v-model="form.noTeleponDriver" class="w-full" />
                </UFormField>
                <UFormField label="Rute" name="rute" class="col-span-2">
                    <USelectMenu v-model="form.rute" :items="dataRute" placeholder="Pilih rute" class="w-full" />
                </UFormField>
                <UFormField label="Catatan" name="catatan" class="col-span-2">
                    <UTextarea v-model="form.catatan" autoresize class="w-full" />
                </UFormField>


                <UButton color="neutral" variant="outline" class="justify-center">
                    Batal
                </UButton>
                <UButton type="submit" class="justify-center bg-emerald-600">
                    Tambah
                </UButton>
            </div>
        </UForm>

    </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';

const form: any = reactive({
    namaKendaraan: '',
    jenis: '',
    nomorPlat: '',
    kapasitas: '',
    status: 'Tersedia',
    namaDriver: '',
    noTeleponDriver: '',
    rute: '',
    catatan: ''
});

const statuses = ref(['Tersedia', 'Dalam Perjalanan', 'Maintenance', 'Tidak Tersedia']);
const dataJenis = ref(['Bus', 'Van', 'Mobil', 'Pesawat']);
const dataRute = ref(['Bandara - Hotel Mekah', 'Hotel Mekah - Hotel Madinah']);

async function onSubmit(event: FormSubmitEvent<any>) {
    console.log(event.data)
};
</script>

<style scoped>

</style>