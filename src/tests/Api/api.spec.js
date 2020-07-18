import fetchBooksAPI from '../../Api/api';

describe('fetchBooksAPI', () => {
    it('should call the endpoint & successfully retrieve the results', () => {
        const mockData = {
            page: 0,
            filter: []
        }
        expect.assertions(2)
        return fetchBooksAPI(mockData.page, mockData.filter).then(data => {
            expect(data.books.length).toEqual(20)
            expect(data.count).toEqual(2425)
        })
    }, 3000);
    
    it('should call the endpoint & fail to retrieve the results', () => {
        expect.assertions(1)
        const mockData = {
            page: -2,
            filter: []
        }
        expect.assertions(2)
        return fetchBooksAPI(mockData.page, mockData.filter).then(data => {
            expect(data.books).toEqual(undefined)
            expect(() => {throw new Error()}).toThrow()
        })
    });

    it('should call the endpoint & successfully retrieve the results with filter', () => {
        const mockData = {
            page: 0,
            filter: [{
                type: 'all',
                values: ['ench']
            }]
        }
        expect.assertions(2)
        return fetchBooksAPI(mockData.page, mockData.filter).then(data => {
            expect(data.books.length).toEqual(6)
            expect(data.count).toEqual(6)
        }) 
    }, 3000);
});