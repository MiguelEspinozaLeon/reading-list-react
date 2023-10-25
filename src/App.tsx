import { useMemo, useState } from 'react'
import './App.css'
import booksJson from './books.json'
import { Book } from './types'
import { Toaster, toast } from 'sonner'
import BookList from './components/BookList'
import ReadingList from './components/ReadingList'
import EmptyReadingList from './components/EmptyReadingList'

function App() {
  const [readingList, setReadingList] = useState<Book[]>([]);
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState<Book[]>(booksJson.library)

 
  const filteredBooks = useMemo(()=>{
    return query != null && query.length > 0 ? books.filter(book=>{
      return (
        book.book.title.toLowerCase().includes(query.toLowerCase()) || 
        book.book.genre.toLowerCase().includes(query.toLowerCase())
      )}) : books
  },[books, query])

  const addBookToReadingList = (book: Book) => {
    if (readingList.includes(book)) {
      const errorMessage = `The book ${book.book.title} is already on the reading list.`;
      toast.error(errorMessage);
    } else {
      const updatedItems = [...readingList, book];
      setReadingList(updatedItems);
      toast.success(`Book: ${book.book.title} added to your reading list.`);
    }
  };

  const removeFromReadingList = (book: Book) => {
    setReadingList((prevstate) =>
      prevstate.filter((bookR) => bookR.book.ISBN != book.book.ISBN)
    );
    toast.success(`You have completed reading ${book.book.title}`);
  }; 

  return (
    <>
      <Toaster richColors/>
      <main className="container content-center items-center flex flex-col gap-10">
        <input className='p-2 rounded-lg' type="text" value={query} onChange={(event)=>{setQuery(event.target.value)}} placeholder='Filtrar por titulo o genero' />
        <BookList 
          books={filteredBooks} 
          addBook={addBookToReadingList} 
        />
        {readingList.length < 1 ? (
          <EmptyReadingList />
        ) : (
          <ReadingList
            readingList={readingList}
            removeBook={removeFromReadingList}
          />
        )}
      </main>
    </>
  );
}
export default App
