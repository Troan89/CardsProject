export type DecksResponse = {
  items: Deck[]
  pagination: Pagination
}
export type DeckAuthor = {
  id: string
  name: string
}
export type Deck = {
  author: DeckAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number | string
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export type CreateDecks = {
  cover?: File | null
  isPrivate?: boolean
  name: string
}

export type IdDecks = {
  id: string
}

export type UpdateDeck = {
  data: FormData
  id: string
}

export type EditDecks = {
  cover?: File | null
  id: string
  isPrivate?: boolean
  name: string
}

export type GetMaxMinCard = {
  max: number
  min: number
}
