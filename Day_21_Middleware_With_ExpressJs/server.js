// this file will have all server related code ie 
// express setup, routes, custom middleware and server start etc
// order of custom middleware and routes is important as it is executed in the order they are defined sequentially

// 1. import express
const express = require('express');

// Creating an express application instance
const app = express();

// 2. Middleware to parse JSON bodies with the built-in express middleware 
// express.json() and express.urlencoded()
// app.use is used to mount the middleware functions at the specified path
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Custom middleware example: here we have to log each request method and url unlike morgan or other logging libraries
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// 4. Define routes( these will go through middleware first )
// app.get() defines a route handler for GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// 5. Start the server and listen on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 

// for handling error we can define error handling middleware
// 6. Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// below flow of request is follwed in above code
// Client Request -> Custom Middleware logs request method and url and add requestTime property  -> Route Handler -> Response to Client