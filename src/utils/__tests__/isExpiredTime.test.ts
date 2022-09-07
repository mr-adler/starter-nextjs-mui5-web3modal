import { isExpiredTime } from 'utils/isExpiredTime'

describe('utility - isExpiredTime', () => {
  test('empty arguments to equal null', () => {
    expect(isExpiredTime(0)).toBeNull()
  })

  test('set 1660148900 (Wednesday, 10 August 2022 р., 16:28:20) to equal true', () => {
    expect(isExpiredTime(1660148900)).toBeTruthy()
  })

  test('set 3333333333 (Sunday, 18 August 2075 р., 05:55:33) to equal false', () => {
    expect(isExpiredTime(3333333333)).toBeFalsy()
  })
})
