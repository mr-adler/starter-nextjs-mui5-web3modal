import BigNumber from 'bignumber.js'
import { addMinutes, format } from 'date-fns'

export const toFixedSafe = (value: number, count?: number): number | string => {
  try {
    return Number((value + Number.EPSILON).toFixed(count || 6)).toString()
  } catch (e) {
    return value
  }
}

export const toFloorSafe = (
  value: number | string | undefined | null
): number | string => {
  if (value === undefined || value === null) return ''

  try {
    return Number(Math.floor(Number(value) * 100) / 100).toString()
  } catch (e) {
    return value
  }
}

export const formatValue = (
  value: number | string | undefined,
  decimals = 0,
  count?: number
): string | number => {
  if (value === undefined) return ''

  try {
    const parts = (+toFixedSafe(Number(value) / Math.pow(10, decimals), count))
      .toString()
      .split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  } catch (e) {
    return value
  }
}

export const formatBigNumberValue = (
  value?: BigNumber,
  decimals = 0,
  count?: number
): null | string | number => {
  if (!value) return null

  const transformedValue = value
    .dividedBy(new BigNumber(10).pow(decimals))
    .toString()

  return formatValue(transformedValue, 0, count)
}

export const formatValueWithToFixed = (
  value: number | string | undefined,
  count = 2
): string | number => {
  if (value === 0) {
    return value
  }

  if (!value) return ''

  let transformedValue = value

  if (typeof value === 'string') {
    transformedValue = Number(value)
  }

  try {
    const parts = toFixedSafe(transformedValue as number, count)
      .toString()
      .split('.')

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  } catch (e) {
    return value
  }
}

export const formatDate = (
  dateProp?: string | Date | number,
  formatDate = 'MM/dd/yyyy'
): string => {
  if (!dateProp) {
    return ''
  }

  const date = new Date(dateProp)
  return format(addMinutes(date, date.getTimezoneOffset()), formatDate)
}
