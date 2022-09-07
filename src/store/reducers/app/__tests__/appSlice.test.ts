import reducer, { appSlice, initialState } from 'store/reducers/app/slice'
import { RefetchFlags } from 'constants/refetchFlags'

describe('redux - appSlice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState)
  })

  test('should handle change isLoading', () => {
    const result = {
      ...initialState,
      isLoading: true,
    }

    expect(reducer(initialState, appSlice.actions.setAppLoading(true))).toEqual(
      result
    )
  })

  test('should handle change RefetchFlags.Account', () => {
    const result = {
      ...initialState,
      refetchFlags: {
        ...initialState.refetchFlags,
        [RefetchFlags.Main]: true,
      },
    }

    expect(
      reducer(initialState, appSlice.actions.setRefetchFlag(RefetchFlags.Main))
    ).toEqual(result)
  })
})
