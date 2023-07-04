// ========= UNIT TEST
// ========= MOCKING ==
const BooksService = require('./books.service');

// FAKE
const { generateManyBooks } = require('../fakes/book.fake');
// SPIES
const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll, // STUB
  create: () => {},
})));
describe('Test for BooksService', () => {
  let service;
  beforeEach(async () => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('should return list book', async () => {
      // ARANGE
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // ACT
      const books = await service.getBooks({});
      console.log(books);
      // ASSERT
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list book', async () => {
      // ARANGE
      const fakeBooks = generateManyBooks(4);

      mockGetAll.mockResolvedValue(fakeBooks);
      // ACT
      const books = await service.getBooks({});
      console.log(books);
      // ASSERT
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
