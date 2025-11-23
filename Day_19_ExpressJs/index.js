// here we can create a express js based webserver for demonstrating webserver 

//Step 1: creating a ref
//Step 2: defining app.get()
//Step 3: defining app.listen()
//Step 4: Executing the file 


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Express.js!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

