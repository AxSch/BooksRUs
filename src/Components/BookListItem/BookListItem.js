import React from 'react'


const BookListItem = ({ book }) => {
    const renderAuthors = (book) => {
        return book.book_author.map(authors => {
            return authors
        })
    }
    return (
        <div className="m-3 bg-secondary p-3 rounded-md" key={book.id}>
            <div className="flex flex-row text-gray-900 text-xl font-medium">
                <h1>{book.book_title}</h1>
            </div>
            <div id="bookAuthor" className="text-sm text-gray-700">
                <span>By {renderAuthors(book)}</span>
            </div>
            <div id="metadata" className="flex flex-row text-xs justify-between flex-wrap text-gray-700 pt-6">
                <span>Pub. year: {book.book_publication_year}</span>
                <span>Pub. city: {book.book_publication_city}</span>
                <span>Pub. country: {book.book_publication_country}</span>
                <span>No. of pages: {book.book_pages}</span>
            </div>
        </div>
        
    )
}

export default BookListItem
