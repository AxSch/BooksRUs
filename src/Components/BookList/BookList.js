import React from 'react'
import BookListItem from '../BookListItem/BookListItem'

const BookList = ({ booksData }) => {
    const renderBookList = booksData => {
        return booksData.map((book, key) => {
            return (
                <BookListItem book={book} key={key} />
            )
        })
    }
    return (
        <div>
            <div>Showing {booksData.length} results</div>
            <div>
                {renderBookList(booksData)}
            </div>
        </div>
    )
}

export default BookList
