<template>
    <div class="overflow-auto">
        <UForm :state="form" class="space-y-4" @submit="onSubmit">
            <div class="grid grid-cols-2 gap-4">
                <UFormField label="Nama Lengkap" name="namaLengkap" class="col-span-2">
                    <UInput v-model="form.nama" class="w-full" />
                </UFormField>

                <UFormField label="NIK" name="nik">
                    <UInput v-model="form.nik" class="w-full" />
                </UFormField>
                <UFormField label="No. Paspor" name="noPaspor">
                    <UInput v-model="form.paspor" class="w-full" />
                </UFormField>
                <UFormField label="Tanggal Lahir" name="tanggalLahir">
                    <UPopover>
                        <UButton color="neutral" variant="subtle" icon="i-lucide-calendar" class="w-full">
                            {{ form.tanggalLahir ? df.format(form.tanggalLahir.toDate(getLocalTimeZone())) : 'Select a date' }}
                        </UButton>

                        <template #content>
                            <UCalendar v-model="form.tanggalLahir" class="p-2" />
                        </template>
                    </UPopover>
                </UFormField>
                <UFormField label="Jenis Kelamin" name="jenisKelamin">
                    <USelectMenu v-model="form.jenisKelamin" :items="items" class="cursor-pointer w-48" />
                </UFormField>
                <UFormField label="No. Telepon" name="telepon">
                    <UInput v-model="form.telepon" class="w-full" />
                </UFormField>
                <UFormField label="No. Telepon Darurat" name="teleponDarurat">
                    <UInput v-model="form.teleponDarurat" class="w-full" />
                </UFormField>
                <UFormField label="Alamat" name="alamat" class="col-span-2">
                    <UTextarea v-model="form.alamat" :maxrows="4" autoresize class="w-full" />
                </UFormField>
                <UFormField label="Kota" name="kota">
                    <UInput v-model="form.kota" class="w-full" />
                </UFormField>
                <UFormField label="Provinsi" name="provinsi">
                    <UInput v-model="form.provinsi" class="w-full" />
                </UFormField>
                <UFormField label="Golongan Darah" name="golonganDarah">
                    <USelectMenu v-model="form.golonganDarah" :items="dataGolonganDarah" placeholder="Pilih" class="w-full" />
                </UFormField>
                <UFormField label="Status" name="status">
                    <USelectMenu v-model="form.status" :items="statuses" placeholder="Pilih" class="w-full" />
                </UFormField>
                <UFormField label="Kloter" name="kloter">
                    <USelectMenu v-model="form.kloter" :items="dataKloter" placeholder="Pilih Kloter" class="w-full" />
                </UFormField>
                <UFormField label="Rombongan" name="rombongan">
                    <USelectMenu v-model="form.rombongan" :items="dataRombongan" placeholder="Pilih Rombongan" class="w-full" />
                </UFormField>
                <UFormField label="Riwayat Penyakit" name="riwayatpenyakit" class="col-span-2">
                    <UTextarea v-model="form.riwayatPenyakit" :maxrows="4" autoresize class="w-full" />
                </UFormField>
                <UFormField label="Catatan" name="catatan" class="col-span-2">
                    <UTextarea v-model="form.catatan" :maxrows="4" autoresize class="w-full" />
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
import type { FormSubmitEvent, SelectMenuItem } from '@nuxt/ui';
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'



const form: any = reactive({
    nama: '',
    nik: '',
    paspor: '',
    tanggalLahir: null,
    jenisKelamin: '',
    telepon: '',
    teleponDarurat: '',
    alamat: '',
    kota: '',
    provinsi: '',
    golonganDarah: '',
    status: 'Terdaftar',
    kloter: '',
    rombongan: '',
    riwayatPenyakit: '',
    catatan: ''
});

const items = ref<SelectMenuItem[]>([
    {
        label: 'Pilih',
        id: ''
    },
    {
        label: 'Laki-laki',
        id: 'lakilaki'
    },
    {
        label: 'Perempuan',
        id: 'perempuan'
    },

])

const dataGolonganDarah = ref(['A', 'B', 'AB', 'O']);
const dataRombongan = ref(['Rombongan 1', 'Rombongan 2']);
const dataKloter = ref(['Kloter 1', 'Kloter 2'])
const statuses = ref(['Dokumen Lengkap', 'Siap Berangkat', 'Di Mekah', 'Di Madinah', 'Pulang', 'Selesai'])


async function onSubmit(event: FormSubmitEvent<any>) {
    console.log(event.data)
};

const df = new DateFormatter('en-US', {
    dateStyle: 'medium'
})

</script>

<style scoped></style>