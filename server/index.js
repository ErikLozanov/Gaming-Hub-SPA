const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://gaming-hub-mongodb-server.onrender.com:27017/games';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB Connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.urlencoded({extended: false}));
// express.json will get AJAX requests (JSON data)
app.use(express.json());
// const corsOptions = {
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     origin: 'https://gaminghub-95a5e.web.app',
//     credentials: true,
//   };
  
//   app.use(cors(corsOptions));

app.use(cors({
  origin: 'https://gaminghub-95a5e.web.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

// app.use(auth);

// app.use((req, res, next) => {

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     res.setHeader('Access-Control-Allow-Headers', '*');

//     next();
// });


app.use(routes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
