<template>
    <div class="overflow-auto">
        <UForm :state="form" class="space-y-4" @submit="onSubmit">
            <div class="grid grid-cols-2 gap-4">
                <UFormField label="Jenis Dokumen" name="jenisDokumen" class="col-span-2">
                    <UInput v-model="form.jenisDokumen" class="w-full" placeholder="Pilih jenis dokumen" />
                </UFormField>
                <UFormField label="Upload File (PDF, JPG, PNG - Max 10MB)" name="uploadFile" class="col-span-2">
                    <UFileUpload v-model="form.uploadFile" class="w-96 min-h-48" label="Klik untuk upload atau drag and drop" description="PDF, JPG, PNG (Max 10MB)"
                        size="xl"
                    />
                </UFormField>
                <UFormField label="Nomor Dokumen" name="nomorDokumen">
                    <UInput v-model="form.nomorDokumen" class="w-full" placeholder="Otomatis terisi dari AI" />
                </UFormField>
                <UFormField label="Tanggal Terbit" name="tanggalTerbit">
                    <UPopover>
                        <UButton color="neutral" variant="subtle" icon="i-lucide-calendar" class="w-full">
                            {{ form.tanggalTerbit ? df.format(form.tanggalTerbit.toDate(getLocalTimeZone())) : 'Select a date' }}
                        </UButton>

                        <template #content>
                            <UCalendar v-model="form.tanggalTerbit" class="p-2" />
                        </template>
                    </UPopover>
                </UFormField>
                <UFormField label="Tanggal Kadaluarsa" name="tanggalKadaluarsa" class="col-span-2">
                    <UPopover>
                        <UButton color="neutral" variant="subtle" icon="i-lucide-calendar" class="w-full">
                            {{ form.tanggalKadaluarsa ? df.format(form.tanggalKadaluarsa.toDate(getLocalTimeZone())) : 'Select a date' }}
                        </UButton>

                        <template #content>
                            <UCalendar v-model="form.tanggalKadaluarsa" class="p-2" />
                        </template>
                    </UPopover>
                </UFormField>
                <UButton color="neutral" variant="outline" class="justify-center">
                    Batal
                </UButton>
                <UButton type="submit" class="justify-center bg-emerald-600">
                    Upload & Validasi
                </UButton>
            </div>
        </UForm>
    </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';
import { DateFormatter, getLocalTimeZone } from '@internationalized/date'



const form: any = reactive({
    jenisDokumen : '',
    uploadFile: '',
    nomorDokumen: '',
    tanggalTerbit: '',
    tanggalKadaluarsa: '',
});

async function onSubmit(event: FormSubmitEvent<any>) {
    console.log(event.data)
};

const df = new DateFormatter('en-US', {
    dateStyle: 'medium'
})

</script>

<style scoped></style>