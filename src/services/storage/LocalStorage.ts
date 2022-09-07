import { safeWindow } from 'utils/safeWindow'

let isSupport: boolean

export const isLocalStorageSupported = () => {
  if (isSupport === undefined) {
    const testKey = 'testKey'
    const testValue = 'testValue'

    try {
      localStorage.setItem(testKey, testValue)
      localStorage.removeItem(testKey)
      isSupport = true
    } catch (e) {
      isSupport = false
    }
  }

  return isSupport
}

interface IStorage {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
}

export default class LocalStorage {
  private readonly storage: IStorage

  public constructor(getStorage = (): IStorage => safeWindow.localStorage) {
    this.storage = getStorage()
  }

  setItem(key: string, value: any) {
    this.storage.setItem(key, value)
  }

  getItem(key: string) {
    return this.storage.getItem(key)
  }

  setObject(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getObject(key: string) {
    return JSON.parse(this.storage.getItem(key) || '{}')
  }

  removeItem(key: string) {
    this.storage.removeItem(key)
  }

  isItemExists(key: string) {
    return !!this.storage.getItem(key)
  }
}
