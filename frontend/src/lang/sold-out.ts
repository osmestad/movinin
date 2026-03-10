import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
    fr: {
        SOLD_OUT: 'Rupture',
        SOLD_OUT_INFO: 'Cette propriété est en rupture.',
    },
    en: {
        SOLD_OUT: 'Sold out',
        SOLD_OUT_INFO: 'This property is sold out.',
    },
    no: {
        SOLD_OUT: 'Utsolgt',
        SOLD_OUT_INFO: 'Denne eiendommen er utsolgt.',
    }
})

langHelper.setLanguage(strings)
export { strings }
