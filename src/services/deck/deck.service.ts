import { baseApi } from '@/services/baseApi'
import {
  Card,
  CardsResponse,
  CreateCard,
  DeleteCardId,
  GetCardsArgs,
} from '@/services/deck/deck.types'

const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<Card, CreateCard>({
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
      deleteCard: builder.mutation<Card, DeleteCardId>({
        invalidatesTags: ['Deck'],
        query: arg => ({
          method: 'DELETE',
          url: `/v1/cards/${arg.id}`,
        }),
      }),
      getCard: builder.query<CardsResponse, GetCardsArgs>({
        providesTags: ['Deck'],
        query: ({ id, ...args }) => ({
          params: args,
          url: `v1/decks/${id}/cards`,
        }),
      }),
    }
  },
})

export const { useCreateCardMutation, useDeleteCardMutation, useGetCardQuery } = cardsService
