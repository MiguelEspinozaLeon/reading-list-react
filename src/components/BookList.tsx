import React from 'react'
import { Book } from '../types'

const BookList = ({books, addBook} : {books: Book[], addBook: (book: Book)=> void}) => {
  return (
    <>
        <h1 className='text-4xl font-bold text-stone-50'>Available Books</h1>
          <ul className='grid grid-cols-3 grid-rows-3 justify-center mt-10 gap-8'>
              {books.map((book)=>(
                <div className='content-center border-2 border-white rounded-lg p-4 bg-stone-50 shadow-sm' key={book.book.ISBN}>
                    <li className='flex flex-row items-center content-center gap-4 text-slate-700 font-semibold' >
                      <img style={{width: '150px', height: '200px'}} src={book.book.cover} alt={book.book.title} />
                      <div className='flex gap-2 flex-col items-center'>
                        <h2 className='font-bold mb-8'>{book.book.title}</h2>
                        <p>{book.book.genre}</p>
                        <p>{book.book.year}</p>
                        <button onClick={()=>{addBook(book)}} className='text-stone-50 bg-sky-500 border-2 border-white p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mt-8'>Add to my reading list</button>
                      </div>
                    </li>
                </div>
              ))}
          </ul>
    </>
  )
}

export default BookList