const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./routes');

//DECLARING LOCAL/ENV PORT TO LISTEN ON
const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useFindAndModify: true
}); 

app.use(routes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});