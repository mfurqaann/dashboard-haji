<template>
    <div class="overflow-auto max-w-2xl">
        <UForm :state="form" class="space-y-4" @submit="onSubmit">
            <div class="grid grid-cols-2 gap-4">
                <UFormField label="Jamaah" name="jamaah" class="col-span-2">
                    <USelectMenu v-model="form.jamaah" :items="dataJamaah" placeholder="Pilih Jamaah" class="w-full" />
                </UFormField>
                <UFormField label="Kloter" name="kloter" class="col-span-2">
                    <USelectMenu v-model="form.kloter" :items="dataKloter" placeholder="Pilih Kloter" class="w-full" />
                </UFormField>
                <UFormField label="Kode Booking" name="kodeBooking">
                    <UInput v-model="form.kodeBooking" class="w-full" />
                </UFormField>
                <UFormField label="Nomor Tiket" name="nomorTiket">
                    <UInput v-model="form.nomorTiket" class="w-full" />
                </UFormField>   
                <UFormField label="Jenis" name="jenis">
                    <USelectMenu v-model="form.jenis" :items="dataJenis" class="w-full" />
                </UFormField>
                <UFormField label="Kursi" name="kursi">
                    <UInput v-model="form.kursi" placeholder="12A" class="w-full" />
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
import { DateFormatter } from '@internationalized/date'

const form: any = reactive({
    jamaah: '',
    kloter: '',
    kodeBooking: '',
    nomorTiket: '',
    jenis: 'Berangkat',
    kursi: '',
    status: 'Pending',
    catatan: ''
});

const statuses = ref(['Pending', 'Confirmed', 'Checked-in', 'Boarded', 'Completed', 'Cancelled']);

const dataJamaah = ref(['Siti Fatimah', 'Nurul Hidayah']);
const dataKloter = ref(['KLT-0500', 'KLT-0501']);
const dataJenis = ref(['Berangkat', 'Pulang']);

async function onSubmit(event: FormSubmitEvent<any>) {
    console.log(event.data)
};
</script>

<style scoped>

</style>