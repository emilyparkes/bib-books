export interface Book {
  title: string,
  author: string,
  publisher: string,
  image: string,
  shelf: number
}

export interface DBBook extends Book {
  id: number
}