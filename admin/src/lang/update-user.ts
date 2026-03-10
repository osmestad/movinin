import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    UPDATE_USER_HEADING: "Modification de l'utilisateur",
  },
  en: {
    UPDATE_USER_HEADING: 'User update',
  },
  no: {
    UPDATE_USER_HEADING: 'Brukeroppdatering',
  },
})

langHelper.setLanguage(strings)
export { strings }
