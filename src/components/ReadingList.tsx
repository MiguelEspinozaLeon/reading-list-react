import { Book } from '../types'

const ReadingList = ({readingList, removeBook}:{readingList: Book[], removeBook: (book: Book)=> void}) => {
  return (
    <>  
        <h2 className='text-4xl font-bold text-stone-50'>Reading List</h2>
        <ul className='grid grid-cols-3 grid-rows-3 justify-center mt-10 gap-8 md:max-w-xl sm:flex sm:flex-col sm:items-center'>
              {readingList.map((book)=>(
                <div className='content-center border-2 border-white rounded-lg p-4 bg-slate-800' key={book.book.ISBN}>
                    <li className='items-center content-center flex flex-row gap-4 text-stone-50'>
                      <img style={{width: '150px', height: '200px'}} src={book.book.cover} alt="" />
                      <div className='flex gap-2 flex-col items-center'>
                        <h2>{book.book.title}</h2>
                        <p>{book.book.genre}</p>
                        <p>{book.book.year}</p>
                        <button onClick={()=>{removeBook(book)}} className='text-stone-50 bg-sky-500 border-2 border-white p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mt-8'>Mark as completed</button>
                      </div>
                    </li>
                </div>
              ))}
            </ul>
    </>
  )
}

export default ReadingList