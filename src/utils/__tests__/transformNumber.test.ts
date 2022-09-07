import {
  cropDecimals,
  numberToTransactionalNumber,
  toBN,
  toLowBN,
  transactionalNumberToNumber,
} from 'utils/transformNumber'
import { ethers } from 'ethers'

describe('utility - toBn', () => {
  test('set ethers.BigNumber.from(0)).toString() to equal "0"', () => {
    expect(toBN(ethers.BigNumber.from(0)).toString()).toBe('0')
  })

  test('set ethers.BigNumber.from(10)).toString() to equal "10"', () => {
    expect(toBN(ethers.BigNumber.from(10)).toString()).toBe('10')
  })
})

describe('utility - toLowBn', () => {
  test('set ethers.BigNumber.from(0)).toString() to equal "0"', () => {
    expect(toLowBN(ethers.BigNumber.from(0)).toString()).toBe('0')
  })

  test('set ethers.BigNumber.from(0.0001e18)).toString() to equal "0.0001"', () => {
    expect(toLowBN(ethers.BigNumber.from(0.0001e18)).toString()).toBe('0.0001')
  })
})

describe('utility - numberToTransactionalNumber', () => {
  test('set 1 to equal 1000000000000000000', () => {
    expect(numberToTransactionalNumber(1)).toBe('1000000000000000000')
  })

  test('set 1 with decimals 2 to equal 100', () => {
    expect(numberToTransactionalNumber(1, 2)).toBe('100')
  })

  test('set 1 with decimals 10 to equal 10000000000', () => {
    expect(numberToTransactionalNumber(1, 10)).toBe('10000000000')
  })

  test('set 0 to equal 0', () => {
    expect(numberToTransactionalNumber(0)).toBe('0')
  })
})

describe('utility - transactionalNumberToNumber', () => {
  test('set 1 to equal 1e-18', () => {
    expect(transactionalNumberToNumber(1)).toBe(1e-18)
  })

  test('set 1 with decimals 2 to equal 0.01', () => {
    expect(transactionalNumberToNumber(1, 2)).toBe(0.01)
  })

  test('set 1 with decimals 10 to equal 1e-10', () => {
    expect(transactionalNumberToNumber(1, 10)).toBe(1e-10)
  })

  test('set 0 to equal 0', () => {
    expect(transactionalNumberToNumber(0)).toBe(0)
  })
})

describe('utility - cropDecimals', () => {
  test('set 1.12 to equal 1.12', () => {
    expect(cropDecimals(1.12)).toBe(1.12)
  })

  test('set 1.123456789123456 to equal 1.1234567891', () => {
    expect(cropDecimals(1.123456789123456)).toBe(1.1234567891)
  })
})
