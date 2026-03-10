import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    VALIDATE_EMAIL: "Un e-mail de validation a été envoyé à votre adresse e-mail. Veuillez vérifier votre boîte aux lettres et valider votre compte en cliquant sur le lien dans l'e-mail. Il expirera au bout d'un jour. Si vous n'avez pas reçu d'e-mail de validation, cliquez sur renvoyer.",
    RESEND: 'Renvoyer',
    VALIDATION_EMAIL_SENT: 'E-mail de validation envoyé.',
    VALIDATION_EMAIL_ERROR: "Une erreur s'est produite lors de l'envoi de l'e-mail de validation.",
  },
  en: {
    VALIDATE_EMAIL: "A validation email has been sent to your email address. Please check your mailbox and validate your account by clicking the link in the email. It will be expire after one day. If you didn't receive the validation email click on resend.",
    RESEND: 'Resend',
    VALIDATION_EMAIL_SENT: 'Validation email sent.',
    VALIDATION_EMAIL_ERROR: 'An error occurred while sending validation email.',
  },
  no: {
    VALIDATE_EMAIL: 'En valideringse-post har blitt sendt til e-postadressen din. Vennligst sjekk postboksen din og valider kontoen din ved å klikke på lenken i e-posten. Den vil utløpe etter en dag. Hvis du ikke mottok valideringse-posten, klikk på send på nytt.',
    RESEND: 'Send på nytt',
    VALIDATION_EMAIL_SENT: 'Valideringse-post sendt.',
    VALIDATION_EMAIL_ERROR: 'En feil oppstod ved sending av valideringse-post.',
  },
})

langHelper.setLanguage(strings)
export { strings }
