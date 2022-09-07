import transform from 'lodash/transform'
import camelCase from 'lodash/camelCase'
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'

const camelizeObj = (obj: any) =>
  transform(obj, (acc: any, value, key: any, target) => {
    const camelKey = isArray(target) ? key : camelCase(key)

    acc[camelKey] = isObject(value) ? camelizeObj(value) : value
  })

export const camelize = (data: any) => {
  if (Array.isArray(data)) {
    return data.map((item) => camelizeObj(item))
  }

  return camelizeObj(data)
}
