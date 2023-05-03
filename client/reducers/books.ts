import { Book, Action } from '../../models/Book'

const initialState: Book = []

function bookReducer(state = initialState, action: Action) {
  const {type, payload} = action
  switch(type) {

    case 'ADD_BOOK':
      return [...state, payload]

    case 'DEL_BOOK':
      return state.filter(book => book.id !== payload)

    case 'UPDATE_BOOK':
      return state.map((book) => {
      // TODO
      })
      
    default:
      return state
  }
}

export default bookReducer