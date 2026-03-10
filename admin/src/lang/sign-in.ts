import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    SIGN_IN_HEADING: 'Connexion',
    SIGN_IN: 'Se connecter',
    ERROR_IN_SIGN_IN: 'E-mail ou mot de passe incorrect.',
    IS_BLACKLISTED: 'Votre compte est suspendu.',
    RESET_PASSWORD: 'Mot de passe oublié ?',
    STAY_CONNECTED: 'Rester connecté',
  },
  en: {
    SIGN_IN_HEADING: 'Sign in',
    SIGN_IN: 'Sign in',
    ERROR_IN_SIGN_IN: 'Incorrect email or password.',
    IS_BLACKLISTED: 'Your account is suspended.',
    RESET_PASSWORD: 'Forgot password?',
    STAY_CONNECTED: 'Stay connected',
  },
  no: {
    SIGN_IN_HEADING: 'Logg inn',
    SIGN_IN: 'Logg inn',
    ERROR_IN_SIGN_IN: 'Feil e-post eller passord.',
    IS_BLACKLISTED: 'Kontoen din er suspendert.',
    RESET_PASSWORD: 'Glemt passord?',
    STAY_CONNECTED: 'Bli koblet til',
  },
})

langHelper.setLanguage(strings)
export { strings }
