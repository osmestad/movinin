import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    NEW_LOCATION: 'Nouveau lieu',
    DELETE_LOCATION: 'Êtes-vous sûr de vouloir supprimer ce lieu ?',
    CANNOT_DELETE_LOCATION: 'Ce lieu ne peut pas être supprimé car il est lié à des lieux ou propriétés.',
    EMPTY_LIST: 'Pas de lieux.',
    LOCATION: 'lieu',
    LOCATIONS: 'lieux',
  },
  en: {
    NEW_LOCATION: 'New location',
    DELETE_LOCATION: 'Are you sure you want to delete this location?',
    CANNOT_DELETE_LOCATION: 'This location cannot be deleted because it is related to locations or properties.',
    EMPTY_LIST: 'No locations.',
    LOCATION: 'location',
    LOCATIONS: 'locations',
  },
  no: {
    NEW_LOCATION: 'Ny lokasjon',
    DELETE_LOCATION: 'Er du sikker på at du vil slette denne lokasjonen?',
    CANNOT_DELETE_LOCATION: 'Denne lokasjonen kan ikke slettes fordi den er relatert til lokasjoner eller eiendommer.',
    EMPTY_LIST: 'Ingen lokasjoner.',
    LOCATION: 'lokasjon',
    LOCATIONS: 'lokasjoner',
  },
})

langHelper.setLanguage(strings)
export { strings }
