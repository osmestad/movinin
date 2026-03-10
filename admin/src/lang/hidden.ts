import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
    fr: {
        HIDDEN: 'Cachée',
        HIDDEN_INFO: 'Cette propriété est cachée.',
    },
    en: {
        HIDDEN: 'Hidden',
        HIDDEN_INFO: 'This property is hidden.',
    },
    no: {
        HIDDEN: 'Skjult',
        HIDDEN_INFO: 'Denne eiendommen er skjult.',
    }
})

langHelper.setLanguage(strings)
export { strings }
