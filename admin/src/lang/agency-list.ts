import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    EMPTY_LIST: 'Aucune agence.',
    VIEW_AGENCY: 'Voir le profil de cette agence',
    DELETE_AGENCY: 'Êtes-vous sûr de vouloir supprimer cette agence et toutes ses données ?',
  },
  en: {
    EMPTY_LIST: 'No agencies.',
    VIEW_AGENCY: 'View agency profile',
    DELETE_AGENCY: 'Are you sure you want to delete this agency and all its data?',
  },
  no: {
    EMPTY_LIST: 'Ingen byråer.',
    VIEW_AGENCY: 'Vis byrå profil',
    DELETE_AGENCY: 'Er du sikker på at du vil slette dette byrået og all dets data?',
  },
})

langHelper.setLanguage(strings)
export { strings }
