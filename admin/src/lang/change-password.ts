import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    CHANGE_PASSWORD_HEADING: 'Modification du mot de passe',
    CURRENT_PASSWORD: 'Mot de passe actuel',
    YOUR_PASSWORD: 'Votre mot de passe',
    CURRENT_PASSWORD_ERROR: 'Mauvais mot de passe',
    NEW_PASSWORD: 'Nouveau mot de passe',
    NEW_PASSWORD_ERROR: 'Veuillez choisir un nouveau mot de passe',
    PASSWORD_UPDATE_ERROR: "Une erreur s'est produite lors de la modification du mot de passe.",
    PASSWORD_UPDATE: 'Le mot de passe a été mofifié avec succès.',
  },
  en: {
    CHANGE_PASSWORD_HEADING: 'Password Modification',
    CURRENT_PASSWORD: 'Current Password',
    YOUR_PASSWORD: 'Your password',
    CURRENT_PASSWORD_ERROR: 'Wrong password',
    NEW_PASSWORD: 'New Password',
    NEW_PASSWORD_ERROR: 'Please choose a new password',
    PASSWORD_UPDATE_ERROR: 'An error occurred while updating password.',
    PASSWORD_UPDATE: 'Password changed successfully.',
  },
  no: {
    CHANGE_PASSWORD_HEADING: 'Passordendring',
    CURRENT_PASSWORD: 'Gjeldende Passord',
    YOUR_PASSWORD: 'Ditt passord',
    CURRENT_PASSWORD_ERROR: 'Feil passord',
    NEW_PASSWORD: 'Nytt Passord',
    NEW_PASSWORD_ERROR: 'Vennligst velg et nytt passord',
    PASSWORD_UPDATE_ERROR: 'En feil oppstod under passordoppdatering.',
    PASSWORD_UPDATE: 'Passord endret successfully.',
  },
})

langHelper.setLanguage(strings)
export { strings }
