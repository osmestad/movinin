import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    RESET_PASSWORD_HEADING: 'Réinitialisation du mot de passe',
    RESET_PASSWORD: 'Veuillez saisir votre adresse e-mail afin de vous envoyer un e-mail pour réinitialiser votre mot de passe.',
    EMAIL_ERROR: 'Adresse e-mail non enregistrée',
    RESET: 'Réinitialiser',
    EMAIL_SENT: 'E-mail de réinitialisation du mot de passe envoyé.',
  },
  en: {
    RESET_PASSWORD_HEADING: 'Password Reset',
    RESET_PASSWORD: 'Please enter your email address so we can send you an email to reset your password.',
    EMAIL_ERROR: 'Email address not registered',
    RESET: 'Reset',
    EMAIL_SENT: 'Password reset email sent.',
  },
  no: {
    RESET_PASSWORD_HEADING: 'Tilbakestilling av passord',
    RESET_PASSWORD: 'Vennligst skriv inn e-postadressen din slik at vi kan sende deg en e-post for å tilbakestille passord.',
    EMAIL_ERROR: 'E-postadresse ikke registrert',
    RESET: 'Tilbakestill',
    EMAIL_SENT: 'E-post for tilbakestilling av passord sendt.',
  },
})

langHelper.setLanguage(strings)
export { strings }
