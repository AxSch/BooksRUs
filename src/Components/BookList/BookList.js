import React from 'react'
import BookListItem from '../BookListItem/BookListItem'

const BookList = ({ booksData }) => {
    const bookArr1 = []
    const bookArr2 = []
    const renderBookList = booksData => {
        if (booksData.length > 0) {
            return booksData.map((book, key) => {
                return (
                    <BookListItem book={book} key={key} />
                )
            })
        } else {
            return (
                <div className="flex flex-row justify-end lg:flex lg:flex-col lg:items-center text-gray-700 text-xl">
                    No more results to show
                </div>
            )
        }
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
        <div className="flex flex-col justify-end xl:w-screen flex-wrap items-center">
            <div id="results" className="flex flex-row mr-10 md:mr-8 justify-end w-full pr-8">Showing {booksData.length} results</div>
            <div className="pb-6 lg:flex lg:flex-row lg:flex-wrap">
                {booksData.length <= 10 ?
                    <div id="list10" className="hidden lg:flex lg:flex-col xl:w-screen">
                        {renderBookList(bookArr1)}
                    </div>
                    : 
                    <div id="list10-1" className="hidden pl-4 lg:flex lg:flex-col lg:flex-1 xl:w-screen">
                        {renderBookList(bookArr1)}
                    </div>
                }
                <div id="list10-2" className="hidden pr-4 mr-8 lg:flex lg:flex-col lg:flex-1 xl:w-screen">
                    {booksData.length > 0 ? renderBookList(bookArr2) : ''}
                </div>
                <div className="pr-4 mr-4 lg:hidden">
                    {renderBookList(booksData)}
                </div>
            </div>
        </div>
    )
}

export default BookList
