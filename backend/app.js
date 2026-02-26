const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const enrollRoutes = require('./routes/enrollRoutes');

// 1. Load environment variables
dotenv.config();

// 2. Connect to Database
connectDB();

const app = express();

// 3. Middleware (Corrected Order)
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

// 4. Routes
app.use('/api/auth', authRoutes);
app.use('/api/enroll', enrollRoutes);

// 5. Basic Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// 6. Define Port and Listen
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});