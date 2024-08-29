//app.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();

connectDB();

app.use(cors({
    origin: ["https://book-catalog-frontend-zeta.vercel.app"],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}));
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
