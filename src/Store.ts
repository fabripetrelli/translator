import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { translationApi } from 'Api/Translation'

export const store = configureStore({
  reducer: {
    [translationApi.reducerPath]: translationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([translationApi.middleware]),
})

setupListeners(store.dispatch)
