import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    PROPERTY: 'Propriété',
    AGENCY: 'Agence',
    PRICE: 'Prix',
    STATUS: 'Statut',
    EMPTY_LIST: 'Pas de réservations.',
    VIEW: 'Voir cette réservation',
    DAYS: 'Jours',
    COST: 'Total',
    CANCEL: 'Annuler cette réservation',
    CANCEL_BOOKING: 'Êtes-vous sûr de vouloir annuler cette réservation ?',
    CANCEL_BOOKING_REQUEST_SENT: "Votre requête d'annulation a bien été prise en compte. Nous vous contacterons pour finaliser la procédure d'annulation.",
  },
  en: {
    PROPERTY: 'Property',
    AGENCY: 'Agency',
    PRICE: 'Price',
    STATUS: 'Status',
    EMPTY_LIST: 'No bookings.',
    VIEW: 'View this booking',
    DAYS: 'Days',
    COST: 'COST',
    CANCEL: 'Cancel this booking',
    CANCEL_BOOKING: 'Are you sure you want to cancel this booking?',
    CANCEL_BOOKING_REQUEST_SENT: 'Your cancel request has been submited. We will contact you to finalize the cancellation procedure.',
  },
  no: {
    PROPERTY: 'Eiendom',
    AGENCY: 'Byrå',
    PRICE: 'Pris',
    STATUS: 'Status',
    EMPTY_LIST: 'Ingen reservasjoner.',
    VIEW: 'Se denne reservasjonen',
    DAYS: 'Dager',
    COST: 'KOSTNADER',
    CANCEL: 'Avbryt denne reservasjonen',
    CANCEL_BOOKING: 'Er du sikker på at du vil avbryte denne reservasjonen?',
    CANCEL_BOOKING_REQUEST_SENT: 'Din avbrytelsesforespørsel er mottatt. Vi vil kontakte deg for å fullføre avbrytelsen.',
  },
})

langHelper.setLanguage(strings)
export { strings }
