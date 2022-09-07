import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user/slice'
import snackbarReducer from './reducers/snackbar/slice'
import appReducer from './reducers/app/slice'

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  snackbar: snackbarReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
