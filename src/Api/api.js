

const fetchBooksAPI= async(pageNo, filters) => {
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
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export default fetchBooksAPI