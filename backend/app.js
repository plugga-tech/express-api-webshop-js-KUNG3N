const express = require('express');
const mongoose = require('mongoose');
const app = express();

const ordersRoutes = require('./routes/orders')
const productsRoutes = require('./routes/products');
const userRoutes = require('./routes/users');

// Middleware for parsing JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes which should handle requests
app.use('/api/orders', ordersRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/userDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Failed to connect to MongoDB:', error));

app.get('/', (req, res) => { 
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});