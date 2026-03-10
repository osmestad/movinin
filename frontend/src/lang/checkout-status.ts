import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'
import env from '@/config/env.config'

const strings = new LocalizedStrings({
  fr: {
    CONGRATULATIONS: 'Félicitation!',
    SUCCESS: 'Votre paiement a été effectué avec succès. Nous vous avons envoyé un e-mail de confirmation.',
    SUCCESS_PAY_LATER: 'Votre réservation a été effectuée avec succès. Nous vous avons envoyé un e-mail de confirmation.',
    ERROR: 'Something went wrong! Try again later',
    STATUS_TITLE: `${env.WEBSITE_NAME} Confirmation de réservation`,
    STATUS_MESSAGE: "Vérifiez votre boîte mail et suivez les étapes décrites dans l'e-mail de confirmation de la réservation pour réserver votre propriété. Vous trouverez l'adresse de la propriété et le lien Google Maps dans l'e-mail de confirmation.",
  },
  en: {
    CONGRATULATIONS: 'Congratulations!',
    SUCCESS: 'Your payment was successfully done. We sent you a confirmation email.',
    SUCCESS_PAY_LATER: 'Your booking was successfully done. We sent you a confirmation email.',
    ERROR: 'Something went wrong! Try again later',
    STATUS_TITLE: `${env.WEBSITE_NAME} Booking Confirmation`,
    STATUS_MESSAGE: 'Check your mailbox and follow the steps described in the booking confirmation email to book your property. You will find property address and Google Maps link in the confirmation email.',
  },
  no: {
    CONGRATULATIONS: 'Gratulerer!',
    SUCCESS: 'Betalingen din ble gjennomført. Vi sendte deg en bekreftelses-e-post.',
    SUCCESS_PAY_LATER: 'Din reservasjon ble gjennomført. Vi sendte deg en bekreftelses-e-post.',
    ERROR: 'Noe gikk galt! Prøv igjen senere',
    STATUS_TITLE: `${env.WEBSITE_NAME} Reservasjonsbekreftelse`,
    STATUS_MESSAGE: 'Sjekk postboksen din og følg trinnene beskrevet i reservasjonsbekreftelses-e-posten for å reservere eiendommen din. Du vil finne eiendomsadressen og Google Maps-lenken i bekreftelses-e-posten.',
  },
})

langHelper.setLanguage(strings)
export { strings }
