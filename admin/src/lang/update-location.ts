import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    UPDATE_LOCATION: 'Modification du lieu',
    LOCATION_UPDATED: 'Lieu modifié avec succès.',
  },
  en: {
    UPDATE_LOCATION: 'Location update',
    LOCATION_UPDATED: 'Location updated successfully.',
  },
  no: {
    UPDATE_LOCATION: 'Lokasjonoppdatering',
    LOCATION_UPDATED: 'Lokasjon oppdatert successfully.',
  },
})

langHelper.setLanguage(strings)
export { strings }
