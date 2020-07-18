import { shallow } from 'enzyme'
import React from 'react'
import BookListItem from '../../../Components/BookListItem/BookListItem'


describe('BookListItem component', () => {
    const mockBook = {
        "id":2091,
        "book_author":["Homer J."],
        "book_title":"Homer, Homer, The Home I never Knew",
        "book_publication_year": 1998,
        "book_publication_country":"US",
        "book_publication_city":"Springfield",
        "book_pages":15
    }

    it('renders successfully', () => {
        expect(shallow(<BookListItem book={mockBook} />).length).toEqual(1)
    });

    it('renders book correctly', () => {
        const instance = shallow(<BookListItem book={mockBook} />)
        expect(instance.find('h1').html()).toContain('Homer, The Home I never Knew')
        expect(instance.find('#bookAuthor').html()).toContain('Homer J.')
        expect(instance.find('#metadata').children()).toHaveLength(4)
    });
})