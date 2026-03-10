import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    CREATE_USER_HEADING: 'Nouvelle utilisateur',
    BIRTH_DATE: 'Date de naissance',
  },
  en: {
    CREATE_USER_HEADING: 'New user',
    BIRTH_DATE: 'Birth date',
  },
  no: {
    CREATE_USER_HEADING: 'Ny bruker',
    BIRTH_DATE: 'Fødselsdato',
  },
})

langHelper.setLanguage(strings)
export { strings }
