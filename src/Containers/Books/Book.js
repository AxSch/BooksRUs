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
            filterTerm: [],
            searchTerm: "Search"
        }
    }

    async fetchBooks(pageNo, filters) {
        try {
            if (pageNo + 1 === 0) {
                pageNo = 1
            } else {
                pageNo += 1
            }
            const reqBody = {
                page: pageNo,
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

    changePage(e) {
        const { filterTerm, searchTerm } = this.state
        const { history } = this.props
        const selectedPage = e["selected"]

        if (filterTerm !== [] && searchTerm !== "Search") {
            this.setState({ page: selectedPage })
            this.fetchBooks(selectedPage, [filterTerm])
            if (filterTerm["values"][0] === "") {
                history.push({
                    pathname: "/books",
                    search: "?" + new URLSearchParams({ page: selectedPage + 1 }).toString()
                })
            } else {
                history.push({
                    pathname: "/books",
                    search: "?" + new URLSearchParams({ page: selectedPage + 1, filterBy: filterTerm['values'][0] }).toString()
                })
            }
        } else {
            this.setState({ page: selectedPage })
            this.fetchBooks(selectedPage, [])
            history.push({
                pathname: "/books",
                search: "?" + new URLSearchParams({ page: selectedPage + 1 }).toString()
            })
        }
    }

    onSearch(e) {
        e.preventDefault()
        const { history } = this.props
        const filter = {
            type: "all",
            values: [e.target.value]
        }

        this.setState({ filterTerm: filter, searchTerm: e.target.value })
        this.fetchBooks(0, [filter])
        history.push({
            pathname: '/books',
            search: "?" + new URLSearchParams({ page: 1, filterBy: e.target.value }).toString()
        })
    }

    componentDidMount() {
        const { page } = this.state
        const { location } = this.props
        const pageNo = Number(new URLSearchParams(location.search).get("page")) - 1
        const filterVal = new URLSearchParams(location.search).get("filterBy")
        const filter = {
            type: "all",
            values: []
        }

        if (filterVal !== null) {
            this.setState({ searchTerm: filterVal })
            this.setState({ filterTerm: filter })
            filter["values"] = [filterVal]
            this.fetchBooks(pageNo !== null ? pageNo : page, [filter])
        } else {
            this.fetchBooks(pageNo !== null ? pageNo : page, [])
        }

    }

    render() {
        const { books, page, searchTerm } = this.state
        let renderBooks

        if (books.length !== 0) {
            renderBooks = <BookList booksData={books} />
        } else {
            renderBooks = <div className="flex flex-row justify-center text-gray-700 text-xl">No more results to show</div>
        }
        return (
            <div className="container w-full">
                <div className="flex flex-row p-4 bg-primary justify-between w-screen items-center">
                    <div>
                        <h1 className="text-2xl text-white font-display ml-4">Books R Us</h1>
                    </div>
                    <div className="bg-secondary rounded-md mr-2">
                        <input className="rounded-md p-2" type="text" onChange={(e) => this.onSearch(e)} placeholder={searchTerm} value={searchTerm} />
                    </div>
                </div>
                <div className="flex flex-row justify-end xl:w-screen">
                    <ReactPaginate 
                        pageCount={122} 
                        pageRangeDisplayed={5} 
                        marginPagesDisplayed={2} 
                        initialPage={page} 
                        disableInitialCallback={true} 
                        onPageChange={(e) => this.changePage(e)}
                        pageClassName="hover:bg-accent rounded-md bg-secondary p-2 m-1"
                        activeClassName="rounded-md bg-accent"
                        containerClassName="flex flex-row m-4 p-2 items-center flex-wrap xl:justify-end"
                        nextClassName="hover:bg-accent bg-secondary rounded-md m-1 p-2"
                        previousClassName="hover:bg-accent bg-secondary rounded-md m-1 p-2"
                    />
                </div>
                {renderBooks}
            </div>
        )
    }
}

export default Book
