import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    DELETE_USER: 'Êtes-vous sûr de vouloir supprimer cet utilisateur et toutes ses données ?',
    DELETE_USERS: 'Êtes-vous sûr de vouloir supprimer les utilisateurs sélectionnés et toutes leurs données ?',
    DELETE_SELECTION: 'Supprimer les utilisateurs sélectionnés',
    BLACKLIST: 'Ajouter à la liste noire',
  },
  en: {
    DELETE_USER: 'Are you sure you want to delete this user and all his data?',
    DELETE_USERS: 'Are you sure you want to delete the selected users and all their data?',
    DELETE_SELECTION: 'Delete selectied users',
    BLACKLIST: 'Add to the blacklist',
  },
  no: {
    DELETE_USER: 'Er du sikker på at du vil slette denne brukeren og all hans data?',
    DELETE_USERS: 'Er du sikker på at du vil slette de valgte brukerne og all deres data?',
    DELETE_SELECTION: 'Slett valgte brukere',
    BLACKLIST: 'Legg til på svartelisten',
  },
})

langHelper.setLanguage(strings)
export { strings }
