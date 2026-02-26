const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// 1. Load environment variables
dotenv.config();

// 2. Connect to Database
connectDB();

const app = express();

// 3. Middleware
app.use(cors()); // Allows your frontend to communicate with this backend
app.use(express.json()); // Allows the server to accept JSON data in the body
app.use('/api/auth', authRoutes);
app.use(express.urlencoded({ extended: false }));

// 4. Basic Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// 5. Define Port and Listen
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});