import React from 'react'
import BookListItem from '../BookListItem/BookListItem'

const BookList = ({ booksData }) => {
    const bookArr1 = []
    const bookArr2 = []
    const renderBookList = booksData => {
        return booksData.map((book, key) => {
            return (
                <BookListItem book={book} key={key} />
            )
        })
    }
    const renderBookGrid = booksData => {
        if (booksData.length > 10) {
           booksData.forEach(book => {
               if (bookArr1.length !== 10) {
                    bookArr1.push(book)
               } else {
                    bookArr2.push(book)
               }
           }); 
        } else {
            bookArr1.push(...booksData)
        }
    }
    renderBookGrid(booksData)
    return (
        <div className="flex flex-row justify-end xl:w-screen flex-wrap">
            <div className="flex flex-row mr-10 md:mr-8">Showing {booksData.length} results</div>
            <div className="pb-6 lg:flex lg:flex-row lg:flex-wrap">
                {booksData.length <= 10 ?
                    <div className="hidden lg:flex lg:flex-col xl:w-screen">
                        {renderBookList(bookArr1)}
                    </div>
                    : 
                    <div className="hidden pl-4 lg:flex lg:flex-col lg:flex-1 xl:w-screen">
                        {renderBookList(bookArr1)}
                    </div>
                }
                <div className="hidden pr-4 lg:flex lg:flex-col lg:flex-1 xl:w-screen">
                    {renderBookList(bookArr2)}
                </div>
                <div className="px-4 lg:hidden">
                    {renderBookList(booksData)}
                </div>
            </div>
        </div>
    )
}

export default BookList
