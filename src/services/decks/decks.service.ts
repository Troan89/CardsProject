import { baseApi } from '@/services/baseApi'
import {
  CreateDecks,
  Deck,
  DecksResponse,
  EditDecks,
  GetDecksArgs,
  GetMaxMinCard,
  GetRandomCardLearn,
  IdDecks,
  RandomCardLearn,
} from '@/services/decks/decks.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, CreateDecks>({
        invalidatesTags: ['Decks'],
        query: args => {
          const formData = new FormData()

          formData.append('name', args.name)
          if (args.isPrivate) {
            formData.append('isPrivate', args.isPrivate.toString())
          }
          if (args.cover) {
            formData.append('cover', args.cover)
          }

          return {
            body: formData,
            method: 'POST',
            url: `v1/decks`,
          }
        },
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
      getMaxMinCards: builder.query<GetMaxMinCard, void>({
        providesTags: ['Decks'],
        query: () => `v2/decks/min-max-cards`,
      }),
      getOneDeck: builder.query<Deck, IdDecks>({
        providesTags: ['Decks'],
        query: ({ id }) => `v1/decks/${id}`,
      }),
      getRandomCardLearn: builder.query<GetRandomCardLearn, RandomCardLearn>({
        providesTags: ['Decks'],
        query: ({ id, ...args }) => {
          return {
            params: args,
            url: `v1/decks/${id}/learn`,
          }
        },
      }),
      updateDeck: builder.mutation<Deck, EditDecks>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...args }) => {
          const formData = new FormData()

          formData.append('name', args.name)
          if (args.isPrivate) {
            formData.append('isPrivate', args.isPrivate.toString())
          }
          if (args.cover) {
            formData.append('cover', args.cover)
          }

          return {
            body: formData,
            method: 'PATCH',
            url: `v1/decks/${id}`,
          }
        },
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useGetMaxMinCardsQuery,
  useGetOneDeckQuery,
  useGetRandomCardLearnQuery,
  useUpdateDeckMutation,
} = decksService

// не добавлены запросы за:
// 1. создание карты url: `v1/decks/${id}/cards`
// 2. рандомными картами `v1/decks/${id}/learn`
// 3. `v1/decks/${id}/learn`
//4, извлечение карты url: `v1/decks/${id}/cards`
