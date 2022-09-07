import reducer, { userSlice, initialState } from 'store/reducers/user/slice'
import { IUserState } from 'models/store/IUser'

describe('redux - userSlice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState)
  })

  test('should handle setUserAddress', () => {
    const result: IUserState = {
      ...initialState,
      address: 'test',
    }

    expect(
      reducer(initialState, userSlice.actions.setUserAddress('test'))
    ).toEqual(result)
  })

  test('should handle setUserChainId', () => {
    const result: IUserState = {
      ...initialState,
      chainId: 1,
    }

    expect(reducer(initialState, userSlice.actions.setUserChainId(1))).toEqual(
      result
    )
  })

  test('should handle setIsLoadingUserAuth', () => {
    const result: IUserState = {
      ...initialState,
      isLoading: false,
    }

    expect(
      reducer(initialState, userSlice.actions.setIsLoadingUserAuth(false))
    ).toEqual(result)
  })

  test('should handle clearUserData', () => {
    expect(reducer(initialState, userSlice.actions.clearUserData())).toEqual(
      initialState
    )
  })
})
