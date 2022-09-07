import BigNumber from 'bignumber.js'
import { BigNumber as EthersBigNumber } from 'ethers'

export const num10e18: BigNumber = new BigNumber(10).pow(18)
export const MAX_BIGNUMBER: BigNumber = new BigNumber(
  '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  16
)
export const AVERAGE_BIGNUMBER: BigNumber = new BigNumber(
  '0x8888888888888888888888888888888888888888888888888888888888888888',
  16
)

export const toBN = (bn: EthersBigNumber): BigNumber => {
  return new BigNumber(bn.toHexString(), 16)
}

export const toLowBN = (bn: EthersBigNumber, decimals = 18): BigNumber => {
  return toBN(bn).dividedBy(new BigNumber(10).pow(decimals))
}

export const numberToTransactionalNumber = (
  amount: number,
  decimals = 18
): string => {
  return new BigNumber(amount, 10)
    .multipliedBy(new BigNumber(10).pow(decimals))
    .toFixed(0)
}

export const transactionalNumberToNumber = (
  amount: number | string,
  decimals = 18
): number => {
  return new BigNumber(amount, 10)
    .dividedBy(new BigNumber(10).pow(decimals))
    .toNumber()
}

export const cropDecimals = (amount: number): number => {
  const fixed = 10
  const re = new RegExp(`^-?\\d+(?:.\\d{0,${fixed || -1}})?`)

  return Number(amount.toString().match(re)![0])
}
