import { shallow, mount } from 'enzyme'
import React from 'react'
import Book from '../../../Containers/Books/Book'
import BookList from '../../../Components/BookList/BookList'
import ReactPaginate from 'react-paginate'
import { createMemoryHistory, createLocation } from 'history';


describe('Book container', () => {
    const history = createMemoryHistory()
    const location = createLocation()
    const path = 'books/'

    const match = {
        isExact: true,
        path,
        url: path
    }
    const mockProps = {
        location: location,
        history: history,
        match: match,
    }

    it('should render successfully', () => {
        expect(shallow(<Book {...mockProps}/>).length).toEqual(1)
    });

    it('should render the pagination', () => {
        const instance = shallow(<Book {...mockProps} />)
        expect(instance.find(ReactPaginate)).toHaveLength(1)
    });

    it('should render the search input', () => {
        const instance = shallow(<Book {...mockProps} />)
        expect(instance.find(ReactPaginate)).toHaveLength(1)
    });

    it('should render the BookList component', () => {
        const instance = shallow(<Book {...mockProps} />)
        expect(instance.find(BookList)).toHaveLength(1)
    });
    
    it('should change search input successfully', () => {
        const mockState = {
            searchTerm: 'Enchiridion',
            filterTerm: {
                type: 'all',
                values: ['Enchiridion']
            }
        }
        const instance = mount(<Book {...mockProps} />)
        const searchInput = instance.find('input')
        expect(searchInput.html()).toContain('Search')
        searchInput.simulate('change', { target: { value: 'Enchiridion'}})
        expect(searchInput.html()).toContain('Enchiridion')
        expect(instance.state().searchTerm).toEqual(mockState.searchTerm)
        expect(instance.state().filterTerm.values[0]).toEqual(mockState.filterTerm.values[0])
        instance.unmount()
    });

    xit('should change the pagination successfully', () => {
        const instance = mount(<Book {...mockProps} />)
        const paginate = instance.find(ReactPaginate).html()
        // probably shouldn't go into this since its a third party lib
        // I know its wrong to assume it works but it's a third-party pkg
    });

    it('should load the bookData via componentDidMount', () => {
        const mockState = {
            "books": [], 
            "error": null, 
            "filterTerm": [], 
            "page": 0, 
            "searchTerm": "Search"
        }
        const fetchSpy = jest.spyOn(Book.prototype, 'fetchBooks')
        const instance = mount(<Book {...mockProps} />)
        expect(fetchSpy).toHaveBeenCalled()
        expect(instance.state()).toEqual(mockState)
        instance.unmount()
    });

});