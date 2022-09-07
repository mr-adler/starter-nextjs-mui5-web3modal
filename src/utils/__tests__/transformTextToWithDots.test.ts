import { transformTextToWithDots } from 'utils/transformTextToWithDots'

describe('utility - transformTextToWithDots', () => {
  test('empty arguments to equal null', () => {
    expect(transformTextToWithDots()).toBeNull()
  })

  test('set "text" to equal "text"', () => {
    expect(transformTextToWithDots('text')).toBe('text')
  })

  test('set "11110000" to equal "1111...0000"', () => {
    expect(transformTextToWithDots('11110000')).toBe('1111...0000')
  })
})
