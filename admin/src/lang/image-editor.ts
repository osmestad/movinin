import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
    fr: {
        ADD_IMAGE: 'Ajouter une image principale',
        ADD_IMAGES: 'Ajouter des images supplémentaires',
        UPDATE_IMAGE: "Modifier l'image principale",
        DELETE_IMAGE: 'Êtes-vous sûr de vouloir supprimer cette image ?',
    },
    en: {
        ADD_IMAGE: 'Add main image',
        ADD_IMAGES: 'Add additional images',
        UPDATE_IMAGE: 'Update main image',
        DELETE_IMAGE: 'Are you sure you want to delete this image?',
    },
    no: {
        ADD_IMAGE: 'Legg til hovedbilde',
        ADD_IMAGES: 'Legg til flere bilder',
        UPDATE_IMAGE: 'Oppdater hovedbilde',
        DELETE_IMAGE: 'Er du sikker på at du vil slette dette bildet?',
    }
})

langHelper.setLanguage(strings)
export { strings }
