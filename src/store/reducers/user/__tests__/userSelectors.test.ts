import { RootState } from 'store/store'
import {
  isLoadingUserAuthSelector,
  isUserLoggedSelector,
  userAddressSelector,
  userChainIdSelector,
  userInfoSelector,
} from 'store/reducers/user/selectors'

describe('redux - userSelectors', () => {
  const mockUser = {
    address: 'test',
    chainId: 1,
    isLoading: false,
  }

  const mockStore = {
    user: mockUser,
  }

  test('should select user info', () => {
    expect(userInfoSelector(mockStore as RootState)).toEqual(mockUser)
  })

  test('should select user address', () => {
    expect(userAddressSelector(mockStore as RootState)).toEqual(
      mockUser.address
    )
  })

  test('should select user chainId', () => {
    expect(userChainIdSelector(mockStore as RootState)).toEqual(
      mockUser.chainId
    )
  })

  test('should select is loading user auth', () => {
    expect(isLoadingUserAuthSelector(mockStore as RootState)).toEqual(
      mockUser.isLoading
    )
  })

  test('should select is loading user auth', () => {
    expect(isLoadingUserAuthSelector(mockStore as RootState)).toEqual(
      mockUser.isLoading
    )
  })

  test('should select is logged user', () => {
    expect(isUserLoggedSelector(mockStore as RootState)).toEqual(true)
  })
})
