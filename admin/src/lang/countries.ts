import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    NEW_COUNTRY: 'Nouveau pays',
    DELETE_COUNTRY: 'Êtes-vous sûr de vouloir supprimer ce pays ?',
    CANNOT_DELETE_COUNTRY: 'Ce pays ne peut pas être supprimé car il est lié à des lieux.',
    EMPTY_LIST: 'Pas de pays.',
    COUNTRY: 'pays',
    COUNTRIES: 'pays',
  },
  en: {
    NEW_COUNTRY: 'New country',
    DELETE_COUNTRY: 'Are you sure you want to delete this country?',
    CANNOT_DELETE_COUNTRY: 'This country cannot be deleted because it is related to locations.',
    EMPTY_LIST: 'No countries.',
    COUNTRY: 'country',
    COUNTRIES: 'countries',
  },
  no: {
    NEW_COUNTRY: 'Nytt land',
    DELETE_COUNTRY: 'Er du sikker på at du vil slette dette landet?',
    CANNOT_DELETE_COUNTRY: 'Dette landet kan ikke slettes fordi det er relatert til lokasjoner.',
    EMPTY_LIST: 'Ingen land.',
    COUNTRY: 'land',
    COUNTRIES: 'land',
  },
})

langHelper.setLanguage(strings)
export { strings }
