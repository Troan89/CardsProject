import { baseApi } from '@/services/baseApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
<<<<<<<<< Temporary merge branch 1
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
=========
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
>>>>>>>>> Temporary merge branch 2
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
})
<<<<<<<<< Temporary merge branch 1

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
=========
>>>>>>>>> Temporary merge branch 2
