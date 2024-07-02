const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const server = express();
const PORT = 5000;

server.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/expressAuthRBAC', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Use routes
server.use('/api/users', userRoutes);

server.listen(PORT, () => {
    console.log(`SERVER IS WORKING`);
});
