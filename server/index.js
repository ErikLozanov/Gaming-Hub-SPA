require('dotenv').config(); // If using environment variables

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/games';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB Connected');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// CORS configuration
const corsOptions = {
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  origin: 'https://gaminghub-95a5e.web.app',
  credentials: true,
};

app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
