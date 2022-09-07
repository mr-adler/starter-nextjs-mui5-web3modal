import { RootState } from 'store/store'
import { RefetchFlags } from 'constants/refetchFlags'
import {
  appSelector,
  isLoadingSelector,
  isRefetchedMainFlagSelector,
} from 'store/reducers/app/selectors'
import { IApp } from 'models/store/IApp'

describe('redux - appSelectors', () => {
  const mockApp: IApp = {
    isLoading: false,
    refetchFlags: {
      [RefetchFlags.Main]: false,
    },
  }

  const mockStore = {
    app: mockApp,
  }

  test('should select app info', () => {
    expect(appSelector(mockStore as RootState)).toEqual(mockApp)
  })

  test('should select is loading', () => {
    expect(isLoadingSelector(mockStore as RootState)).toEqual(mockApp.isLoading)
  })

  test('should select refetched account flag', () => {
    expect(isRefetchedMainFlagSelector(mockStore as RootState)).toEqual(
      mockApp.refetchFlags[RefetchFlags.Main]
    )
  })
})
