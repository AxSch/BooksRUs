import React from 'react'


const BookListItem = ({ book }) => {
    const renderAuthors = (book) => {
        return book.book_author.map(authors => {
            return authors
        })
    }
    return (
        <div key={book.id}>
            <div>
                Book {book.id}
                Title {book.book_title}
                Author {renderAuthors(book)}
            </div>
            <div>
                Pub. year {book.book_publication_year}
                Pub. city {book.book_publication_city}
                Pub. country {book.book_publication_country}
                No. of pages {book.book_pages}
            </div>
        </div>
    )
}

export default BookListItem
