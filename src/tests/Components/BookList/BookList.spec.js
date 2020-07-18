import { shallow } from 'enzyme'
import React from 'react'
import BookList from '../../../Components/BookList/BookList'
import BookListItem from '../../../Components/BookListItem/BookListItem'


describe('BookList component', () => {
    const mockBookData = [
        {
            "id":2086,
            "book_author":["Ανώνυμος"],
            "book_title":"Ο Αλέξανδρος ο Μακεδών",
            "book_publication_year":1529,
            "book_publication_country":"Ιταλία",
            "book_publication_city":"Βενετία",
            "book_pages":104
        },
        {
            "id":2091,
            "book_author":["Homer J."],
            "book_title":"Homer, The Home I never Knew",
            "book_publication_year": 1998,
            "book_publication_country":"US",
            "book_publication_city":"Springfield",
            "book_pages":15
        },
        {
            "id":1290,
            "book_author":["Randy M."],
            "book_title":"Just a Bunch of Witches",
            "book_publication_year":2018,
            "book_publication_country":"US",
            "book_publication_city":"South Park",
            "book_pages": 120
        },
    ]
    
    it('should render successfully', () => {
        expect(shallow(<BookList booksData={mockBookData} />).length).toEqual(1)
    });
    
    it('render a list of books correctly - less than or equal to 10', () => {
        const instance = shallow(<BookList booksData={mockBookData} />)
        expect(instance.find('#results').html()).toContain('Showing 3 results')
        expect(instance.find('#list10').children()).toHaveLength(3)
        expect(instance.find('#list10').find(BookListItem)).toHaveLength(3)
    });

    it('render a list of books correctly - no books', () => {
        const instance = shallow(<BookList booksData={[]} />)
        expect(instance.find('#results').html()).toContain('Showing 0 results')
        expect(instance.find('#list10').children()).toHaveLength(1)
        expect(instance.find('#list10').children().html()).toContain('No more results to show')
        expect(instance.find('#list10').find(BookListItem)).toHaveLength(0)
    });

    it('render a list of books correctly - more than 10', () => {
        const mockBookData20 = [
            {
                "id":2086,
                "book_author":["Ανώνυμος"],
                "book_title":"Ο Αλέξανδρος ο Μακεδών",
                "book_publication_year":1529,
                "book_publication_country":"Ιταλία",
                "book_publication_city":"Βενετία",
                "book_pages":104
            },
            {
                "id":2091,
                "book_author":["Homer J."],
                "book_title":"The Homer, I never knew",
                "book_publication_year": 1998,
                "book_publication_country":"US",
                "book_publication_city":"Springfield",
                "book_pages":15
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
            {
                "id":1290,
                "book_author":["Randy M."],
                "book_title":"Just a Bunch of Witches",
                "book_publication_year":2018,
                "book_publication_country":"US",
                "book_publication_city":"South Park",
                "book_pages": 120
            },
        ]
        const instance = shallow(<BookList booksData={mockBookData20} />)
        expect(instance.find('#results').html()).toContain('Showing 20 results')
        expect(instance.find('#list10-1').children()).toHaveLength(10)
        expect(instance.find('#list10-2').children()).toHaveLength(10)
        expect(instance.find('#list10-1').find(BookListItem)).toHaveLength(10)
        expect(instance.find('#list10-2').find(BookListItem)).toHaveLength(10)
    });
})