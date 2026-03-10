import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  fr: {
    EMPTY_LIST: 'Pas de notifications',
    VIEW: 'Consulter',
    MARK_AS_READ: 'Marquer comme lu',
    MARK_AS_UNREAD: 'Marquer comme non lu',
    MARK_ALL_AS_READ: 'Tout marquer comme lu',
    MARK_ALL_AS_UNREAD: 'Tout marquer comme non lu',
    DELETE_ALL: 'Tout supprimer',
    DELETE_NOTIFICATION: 'Êtes-vous sûr de vouloir supprimer cette notification ?',
    DELETE_NOTIFICATIONS: 'Êtes-vous sûr de vouloir supprimer ces notifications ?',
  },
  en: {
    EMPTY_LIST: 'No notifications',
    VIEW: 'View',
    MARK_AS_READ: 'Mark as read',
    MARK_AS_UNREAD: 'Mark as unread',
    MARK_ALL_AS_READ: 'Mark all as read',
    MARK_ALL_AS_UNREAD: 'Mark all as unread',
    DELETE_ALL: 'Delete all',
    DELETE_NOTIFICATION: 'Are you sure you want to delete this notification?',
    DELETE_NOTIFICATIONS: 'Are you sure you want to delete these notifications?',
  },
  no: {
    EMPTY_LIST: 'Ingen varslinger',
    VIEW: 'Vis',
    MARK_AS_READ: 'Merk som lest',
    MARK_AS_UNREAD: 'Merk som ulest',
    MARK_ALL_AS_READ: 'Merk alt som lest',
    MARK_ALL_AS_UNREAD: 'Merk alt som ulest',
    DELETE_ALL: 'Slett alt',
    DELETE_NOTIFICATION: 'Er du sikker på at du vil slette dette varslingen?',
    DELETE_NOTIFICATIONS: 'Er du sikker på at du vil slette disse varslingene?',
  },
})

langHelper.setLanguage(strings)
export { strings }
