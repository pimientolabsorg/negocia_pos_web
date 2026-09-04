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

export const apkUrl = 'https://loadly.io/Yzyxv7ML'

export const devUrl = 'https://pimientolabs.vercel.app/'

export const instagramUrl =
  'https://www.instagram.com/pimientolabs?igsh=MWhyNWxhYjIyaGZmMQ=='

export const facebookUrl = 'https://www.facebook.com/share/1KAKrJFCMA/'

export const whatsappChannelUrl =
  'https://whatsapp.com/channel/0029VbDeKmDDuMRdXdEBrJ2j'

export const features: Feature[] = [
  { number: '01', title: 'Ventas' },
  { number: '02', title: 'Inventario' },
  { number: '03', title: 'IPV' },
  { number: '04', title: 'Reportes' },
]
