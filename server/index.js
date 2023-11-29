const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/games')
.then(() => console.log('DB Connected'))
.catch(err => console.log(err));

app.use(express.urlencoded({extended: false}));
// express.json will get AJAX requests (JSON data)
app.use(express.json());
const corsOptions = {
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    origin: 'http://localhost:5173',
    credentials: true,
  };
  
  app.use(cors(corsOptions));

// app.use(auth);

// app.use((req, res, next) => {

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     res.setHeader('Access-Control-Allow-Headers', '*');

//     next();
// });


app.use(routes);
app.listen(3030, () => console.log('RESTful server is listening on port 3030'));
