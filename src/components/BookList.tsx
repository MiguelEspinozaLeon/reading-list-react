import { Book } from '../types'

const BookList = ({books, addBook} : {books: Book[], addBook: (book: Book)=> void}) => {

  
  return (
    <>
      <section className='container items-center flex flex-col max-w-screen-xl'>
        <h1 className='text-2xl font-bold text-stone-50 md:text-4xl'>Available Books</h1>
        <ul className='mt-10 p-4 md:grid md:grid-cols-3 md:grid-rows-3 gap-8 '>
            {books.map((book)=>(
              <div className='content-center border-2 border-white rounded-lg p-4 bg-slate-800 shadow-sm' key={book.book.ISBN}>
                  <li className='flex flex-row items-center content-center gap-4 text-stone-50 font-semibold' >
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
      </section>
        
    </>
  )
}

export default BookList