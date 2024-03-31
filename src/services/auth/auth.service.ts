import {
  CreateNewPasswordArgs,
  LoginArgs,
  RecoverPasswordArgs,
  ResendCheckEmailArgs,
  SignUpArgs,
  SignUpResponse,
  User,
} from '@/services/auth/auth.types'
import { baseApi } from '@/services/baseApi'

const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      checkEmail: builder.mutation<void, { code: string }>({
        query: args => ({
          body: args,
          method: 'POST',
          url: '/v1/auth/verify-email',
        }),
      }),
      createAccessToken: builder.mutation<void, void>({
        query: () => ({ method: 'POST', url: '/v1/auth/refresh-token' }),
      }),
      getMe: builder.query<User | undefined, void>({
        providesTags: ['Me'],
        query: () => '/v1/auth/me',
      }),
      login: builder.mutation<void, LoginArgs>({
        invalidatesTags: ['Me'],
        query: args => ({
          body: args,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      logout: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        query: () => ({ method: 'POST', url: '/v1/auth/logout' }),
      }),
      recoverPassword: builder.mutation<void, RecoverPasswordArgs>({
        invalidatesTags: ['Me'],
        query: args => ({ body: args, method: 'POST', url: '/v1/auth/recover-password' }),
      }),
      resendCheckEmail: builder.mutation<void, ResendCheckEmailArgs>({
        query: args => ({ body: args, method: 'POST', url: '/v1/auth/resend-verification-email' }),
      }),
      resetPassword: builder.mutation<void, CreateNewPasswordArgs>({
        invalidatesTags: ['Me'],
        query: ({ password, token }) => ({
          body: { password },
          method: 'POST',
          url: `/v1/auth/reset-password/${token}`,
        }),
      }),
      signUp: builder.mutation<SignUpResponse, SignUpArgs>({
        query: args => ({
          body: args ?? undefined,
          method: 'POST',
          url: '/v1/auth/sign-up',
        }),
      }),
      updateProfile: builder.mutation<User, FormData>({
        invalidatesTags: ['Me'],
        async onQueryStarted(arg, { dispatch, queryFulfilled }) {
          const updateResult = dispatch(
            authService.util.updateQueryData('getMe', undefined, draft => {
              if (draft) {
                // Проверка на наличие значения draft
                const name = arg.get('name')
                const avatar = arg.get('avatar')

                if (avatar instanceof File) {
                  draft.avatar = URL.createObjectURL(avatar)
                }
                if (typeof name === 'string') {
                  draft.name = name
                }
              }
            })
          )

          try {
            await queryFulfilled
          } catch {
            updateResult.undo()
          }
        },
        query: args => ({ body: args ?? undefined, method: 'PATCH', url: '/v1/auth/me' }),
      }),
    }
  },
})

export const {
  useCheckEmailMutation,
  useCreateAccessTokenMutation,
  useGetMeQuery,
  useLoginMutation,
  useLogoutMutation,
  useRecoverPasswordMutation,
  useResendCheckEmailMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useUpdateProfileMutation,
} = authService
