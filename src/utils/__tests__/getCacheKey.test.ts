import { getCacheKey } from 'utils/getCacheKey'

describe('utility - getCacheKey', () => {
  test('set first to equal first', () => {
    expect(getCacheKey('first')).toBe('first')
  })

  test('set first and second to equal first_second', () => {
    expect(getCacheKey('first', 'second')).toBe('first_second')
  })

  test('set first and second and 3 to equal first_second_3', () => {
    expect(getCacheKey('first', 'second', 3)).toBe('first_second_3')
  })

  test('empty arguments equal ""', () => {
    expect(getCacheKey()).toBe('')
  })
})
