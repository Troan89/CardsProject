import { baseApi } from '@/services/baseApi'
import {
  Card,
  CardsResponse,
  CreateUpdateCard,
  DeleteGetCardId,
  GetCardsArgs,
} from '@/services/deck/deck.types'

const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<Card, CreateUpdateCard>({
        invalidatesTags: ['Deck'],
        query: ({ id, ...data }) => {
          const formData = new FormData()

          formData.append('question', data.question)
          formData.append('answer', data.answer)
          if (data.questionImg) {
            formData.append('questionImg', data.questionImg)
          }
          if (data.answerImg) {
            formData.append('answerImg', data.answerImg)
          }

          return {
            body: formData,
            method: 'POST',
            url: `/v1/decks/${id}/cards`,
          }
        },
      }),
      deleteCard: builder.mutation<Card, DeleteGetCardId>({
        invalidatesTags: ['Deck'],
        query: arg => ({
          method: 'DELETE',
          url: `/v1/cards/${arg.id}`,
        }),
      }),
      getCard: builder.query<Card, DeleteGetCardId>({
        providesTags: ['Deck'],
        query: ({ id }) => ({
          url: `v1/cards/${id}`,
        }),
      }),
      getCards: builder.query<CardsResponse, GetCardsArgs>({
        providesTags: ['Deck'],
        query: ({ id, ...args }) => ({
          params: args,
          url: `v1/decks/${id}/cards`,
        }),
      }),
      updateCard: builder.mutation<Card, CreateUpdateCard>({
        invalidatesTags: ['Deck'],
        query: ({ id, ...data }) => {
          const formData = new FormData()

          formData.append('question', data.question)
          formData.append('answer', data.answer)
          if (data.questionImg) {
            formData.append('questionImg', data.questionImg)
          }
          if (data.answerImg) {
            formData.append('answerImg', data.answerImg)
          }

          return {
            body: formData,
            method: 'PATCH',
            url: `/v1/cards/${id}`,
          }
        },
      }),
    }
  },
})

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardQuery,
  useGetCardsQuery,
  useUpdateCardMutation,
} = cardsService
