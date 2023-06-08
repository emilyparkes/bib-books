import {ChangeEvent, FormEvent, useState} from 'react'
import { searchGoogleBooks } from '../apis/books'

function AddBook () {
  const [books, setBooks] = useState()
  const [searchterm, setSearchterm] = useState('')

const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  setSearchterm(e.target.value)
}

const submit = (e: FormEvent) => {
  e.preventDefault()
  searchGoogleBooks(searchterm)
  .then(results => {
    setBooks(results.items)
  })
  .catch(err => err.message)
}

  return (
    <>
    <div className='wrapper'>
      <h1>Find a Book</h1>
      <form>
      <fieldset>
         <label>
           <p>Searchterm</p>
           <input name='searchterm' value={searchterm} onChange={changeHandler}/>
         </label>
       </fieldset>
       <button onClick={submit}>Submit</button>
      </form>

      {books ?
      books.map(book => {
        return (
          <p key={book.id}>{book.volumeInfo.title}</p>
        )
      })
      : null}
    </div>
    </>
  )
}

export default AddBook
