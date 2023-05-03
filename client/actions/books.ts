import type { Book } from '../../models/Book'

import { fetchBooks, postBook, deleteBook, patchBook } from '../apis/books'

export function requestBooks(): Action {
  return {
    type: 'REQUEST_BOOKS',
    payload: null
  }
}

export function receieveBooks(): Action {
  return {
    type: 'RECEIVE_BOOKS',
    payload: null
  }
}

export function addBook(book: Book): Action {
  return {
    type: 'ADD_BOOK',
    payload: book
  }
}

export function delBook(id: number): Action {
  return {
    type: 'DEL_BOOK',
    payload: id
  }
}

export function updateBook(id: number): Action {
  return {
    type: 'UPDATE_BOOK',
    payload: id
  }
}


export function getBooks(): AppThunkAction {
  return (dispatch) => {
    dispatch(requestBooks())
    return fetchBooks()
      .then(books => dispatch(receiveBooks(books)))
      .catch(err => console.log(err.message))
  }
}

export function newBook(book: Partial<Book>): AppThunkAction {
  return (dispatch) => {
    return postBook(book)
      .then((dbBook) => {
        dispatch(addBook(dbBook))
      })
      .catch((err) => console.log(err.message))
  }
}

export function removeBook(id: number): AppThunkAction {
  return (dispatch) => {
    return deleteBook(id)
      .then(() => {
        dispatch(delBook(id))
      })
      .catch((err) => console.log(err.message))
  }
}

export function editBook(id: number, shelf: number): AppThunkAction {
  return (dispatch) => {
    return patchBook(id, shelf)
      .then(() => {
        dispatch(updateBook(id))
      })
      .catch((err) => console.log(err.message))
  }
}
