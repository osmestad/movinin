import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    SELECT_LOCATION: 'Choisir cette destination',
    AVALIABLE_LOCATION: 'lieu disponible',
    AVALIABLE_LOCATIONS: 'lieux disponibles',
  },
  en: {
    SELECT_LOCATION: 'Select Destination',
    AVALIABLE_LOCATION: 'available location',
    AVALIABLE_LOCATIONS: 'available locations',
  },
  no: {
    SELECT_LOCATION: 'Velg destinasjon',
    AVALIABLE_LOCATION: 'tilgjengelig lokasjon',
    AVALIABLE_LOCATIONS: 'tilgjengelige lokasjoner',
  },
})

langHelper.setLanguage(strings)
export { strings }
