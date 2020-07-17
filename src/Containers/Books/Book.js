import React, { Component } from 'react'
import BookList from '../../Components/BookList/BookList'
import ReactPaginate from 'react-paginate'

class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            page: 0,
            error: null,
        }
    }

    async fetchBooks(pageNo, filters) {
        try {
            const reqBody = {
                page: pageNo + 1,
                itemsPerPage: 20,
                filters: filters
            }
            const books = await fetch('http://nyx.vima.ekt.gr:3000/api/books/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqBody)
            })
            const data = await books.json()
            this.setState({ books: data.books })
        } catch (error) {
            this.setState({ error: JSON.stringify(error) })
        }

    }

    componentDidMount() {
        const { page } = this.state
        this.fetchBooks(page, [])
        
    }

    render() {
        const { books, page } = this.state
        let renderBooks
        
        if (books.length !== 0) {
            renderBooks = <BookList booksData={books} />
        } else {
            renderBooks = <div>No more results to show</div>
        }
        return (
            <div>
                <div>
                    <ReactPaginate pageCount={122} pageRangeDisplayed={5} marginPagesDisplayed={2} initialPage={page} disableInitialCallback={true} onPageChange={(e) => this.changePage(e)} />
                </div>
                {renderBooks}
            </div>
        )
    }
}

export default Book
