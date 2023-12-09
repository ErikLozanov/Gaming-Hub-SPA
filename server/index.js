require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 60000, // Increase the timeout to 60 seconds
  poolSize: 1, // Temporarily set poolSize to 1
})
  .then(() => {
    console.log('DB Connected');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

const corsOptions = {
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  origin: 'https://gaminghub-95a5e.web.app',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
