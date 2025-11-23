// here we will define middleware functions for validating requests using Joi schemas based on following steps 
// Step 1: Import necessary modules like Joi and the schema file.
// Step 2: Create middleware functions that validate incoming request data against the defined Joi schemas.
// Step 3: Handle validation errors and pass them to the next middleware or return a response.
// Step 4: Export the middleware functions for use in route definitions.


const joi = require('joi'); // Importing Joi package
const { registerSchema } = require('./schema'); // Importing the schema defined in schema.js    

// Middleware function for validating user registration data
const validateRegister = (req, res, next) => {
    const { error } = registerSchema.validate(req.body); // Validating request body against the registerSchema
    if (error) {
        // If validation fails, send a 400 response with the error details
        return res.status(400).json({ error: error.details[0].message });
    }   
    next(); // If validation passes, proceed to the next middleware or route handler 
}

module.exports = { validateRegister };  

// Explanation of the code:
// 1. We import the Joi package and the registerSchema from the schema.js file.
// 2. We define a middleware function validateRegister that takes req, res, and next as parameters.