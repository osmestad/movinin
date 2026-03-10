import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'
import env from '@/config/env.config'

const strings = new LocalizedStrings({
  fr: {
    TITLE: "Conditions d'utilisation",
    TOS: `
Bienvenue chez ${env.WEBSITE_NAME} ! En accédant à notre site Web et en utilisant nos services, vous acceptez de vous conformer et d'être lié par les conditions d'utilisation suivantes. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.

1. Acceptation des conditions

En accédant ou en utilisant nos services, vous confirmez avoir lu, compris et accepté ces conditions d'utilisation et notre politique de confidentialité.

2. Utilisation de nos services

Vous acceptez d'utiliser nos services uniquement à des fins légales et d'une manière qui ne porte pas atteinte aux droits, ne restreint ni n'empêche quiconque d'utiliser nos services. Cela inclut le respect de toutes les lois et réglementations applicables.

3. Réservations et paiements

Lorsque vous effectuez une réservation avec ${env.WEBSITE_NAME}, vous acceptez de fournir des informations exactes et complètes. Tous les paiements doivent être effectués via notre système de paiement sécurisé. Une fois le paiement effectué, vous recevrez une confirmation de votre réservation.

4. Politique d'annulation

Les annulations effectuées 24 heures avant la date de location peuvent donner droit à un remboursement complet. Les annulations effectuées moins de 24 heures avant la date de location peuvent entraîner des frais d'annulation. Veuillez vous référer à notre politique d'annulation pour des informations détaillées.

5. Conditions de location

Toutes les locations sont soumises à nos conditions de location, qui incluent, sans s'y limiter, les restrictions d'âge et les obligations d'assurance. Vous êtes responsable de vous assurer que vous remplissez toutes les conditions avant d'effectuer une réservation.

6. Limitation de responsabilité

${env.WEBSITE_NAME} ne sera pas responsable des dommages indirects, accessoires ou consécutifs découlant de votre utilisation de nos services. En aucun cas, notre responsabilité totale ne dépassera le montant que vous avez payé pour les services.

7. Modifications des conditions

Nous nous réservons le droit de modifier ces conditions de service à tout moment. Toute modification entrera en vigueur immédiatement après sa publication sur notre site Web. Votre utilisation continue de nos services après toute modification constitue votre acceptation des nouvelles conditions.

8. Loi applicable

Ces conditions de service seront régies et interprétées conformément aux lois. Tout litige découlant de ces conditions sera résolu devant les tribunaux.

9. Coordonnées

Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous contacter à l'adresse ${env.CONTACT_EMAIL}. Nous sommes là pour vous aider pour toute demande relative à nos services.

10. Reconnaissance

En utilisant nos services, vous reconnaissez avoir lu et compris ces conditions d'utilisation et acceptez d'être lié par elles.    
    `,
  },
  en: {
    TITLE: 'Terms of Service',
    TOS: `
Welcome to ${env.WEBSITE_NAME}! By accessing our website and using our services, you agree to comply with and be bound by the following Terms of Service. If you do not agree to these terms, please do not use our services.


1. Acceptance of Terms

By accessing or using our services, you confirm that you have read, understood, and agree to these Terms of Service and our Privacy Policy.


2. Use of Our Services

You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use of our services. This includes compliance with all applicable laws and regulations.


3. Reservations and Payments

When you make a reservation with ${env.WEBSITE_NAME}, you agree to provide accurate and complete information. All payments must be made through our secure payment system. Once payment is completed, you will receive a confirmation of your reservation.


4. Cancellation Policy

Cancellations made 24 hours before the rental date may be eligible for a full refund. Cancellations made less than 24 hours prior to the rental date may incur a cancellation fee. Please refer to our cancellation policy for detailed information.


5. Rental Conditions

All rentals are subject to our rental conditions, which include but are not limited to age restrictions and insurance obligations. You are responsible for ensuring that you meet all requirements before making a reservation.


6. Limitation of Liability

${env.WEBSITE_NAME} shall not be liable for any indirect, incidental, or consequential damages arising out of your use of our services. In no event shall our total liability exceed the amount paid by you for the services.


7. Modifications to Terms

We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services following any changes constitutes your acceptance of the new terms.


8. Governing Law

These Terms of Service shall be governed by and construed in accordance with the laws. Any disputes arising out of these terms shall be resolved in the courts.


9. Contact Information

If you have any questions regarding these Terms of Service, please contact us at ${env.CONTACT_EMAIL}. We are here to help you with any inquiries related to our services.


10. Acknowledgment

By using our services, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
    `,
  },
  no: {
    TITLE: 'Vilk\u00e5r for bruk',
    TOS: `
Velkommen til ${env.WEBSITE_NAME}! Ved \u00e5 f\u00e5 tilgang til nettstedet v\u00e5rt og bruke tjenestene v\u00e5re, samtykker du til \u00e5 overholde og v\u00e6re bundet av f\u00f8lgende vilk\u00e5r for bruk. Hvis du ikke godtar disse vilk\u00e5rene, vennligst ikke bruk tjenestene v\u00e5re.


1. Aksept av vilk\u00e5r

Ved \u00e5 f\u00e5 tilgang til eller bruke tjenestene v\u00e5re, bekrefter du at du har lest, forst\u00e5tt og godtar disse vilk\u00e5rene for bruk og personvernpolicyen v\u00e5r.


2. Bruk av tjenestene v\u00e5re

Du er enig i \u00e5 bruke tjenestene v\u00e5re kun for lovlige form\u00e5l og p\u00e5 en m\u00e5te som ikke krenkelse rettigheten til andre, begrenser eller hindrer noens bruk av tjenestene v\u00e5re. Dette inkluderer overholdelse av alle gjeldende lover og regler.


3. Reservasjoner og betalinger

N\u00e5r du foretar en reservasjon med ${env.WEBSITE_NAME}, samtykker du til \u00e5 gi n\u00f8yaktig og fullstendig informasjon. Alle betalinger m\u00e5 foretas gjennom systemet v\u00e5rt for sikker betaling. N\u00e5r betalingen er gjennomf\u00f8rt, vil du motta en bekreftelse av reservasjonen din.


4. Kanselleringspolicy

Avbestillinger som foretas 24 timer f\u00f8r utleidatoen kan v\u00e6re berettiget til full refusjon. Avbestillinger som foretas mindre enn 24 timer f\u00f8r utleidatoen kan medf\u00f8re et avbestillingsgebyr. Vennligst se kanselleringspolicyen v\u00e5r for detaljert informasjon.


5. Utleievilk\u00e5r

Alle leier er underlagt vilk\u00e5rene for leie v\u00e5re, som inkluderer, men er ikke begrenset til aldersrestrikasjoner og forsikringsforpliktelser. Du er ansvarlig for \u00e5 sikre at du oppfyller alle krav f\u00f8r du foretar en reservasjon.


6. Ansvarsbegrensning

${env.WEBSITE_NAME} skal ikke v\u00e6re ansvarlig for noen indirekte, tilfeldig eller konsekvensiell skade som oppst\u00e5r fra din bruk av tjenestene v\u00e5re. Under ingen omstendigheter skal det totale ansvaret v\u00e5rt overstige bel\u00f8pet du har betalt for tjenestene.


7. Endringer av vilk\u00e5r

Vi forbeholder oss retten til \u00e5 endre disse vilk\u00e5rene for bruk n\u00e5r som helst. Eventuelle endringer vil tre i kraft umiddelbart etter publisering p\u00e5 nettstedet v\u00e5rt. Fortsatt bruk av tjenestene v\u00e5re etter eventuelle endringer utgj\u00f8r din godkjennelse av de nye vilk\u00e5rene.


8. Gjeldende lov

Disse vilk\u00e5rene for bruk skal st\u00f8ttes og tolkes i samsvar med lovene. Eventuelle tvister som oppst\u00e5r fra disse vilk\u00e5rene skal avgj\u00f8res i domstolene.


9. Kontaktinformasjon

Hvis du har sp\u00f8rsm\u00e5l om disse vilk\u00e5rene for bruk, vennligst kontakt oss p\u00e5 ${env.CONTACT_EMAIL}. Vi er her for \u00e5 hjelpe deg med eventuelle sp\u00f8rsm\u00e5l knyttet til tjenestene v\u00e5re.


10. Anerkjennelse

Ved \u00e5 bruke tjenestene v\u00e5re, anerkjenner du at du har lest og forst\u00e5tt disse vilk\u00e5rene for bruk og samtykker til \u00e5 v\u00e6re bundet av dem.
    `,
  },
})

langHelper.setLanguage(strings)
export { strings }
