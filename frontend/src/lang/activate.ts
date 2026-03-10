import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    ACTIVATE_HEADING: 'Activation du compte',
    TOKEN_EXPIRED: "Votre lien d'activation du compte a expiré.",
    ACTIVATE: 'Activer',
  },
  en: {
    ACTIVATE_HEADING: 'Account Activation',
    TOKEN_EXPIRED: 'Your account activation link expired.',
    ACTIVATE: 'Activate',
  },
  no: {
    ACTIVATE_HEADING: 'Kontoaktivering',
    TOKEN_EXPIRED: 'Din kontoaktiveringslenke er utløpt.',
    ACTIVATE: 'Aktiver',
  },
})

langHelper.setLanguage(strings)
export { strings }
