export type Card = {
  answer: string
  answerImg?: string | undefined
  answerVideo?: string
  cardId?: string
  created?: string
  id: string
  question: string
  questionImg?: string | undefined
  questionVideo?: string
  shots?: number
  updated?: string
  userId?: string
}

export type CreateCard = {
  answer: string
  answerImg?: File | null
  id?: string
  question: string
  questionImg?: File | null
}

export type CardsResponse = {
  items: CardItem[]
  pagination: CardsPagination
}
export type CardsPagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type CardItem = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}

export type GetCardsArgs = {
  answer?: string
  currentPage?: number
  id?: string | undefined
  itemsPerPage?: number | string
  orderBy?: string
  question?: string
}
export type DeleteCardId = {
  id: string
}
