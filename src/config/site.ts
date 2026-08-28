export interface Feature {
  number: string
  title: string
}

export const brand = 'negocia_'
export const brandAccent = 'pos'

/**
 * Reemplaza TU_NUMERO por tu número con código de país (sin "+").
 * Ej.: Cuba → 5355820905
 */
export const whatsappNumber = '5355820905'
export const whatsappUrl = `https://wa.me/${whatsappNumber}`

export const apkUrl = 'negocia_pos.apk'

export const features: Feature[] = [
  { number: '01', title: 'Ventas' },
  { number: '02', title: 'Inventario' },
  { number: '03', title: 'IPV' },
  { number: '04', title: 'Reportes' },
]
