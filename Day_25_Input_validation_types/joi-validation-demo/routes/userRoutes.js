// userRoutes.js is reisponsible for defining user-related routes and applying validation middleware
//Step 1: Import necessary modules including Express, the validation middleware, and any controllers.
//Step 2: Create an Express router instance.
//Step 3: Define routes for user operations (e.g., registration) and apply the validation middleware.
//Step 4: Export the router for use in the main application.

const express = require('express'); // Importing Express package
const { validateRegister } = require('../joi/joiMiddleware'); //importing validation middleware
const router = express.Router(); // Creating an Express router instance 
// Controller function for user registration (for demonstration purposes)
const registerUser = (req, res) => {
    // In a real application, you would handle user registration logic here
    res.status(201).json({ message: 'User registered successfully', user: req.body });
};
router.post('/register', validateRegister, registerUser); // Defining the registration route with validation middleware
module.exports = router; // Exporting the router for use in the main application



// Explanation of the code:
// 1. We import the Express package and the validateRegister middleware from joiMiddleware.js.
// 2. We create an Express router instance.
// 3. We define a POST route for user registration that uses the validateRegister middleware to validate incoming data.
// 4. We export the router for integration into the main application.