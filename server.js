const express = require('express');
const mongoose = require('mongoose');

//DECLARING LOCAL/ENV PORT TO LISTEN ON
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false
}); 

//TODO- FINISH ROUTES AND FIX REQUIRE PATH
// app.use(require('./routes/'));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});