import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    NEW_BOOKING: 'Nouvelle réservation',
  },
  en: {
    NEW_BOOKING: 'New Booking',
  },
  no: {
    NEW_BOOKING: 'Ny Reservasjon',
  },
})

langHelper.setLanguage(strings)
export { strings }
