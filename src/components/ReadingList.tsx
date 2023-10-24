import React from 'react'
import { Book } from '../types'

const ReadingList = ({readingList, removeBook}:{readingList: Book[], removeBook: (book: Book)=> void}) => {
  return (
    <>  
        <h2 className='text-4xl font-bold text-stone-50'>Reading List</h2>
        <ul className='flex flex-row justify-center mt-10 gap-8'>
              {readingList.map((book)=>(
                  <li className='flex flex-col gap-4 text-stone-50' key={book.book.ISBN}>
                      <h2>{book.book.title}</h2>
                      <p>{book.book.genre}</p>
                      <p>{book.book.year}</p>
                      <img style={{width: '200px'}} src={book.book.cover} alt="" />
                      <button onClick={()=>{removeBook(book)}} className='text-stone-50 bg-sky-500 border-2 border-white p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mt-8'>Mark as completed</button>
                  </li>
              ))}
            </ul>
    
    </>
  )
}

export default ReadingList