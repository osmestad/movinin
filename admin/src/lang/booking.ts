import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    TOTAL: 'Total :',
    DELETE_BOOKING: 'Êtes-vous sûr de vouloir supprimer cette réservation ?',
  },
  en: {
    TOTAL: 'Total:',
    DELETE_BOOKING: 'Are you sure you want to delete this booking?',
  },
  no: {
    TOTAL: 'Total:',
    DELETE_BOOKING: 'Er du sikker på at du vil slette denne reservasjonen?',
  },
})

langHelper.setLanguage(strings)
export { strings }
