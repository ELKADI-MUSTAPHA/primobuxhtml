const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const contactRoute = require('./routes/contactRouter');

// connect to mongodb
// const dbURI = 'mongodb+srv://ELKADIDEV:ktCdRHr3uVQMqwm@cluster0.wkwsd.mongodb.net/ccf-contact?retryWrites=true&w=majority';
const dbURI = 'mongodb://localhost:27017';

mongoose.connect(dbURI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => console.log('connect to db'))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


// listen
app.listen(3030, function() {
    console.log('Lestening on port ' + 3030);
});

// Midddleware an static file 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.use('/', contactRoute);

