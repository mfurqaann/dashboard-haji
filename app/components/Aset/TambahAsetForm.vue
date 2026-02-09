<template>
    <div class="overflow-auto max-w-2xl">
        <UForm :state="form" class="space-y-4" @submit="onSubmit">
            <div class="grid grid-cols-2 gap-4">
                <UFormField label="Nama Aset" name="namaAset" class="col-span-2">
                    <UInput v-model="form.namaAset" class="w-full" />
                </UFormField>
                <UFormField label="Kategori" name="jenis">
                    <USelectMenu v-model="form.jenis" :items="dataKategori" placeholder="Pilih Jenis" class="w-full" />
                </UFormField>
                <UFormField label="Kode Aset" name="kodeAset">
                    <UInput v-model="form.kodeAset" class="w-full" />
                </UFormField>
                <UFormField label="Jumlah" name="jumlah">
                    <UInputNumber v-model="form.jumlah" orientation="vertical" />
                </UFormField>   
                <UFormField label="Satuan" name="satuan">
                    <UInput v-model="form.satuan" placeholder="pcs, unit, set" class="w-full" />
                </UFormField>
                <UFormField label="Kondisi" name="namaDriver">
                    <USelectMenu v-model="form.kondisi" :items="dataKondisi" class="w-full" />
                </UFormField>
                <UFormField label="Lokasi Penyimpanan" name="lokasiPenyimpanan">
                    <UInput v-model="form.lokasiPenyimpanan" class="w-full" />
                </UFormField>
                <UFormField label="Penanggung Jawab" name="penanggungJawab" class="col-span-2">
                    <UInput v-model="form.penanggungJawab" class="w-full" />
                </UFormField>
                <UFormField label="Tanggal Lahir" name="tanggalPerolehan">
                    <UPopover>
                        <UButton color="neutral" variant="subtle" icon="i-lucide-calendar" class="w-full">
                            {{ form.tanggalPerolehan ? df.format(form.tanggalPerolehan.toDate(getLocalTimeZone())) : 'Select a date' }}
                        </UButton>

                        <template #content>
                            <UCalendar v-model="form.tanggalPerolehan" class="p-2" />
                        </template>
                    </UPopover>
                </UFormField>
                <UFormField label="Nilai Perolehan (Rp)" name="nilaiPerolehan">
                    <UInputNumber v-model="form.nilaiPerolehan" orientation="vertical" />
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
import { DateFormatter, getLocalTimeZone } from '@internationalized/date'

const form: any = reactive({
    namaAset: '',
    kategori: '',
    kodeAset: '',
    jumlah: '',
    satuan: '',
    kondisi: 'Baik',
    lokasiPenyimpanan: '',
    penanggungJawab: '',
    tanggalPerolehan: '',
    nilaiPerolehan: 1,
    catatan: ''
});

const dataKategori = ref(['Perlengkapan Ibadah', 'Perlengkapan Kesehatan']);
const dataKondisi = ref(['Baik', 'Rusak Ringan', 'Rusak Berat', 'Hilang']);

async function onSubmit(event: FormSubmitEvent<any>) {
    console.log(event.data)
};

const df = new DateFormatter('en-US', {
    dateStyle: 'medium'
})
</script>

<style scoped>

</style>