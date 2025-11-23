// this file will take careof validation rules for user related operations( Check(), body() , param() 
// etc from express-validator can be used here)

// Step 1: Import necessary modules from express-validator.
// Step 2: Define validation chains for different user operations (e.g., registration, login).
// Step 3: Export the validation rules for use in route definitions.

const { body } = require('express-validator'); // Importing body function from express-validator

// Validation rules for user registration
const registerValidationRules = [
    body('username')
        .isAlphanumeric().withMessage('Username must be alphanumeric')  
        .isLength({ min: 3, max: 30 }).withMessage('Username must be between 3 and 30 characters'),
    body('email')
        .isEmail().withMessage('Invalid email address'),
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

module.exports = {
    registerValidationRules
};
// Explanation of the code:
// 1. We import the body function from express-validator to define validation rules for request bodies.
// 2. We create an array registerValidationRules that contains validation chains for username, email, and password fields.
// 3. We export the registerValidationRules for use in route definitions where user registration is handled.