import request from 'superagent'
import { Book } from '../../models/Book'

const baseUrl = '/v1/books'

export function fetchBooks(): Promise<Book[]> {
  return request
    .get(baseUrl)
    .then((res) => res.body)
}

export function fetchBook(): Promise<Book[]> {
  return request
    .get(baseUrl)
    .then((res) => res.body)
}

export function postBook(Book: Partial<Book>): Promise<Book> {
  return request
    .post(baseUrl)
    .send(Book)
    .then((res) => {
      return res.body
    })
}

export function deleteBook(id: number): Promise<null> {
  return request
    .delete(`${baseUrl}/${id}`)
    .then(() => {return null})
}

export function patchBook(id: number, read: number): Promise<number> {
  return request
    .patch(`${baseUrl}/${id}`)
    .send({read})
    .then((res) => {
      return res.body
    })
}