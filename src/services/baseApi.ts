import {
  CreateDecks,
  Deck,
  DecksResponse,
  DeleteDecks,
  EditDecks,
  GetDecksArgs,
} from '@/services/decks/decks.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
<<<<<<<<< Temporary merge branch 1
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Me', 'Cards'],
})
=========
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, CreateDecks>({
        invalidatesTags: ['Deck'],
        query: arg => ({
          body: arg,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<Deck, DeleteDecks>({
        invalidatesTags: ['Deck'],
        query: args => ({
          method: 'DELETE',
          url: `v1/decks/${args.id}`,
        }),
      }),
      editDecks: builder.mutation<Deck, EditDecks>({
        invalidatesTags: ['Deck'],
        query: ({ id, ...args }) => ({
          body: args,
          method: 'PATCH',
          url: `v1/decks/${id}`,
        }),
      }),
      getDecks: builder.query<DecksResponse, GetDecksArgs | void>({
        providesTags: ['Deck'],
        query: args => ({
          params: args ?? undefined,
          url: `v2/decks`,
        }),
      }),
    }
  },
  reducerPath: 'baseApi',
  tagTypes: ['Deck'],
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useEditDecksMutation,
  useGetDecksQuery,
} = baseApi
>>>>>>>>> Temporary merge branch 2
