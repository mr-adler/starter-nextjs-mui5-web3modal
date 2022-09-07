import {
  formatBigNumberValue,
  formatDate,
  formatValue,
  formatValueWithToFixed,
  toFixedSafe,
  toFloorSafe,
} from 'utils/formatValue'
import BigNumber from 'bignumber.js'

describe('utility - toFixedSafe', () => {
  test('set 10.35 to equal 10.35', () => {
    expect(toFixedSafe(10.35)).toBe('10.35')
  })
  test('set 10.35 with count 1 to equal 10.3', () => {
    expect(toFixedSafe(10.35, 1)).toBe('10.3')
  })
})

describe('utility - toFloorSafe', () => {
  test('set null to equal ""', () => {
    expect(toFloorSafe(null)).toBe('')
  })
  test('set undefined to equal ""', () => {
    expect(toFloorSafe(undefined)).toBe('')
  })
  test('set 30 to equal 30', () => {
    expect(toFloorSafe(30)).toBe('30')
  })
  test('set 30.48555 to equal 30.48', () => {
    expect(toFloorSafe(30.48555)).toBe('30.48')
  })
})

describe('utility - formatValue', () => {
  test('set undefined to equal ""', () => {
    expect(formatValue(undefined)).toBe('')
  })
  test('set 433333 to equal 433,333', () => {
    expect(formatValue(433333)).toBe('433,333')
  })
  test('set 433e18 to equal 433,000,000,000,000,000,000', () => {
    expect(formatValue(433e18)).toBe('433,000,000,000,000,000,000')
  })
  test('set 433e18 with 18 decimals to equal 433', () => {
    expect(formatValue(433e18, 18)).toBe('433')
  })
  test('set 433,789 with 1 count to equal 433.8', () => {
    expect(formatValue(433.789, 0, 1)).toBe('433.8')
  })
  test('set 433,789 with 2 count to equal 433.79', () => {
    expect(formatValue(433.789, 0, 2)).toBe('433.79')
  })
})

describe('utility - formatBigNumberValue', () => {
  test('set empty to equal null', () => {
    expect(formatBigNumberValue()).toBe(null)
  })
  test('set undefined to equal null', () => {
    expect(formatBigNumberValue(undefined)).toBe(null)
  })
  test('set new BigNumber(18) to equal 18', () => {
    expect(formatBigNumberValue(new BigNumber(18))).toBe('18')
  })
  test('set new BigNumber(18000) to equal 18,000', () => {
    expect(formatBigNumberValue(new BigNumber(18000))).toBe('18,000')
  })
  test('set new BigNumber(180.1) to equal 180.1', () => {
    expect(formatBigNumberValue(new BigNumber(180.1))).toBe('180.1')
  })
  test('set new BigNumber(18000) with 3 decimals to equal 18', () => {
    expect(formatBigNumberValue(new BigNumber(18000), 3)).toBe('18')
  })
  test('set new BigNumber(18777676.45) to equal 18,777,676.45', () => {
    expect(formatBigNumberValue(new BigNumber(18777676.45))).toBe(
      '18,777,676.45'
    )
  })
  test('set new BigNumber(18.459) with 1 count to equal 18.5', () => {
    expect(formatBigNumberValue(new BigNumber(18.459), 0, 1)).toBe('18.5')
  })
})

describe('utility - formatValueWithToFixed', () => {
  test('set undefined to equal ""', () => {
    expect(formatValueWithToFixed(undefined)).toBe('')
  })
  test('set "" to equal ""', () => {
    expect(formatValueWithToFixed('')).toBe('')
  })
  test('set 15.88787 to equal 15.89', () => {
    expect(formatValueWithToFixed(15.88787)).toBe('15.89')
  })
  test('set 15.44 with count 1 to equal 15.4', () => {
    expect(formatValueWithToFixed(15.44, 1)).toBe('15.4')
  })
  test('set 15.46 with count 1 to equal 15.4', () => {
    expect(formatValueWithToFixed(15.46, 1)).toBe('15.5')
  })
  test('set 15.4789 with count 2 to equal 15.48', () => {
    expect(formatValueWithToFixed(15.4789, 2)).toBe('15.48')
  })
})

describe('utility - formatDate', () => {
  test('set empty to equal ""', () => {
    expect(formatDate()).toBe('')
  })
  test('set 1660855611000 to equal 08/18/2022', () => {
    expect(formatDate(1660855611000)).toBe('08/18/2022')
  })
  test('set new Date(1660855611000) to equal 08/18/2022', () => {
    const date = new Date(1660855611000)

    expect(formatDate(date)).toBe('08/18/2022')
  })
  test('set 1660855611000 with format MM-dd-yy to equal 08-18-22', () => {
    expect(formatDate(1660855611000, 'MM-dd-yy')).toBe('08-18-22')
  })
  test('set 1660855611000 with format MM to equal 08', () => {
    expect(formatDate(1660855611000, 'MM')).toBe('08')
  })
  test('set 1660855611000 with format MM-yy to equal 08-22', () => {
    expect(formatDate(1660855611000, 'MM-yy')).toBe('08-22')
  })
  test('set 1660855611000 with format MM-dd to equal 08-22', () => {
    expect(formatDate(1660855611000, 'MM-dd')).toBe('08-18')
  })
  test('set 1660855611000 with format MM-dd, HH:mm:ss to equal 08-18, 20:46:51', () => {
    expect(formatDate(1660855611000, 'MM-dd, HH:mm:ss')).toBe('08-18, 20:46:51')
  })
  test('set 1660855611000 with format MM-dd, HH:mm:ss, O to equal 08-18, 20:46:51, GMT+3', () => {
    expect(formatDate(1660855611000, 'MM-dd, HH:mm:ss, O')).toBe(
      '08-18, 20:46:51, GMT+3'
    )
  })
})
