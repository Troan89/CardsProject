import { LoginArgs, User } from '@/services/auth/auth.types'
import { baseApi } from '@/services/baseApi'

const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getMe: builder.query<User | undefined, void>({
        query: () => '/v1/auth/me',
      }),
      login: builder.mutation<void, LoginArgs>({
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      logout: builder.mutation<void, void>({
        query: () => ({ method: 'POST', url: '/v1/auth/logout' }),
      }),
    }
  },
})

export const { useGetMeQuery, useLoginMutation, useLogoutMutation } = authService
