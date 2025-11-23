// This file serves as the main entry point for the application where we will configure template rendering and set up routes.
// Below are the steps to achieve this:
//Step 1: Import necessary modules
//Step 2: Set up the Express application
//Step 3: Configure the template engine
//Step 4: Define routes to render templates
//Step 5: Start the server



const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs'); // Using EJS as the template engine

// Step 4: Define routes to render templates
app.get('/', (req, res) => {
    // Render the 'home' template and pass data to it
            // res.render('home', { name: 'James Bond', year: new Date().getFullYear() });
//Displaying name dynamically in the termplate 
    res.render('home', { name: 'Parth', year: new Date().getFullYear() });
});

// we can hard code the values or we can get dynamic values from database or other sources

// Step 5: Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});