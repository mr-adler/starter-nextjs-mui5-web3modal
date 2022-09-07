import { getChainName } from 'utils/getChainName'
import { Chains } from 'constants/chains'

describe('utility - getChainName', () => {
  test('set 123456789 to equal 123456789', () => {
    expect(getChainName(123456789)).toBe(123456789)
  })

  test('set Chains.POLYGON to equal "Polygon Network"', () => {
    expect(getChainName(Chains.POLYGON)).toBe('Polygon Network')
  })
})
