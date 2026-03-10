import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    REQUIRED_FIELD: 'Veuillez renseigner le champ : ',
    REQUIRED_FIELDS: 'Veuillez renseigner les champs : ',
  },
  en: {
    REQUIRED_FIELD: 'Please fill in the field: ',
    REQUIRED_FIELDS: 'Please fill in the fields: ',
  },
  no: {
    REQUIRED_FIELD: 'Vennligst fyll inn feltet: ',
    REQUIRED_FIELDS: 'Vennligst fyll inn feltene: ',
  },
})

langHelper.setLanguage(strings)
export { strings }
