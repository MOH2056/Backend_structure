const express = require('express');
const server = express();
const userRoutes = require('./routes/userroutes');
const PORT = 5000;
server.use(express.json());

server.use('/api/users', userroutes)

mongoose.connect('mongodb://localhost:27017/expressAuthRBAC')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

server.listen(PORT, () => {
    console.log("SERVER IS WORKING");
})
