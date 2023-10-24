import { useEffect, useState } from 'react'
import './App.css'
import booksJson from './books.json'
import { Book } from './types'

function App() {
  const [readingList, setReadingList] = useState<Book[]>([])
 
  const books = booksJson.library


  

  const addBookToReadingList = (book: Book) => {
      const updatedItems = [...readingList, book]
      setReadingList(updatedItems)
      window.localStorage.setItem('readinglist', JSON.stringify(updatedItems));   
  }



  useEffect(() => {
    const storedItems = window.localStorage.getItem('readingList')
    if(storedItems){
      setReadingList(JSON.parse(storedItems))
    }
  }, [])

  return (
    <>
    <main className='container w-full flex flex-col gap-10'>
      <h1 className='text-4xl font-bold text-stone-50'>Available Books</h1>
          <ul className='flex flex-row justify-center mt-10 gap-8'>
              {books.map((book)=>(
                <li className='flex flex-col gap-4 text-stone-50' key={book.book.ISBN}>
                      <h2>{book.book.title}</h2>
                      <p>{book.book.genre}</p>
                      <p>{book.book.year}</p>
                      <img style={{width: '200px'}} src={book.book.cover} alt="" />
                      <button onClick={()=>{addBookToReadingList(book)}} className=' bg-sky-500 border-2 border-white p-2 rounded-lg'>Add to my reading list</button>
                </li>
              ))}
          </ul>

        <h2 className='text-4xl font-bold text-stone-50'>Reading List</h2>
        {readingList.length < 1 ? (
            <h3 className='text-2xl font-bold text-stone-50'>You have no books in your reading list. </h3>
        ) : (
            <ul className='flex flex-row justify-center mt-10 gap-8'>
              {readingList.map((book)=>(
                  <li className='flex flex-col gap-4 text-stone-50' key={book.book.ISBN}>
                    <h2>{book.book.title}</h2>
                    <p>{book.book.genre}</p>
                    <p>{book.book.year}</p>
                    <img style={{width: '200px'}} src={book.book.cover} alt="" />
                
                  </li>
              ))}
            </ul>
        )}
        
      </main>
      
    </>
  )
}

export default App
