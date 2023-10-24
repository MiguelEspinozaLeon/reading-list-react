
export type Book = {
    book: {
        title: string
        pages: number
        genre: string
        cover: string
        synopsis: string
        year: number
        ISBN: string
        author: Author
    }
}

export type Author = {
    name: string
    otherBooks: string[]
}