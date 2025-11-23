// for creating  clean code and modular structure we have created seprate schema.js file

//Here we will define schema :

const joi = require('joi');//importing joi package
//defining schema for user registration
const registerSchema = joi.object({
    username: joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    confirmPassword: joi.ref('password')
}).with('password', 'confirmPassword');

module.exports = { registerSchema };

//regular expression explanation:
// ^[a-zA-Z0-9]{3,30}$
// ^ asserts position at start of the string
// [a-zA-Z0-9] matches any alphanumeric character
// {3,30} specifies that the preceding element must occur between 3 and 30 times
// $ asserts position at end of the string