import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    SIGN_UP_HEADING: 'Inscription',
    TOS_SIGN_UP: "J'ai lu et j'accepte les conditions générales d'utilisation.",
    SIGN_UP: "S'inscrire",
    RECAPTCHA_ERROR: 'Veuillez remplir le captcha pour continuer.',
    SIGN_UP_ERROR: "Une erreur s'est produite lors de l'inscription.",
  },
  en: {
    SIGN_UP_HEADING: 'Sign up',
    TOS_SIGN_UP: 'I read and agree with the Terms of Use.',
    SIGN_UP: 'Sign up',
    RECAPTCHA_ERROR: 'Fill out the captcha to continue.',
    SIGN_UP_ERROR: 'An error occurred during sign up.',
  },
  no: {
    SIGN_UP_HEADING: 'Registrer',
    TOS_SIGN_UP: 'Jeg har lest og godtar vilkårene for bruk.',
    SIGN_UP: 'Registrer',
    RECAPTCHA_ERROR: 'Fyll ut captcha for å fortsette.',
    SIGN_UP_ERROR: 'En feil oppstod under registrering.',
  },
})

langHelper.setLanguage(strings)
export { strings }
