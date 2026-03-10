  import LocalizedStrings from 'localized-strings'
  import * as langHelper from '@/utils/langHelper'

  const strings = new LocalizedStrings({
    fr: {
      SIGN_IN: 'Se connecter',
      HOME: 'Accueil',
      BOOKINGS: 'Réservations',
      ABOUT: 'À propos',
      TOS: "Conditions d'utilisation",
      CONTACT: 'Contact',
      LANGUAGE: 'Langue',
      SETTINGS: 'Paramètres',
      SIGN_OUT: 'Déconnexion',
      AGENCIES: 'Agences',
      LOCATIONS: 'Destinations',
      PRIVACY_POLICY: 'Politique de Confidentialité',
      COOKIE_POLICY: 'Politique de cookies',
    },
    en: {
      SIGN_IN: 'Sign in',
      HOME: 'Home',
      BOOKINGS: 'Bookings',
      ABOUT: 'About',
      TOS: 'Terms of Service',
      CONTACT: 'Contact',
      LANGUAGE: 'Language',
      SETTINGS: 'Settings',
      SIGN_OUT: 'Sign out',
      AGENCIES: 'Agencies',
      LOCATIONS: 'Destinations',
      PRIVACY_POLICY: 'Privacy Policy',
      COOKIE_POLICY: 'Cookie Policy',
    },
    no: {
      SIGN_IN: 'Logg inn',
      HOME: 'Hjem',
      BOOKINGS: 'Reservasjoner',
      ABOUT: 'Om',
      TOS: 'Vilkår for bruk',
      CONTACT: 'Kontakt',
      LANGUAGE: 'Språk',
      SETTINGS: 'Innstillinger',
      SIGN_OUT: 'Logg ut',
      AGENCIES: 'Byråer',
      LOCATIONS: 'Destinasjoner',
      PRIVACY_POLICY: 'Personvernpolicy',
      COOKIE_POLICY: 'Informasjonskapselpolicy',
    },
  })

  langHelper.setLanguage(strings)
  export { strings }
