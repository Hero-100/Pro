const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log(error));

// Test route
app.get('/test', (req, res) => {
    res.send('Server is working!');
});

// Product routes
app.use('/api/products', productRoutes);  // Ensure this line is present

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
