import { baseApi } from '@/services/baseApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
<<<<<<< HEAD
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
=======
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
>>>>>>> main
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
})
<<<<<<< HEAD
=======

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
>>>>>>> main
