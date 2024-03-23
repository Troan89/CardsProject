export type Card = {
  answer: string
  answerImg: string
  answerVideo: string
  cardId: string
  created: string
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}

export type CreateCard = {
  answer: string
  id: string
  question: string
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
  cardId: string
  created: string
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
  id?: string
  itemsPerPage?: number | string
  orderBy?: string
  question?: string
}
export type DeleteCardId = {
  id: string
}
