export type User = {
  avatar: null | string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type SignUpArgs = {
  email: string
  html?: string
  name: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}

export type SignUpResponse = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type ResendCheckEmailArgs = {
  html?: string
  subject?: string
  userId: string
}

export type CreateNewPasswordArgs = {
  password: string
  token: string
}

export type RecoverPasswordArgs = Pick<SignUpArgs, 'email' | 'html' | 'subject'>
