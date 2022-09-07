import { camelize } from 'utils/camelize'

const mockObject = {
  test_test: 1,
}

const mockArray = [mockObject, mockObject]

describe('utility - camelize', () => {
  test('set mock with snake to equal data with camelCase', () => {
    expect(camelize(mockObject)).toEqual({ testTest: 1 })
  })
  test('set array mock with snake_case to equal data with camelCase', () => {
    expect(camelize(mockArray)).toEqual([{ testTest: 1 }, { testTest: 1 }])
  })
})
