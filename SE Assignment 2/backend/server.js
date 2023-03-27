const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');



// const DB_URL = 'mongodb://127.0.0.1:27017/test';
const DB_URL = 'mongodb+srv://ace906245:admin1234@cluster0.wvo19nr.mongodb.net/?retryWrites=true&w=majority';
const { routes } = require('./route');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect to MongoDB
mongoose
    .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch((err) => console.log(err));



routes(app);

app.listen(5001, () => console.log('Server started on port 5001'));
