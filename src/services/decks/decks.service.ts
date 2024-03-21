import { baseApi } from '@/services/baseApi'
import {
  CreateDecks,
  Deck,
  DecksResponse,
  EditDecks,
  GetDecksArgs,
  IdDecks,
} from '@/services/decks/decks.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, CreateDecks>({
        invalidatesTags: ['Decks'],
        query: arg => ({
          body: arg,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<Deck, IdDecks>({
        invalidatesTags: ['Decks'],
        query: args => ({
          method: 'DELETE',
          url: `v1/decks/${args.id}`,
        }),
      }),
      getDecks: builder.query<DecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? undefined,
          url: `v2/decks`,
        }),
      }),
      getOneDeck: builder.query<Deck, IdDecks>({
        providesTags: ['Decks'],
        query: ({ id }) => `v1/decks/${id}`,
      }),
      updateDeck: builder.mutation<Deck, EditDecks>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...data }) => ({
          body: data,
          method: 'PATCH',
          url: `v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useGetOneDeckQuery,
  useUpdateDeckMutation,
} = decksService

// не добавлены запросы за:
// 1. создание карты url: `v1/decks/${id}/cards`
// 2. рандомными картами `v1/decks/${id}/learn`
// 3. `v1/decks/${id}/learn`
//4, извлечение карты url: `v1/decks/${id}/cards`
