export type Subjects = Subject[]

export interface Subject {
  id: number
  title: string
  color: string
  articles: Articles[]
}

export interface Articles {
  id: number
  title: string
}
