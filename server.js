const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 5000;
const items = require('./routes/api/items');


const app = express();

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Bodyparser Middleware
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Connect to mongoose
const connectionString = 'mongodb+srv://admin:admin@cluster1.5lmjq.mongodb.net/fish?retryWrites=true&w=majority'
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => console.log("MongoDB Connected"))
    .catch(error => console.log(error))

// Use Routes
app.use('/api/items', items);



app.listen(port, () => console.log("Server started on port "+ port));