//routes/bookRoutes
const express = require('express');
const router = express.Router();
const { getBooks, addBook, toggleFavorite,getFavoriteBooks } = require('../controllers/bookController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', authenticateToken, getBooks);
router.get('/favorite',authenticateToken , getFavoriteBooks)
router.post('/', authenticateToken, addBook);
router.post('/toggle-favorite', authenticateToken, toggleFavorite);

module.exports = router;
