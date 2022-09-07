import LocalStorage from './LocalStorage'
import { isServer } from 'utils/isServer'

const localStorageProvider: any = !isServer ? new LocalStorage() : {}

export { localStorageProvider }
