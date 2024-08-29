//controllers/bookController.js

const Book = require('../models/Book');

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a book
const addBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const newBook = new Book({ title, author });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Toggle favorite
const toggleFavorite = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id)
    const book = await Book.findById(id);
    if (!book) return res.status(404).send('Book not found');

    book.isFavorite = !book.isFavorite;
    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFavoriteBooks = async (req, res) => {
  try {
    const favoriteBooks = await Book.find({ isFavorite: true });
    res.status(200).json(favoriteBooks);
  } catch (error) {
    console.error('Error fetching favorite books:', error);
    res.status(500).json({ message: 'Error fetching favorite books' });
  }
};

module.exports = { getBooks, addBook, toggleFavorite ,getFavoriteBooks};
