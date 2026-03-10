import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    UNAUTHORIZED: 'Accès non autorisé',
  },
  en: {
    UNAUTHORIZED: 'Unauthorized access',
  },
  no: {
    UNAUTHORIZED: 'Uautorisert tilgang',
  },
})

langHelper.setLanguage(strings)
export { strings }
