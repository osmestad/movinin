import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    NEW_BOOKING_HEADING: 'Nouvelle réservation',
  },
  en: {
    NEW_BOOKING_HEADING: 'New booking',
  },
  no: {
    NEW_BOOKING_HEADING: 'Ny reservasjon',
  },
})

langHelper.setLanguage(strings)
export { strings }
