<template>
    <div class="p-6 overflow-auto max-w-2xl">
        <div class="flex flex-col space-y-2 text-center sm:text-left">
            <h2 class="text-lg font-semibold text-foreground">
                Tambah Kloter Baru
            </h2>
            <p class="text-sm text-muted-foreground">
                Isi data kloter baru
            </p>
        </div>
        <UForm :state="form" class="space-y-4 mt-6" @submit="onSubmit">
            <div class="grid grid-cols-2 gap-4">
                <UFormField label="Nama/Kode Kloter" name="nama" class="col-span-2">
                    <UInput v-model="form.nama" class="w-full" />
                </UFormField>
                <UFormField label="Tanggal Berangkat" name="tanggalBerangkat">
                    <UPopover>
                        <UButton color="neutral" variant="subtle" icon="i-lucide-calendar" class="w-full">
                            {{ form.tanggalBerangkat ? df.format(form.tanggalBerangkat.toDate(getLocalTimeZone())) : 'Select a date' }}
                        </UButton>

                        <template #content>
                            <UCalendar v-model="form.tanggalBerangkat" class="p-2" />
                        </template>
                    </UPopover>
                </UFormField>
                <UFormField label="Tanggal Pulang" name="tanggalPulang">
                    <UPopover>
                        <UButton color="neutral" variant="subtle" icon="i-lucide-calendar" class="w-full">
                            {{ form.tanggalTujuan ? df.format(form.tanggalTujuan.toDate(getLocalTimeZone())) : 'Select a date' }}
                        </UButton>

                        <template #content>
                            <UCalendar v-model="form.tanggalTujuan" class="p-2" />
                        </template>
                    </UPopover>
                </UFormField>
                <UFormField label="Maskapai" name="maskapai">
                    <UInput v-model="form.maskapai" placeholder="Garuda Indonesia" class="w-full" />
                </UFormField>
                <UFormField label="Kapasitas" name="kapasitas">
                    <UInputNumber v-model="form.kapasitas" placeholder="450" class="w-full" />
                </UFormField>
                <UFormField label="No. Penerbangan Berangkat" name="nomorPenerbanganBerangkat">
                    <UInput v-model="form.nomorPenerbanganBerangkat" placeholder="GA-401" class="w-full" />
                </UFormField>
                <UFormField label="No. Penerbangan Pulang" name="nomorPenerbanganPulang">
                    <UInput v-model="form.nomorPenerbanganPulang" placeholder="GA-402" class="w-full" />
                </UFormField>
                <UFormField label="Bandara Asal" name="bandaraAsal">
                    <UInput v-model="form.bandaraAsal" placeholder="Soekarno-Hatta" class="w-full" />
                </UFormField>
                <UFormField label="Bandara Tujuan" name="bandaraTujuan">
                    <UInput v-model="form.bandaraTujuan" placeholder="King Abdulaziz" class="w-full" />
                </UFormField>
                <UFormField label="Jam Berangkat" name="jamBerangkat">
                    <UInputTime :hour-cycle="24" v-model="form.jamBerangkat" class="w-full" />
                </UFormField>
                <UFormField label="Jam Tiba" name="jamTiba">
                    <UInputTime :hour-cycle="24" v-model="form.jamTiba" class="w-full" />
                </UFormField>
                <UFormField label="Hotel Mekah" name="hotelMekah">
                    <UInput v-model="form.hotelMekah" class="w-full" />
                </UFormField>
                <UFormField label="Hotel Madinah" name="hotelMadinah">
                    <UInput v-model="form.hotelMadinah" class="w-full" />
                </UFormField>
                <UFormField label="Ketua Kloter" name="ketuaKloter">
                    <UInput v-model="form.ketuaKloter" class="w-full" />
                </UFormField>
                <UFormField label="No. Telepon Ketua" name="nomorTeleponKetua">
                    <UInput v-model="form.nomorTeleponKetua" class="w-full" />
                </UFormField>
                <UFormField label="Status" name="status" class="col-span-2">
                    <USelectMenu v-model="form.status" :items="statuses" class="w-full" />
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
import { DateFormatter, getLocalTimeZone, Time } from '@internationalized/date'

const form: any = reactive({
    kode: '',
    tanggalBerangkat: null,
    tanggalPulang: null,
    tanggalLahir: null,
    maskapai: '',
    kapasitas: '',
    nomorPenerbanganBerangkat: '',
    nomorPenerbanganPulang: '',
    bandaraAsal: '',
    bandaraTujuan: '',
    jamBerangkat: shallowRef(new Time(12, 30, 0)),
    jamTiba: shallowRef(new Time(12, 30, 0)),
    hotelMekah: '',
    hotelMadinah: '',
    ketuaKloter: '',
    nomorTeleponKetua: '',
    status: 'Persiapan', 
    catatan: ''
});

const statuses = ref(['Persiapan', 'Siap Berangkat', 'Dalam Perjalanan', 'Di Tanah Suci', 'Pulang', 'Selesai'])

const df = new DateFormatter('en-US', {
    dateStyle: 'medium'
})

async function onSubmit(event: FormSubmitEvent<any>) {
    console.log(event.data)
};

</script>

<style scoped>

</style>