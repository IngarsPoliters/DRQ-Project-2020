const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());


// Connect to mongoose
const connectionString = 'mongodb+srv://admin:admin@cluster1.5lmjq.mongodb.net/fishes?retryWrites=true&w=majority'
mongoose.connect(connectionString, { useNewUrlParser: true } )
    .then(() => console.log("MongoDB Connected"))
    .catch(error => console.log(error))

// Use Routes
app.use('/api/items', items);

const port = 5000;

app.listen(port, () => console.log("Server started on port "+ port));