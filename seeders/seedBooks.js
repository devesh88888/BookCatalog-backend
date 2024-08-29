//seeders/seedBooks.js
require('dotenv').config();

const mongoose = require('mongoose');
const Book = require('../models/Book');
const connectDB = require('../config/db');

connectDB();

const seedBooks = async () => {
  try {
    await Book.deleteMany(); // Clear existing books
    const books = [
      { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
      { title: 'Moby Dick', author: 'Herman Melville' },
    ];
    await Book.insertMany(books); // Insert new books
    console.log('Books seeded');
  } catch (error) {
    console.error('Error seeding books:', error);
  } finally {
    mongoose.connection.close(); // Ensure connection is closed
  }
};

seedBooks();
