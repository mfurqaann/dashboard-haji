export const STATUS_UI: any = {
  MADINAH: { label: 'Di Madinah', roundedColor: 'bg-emerald-500', statusColor: 'bg-teal-50 text-teal-700' },
  MAKKAH: { label: 'Di Makkah', roundedColor: 'bg-emerald-500', statusColor: 'bg-teal-50 text-teal-700' },
  PERJALANAN: { label: 'Dalam Perjalanan', roundedColor: 'bg-amber-500', statusColor: 'bg-amber-50 text-amber-700' },
  TIBA: { label: 'Telah Tiba', roundedColor: 'bg-slate-300', statusColor: 'bg-blue-50 text-blue-700' },
}

export const mapJamaahUI = (jamaah: any) => ({
  ...jamaah,
  status: STATUS_UI[jamaah.status]?.label ?? jamaah.status,
  roundedColor: STATUS_UI[jamaah.status]?.roundedColor,
  statusColor: STATUS_UI[jamaah.status]?.statusColor
})
