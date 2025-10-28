// Here we will define some mathematical utility functions using ES6 features
// with the help of arrow functions and export them for use in other modules

// Function to calculate the square of a number
export const square = (x) => x * x;

// Function to calculate the cube of a number
export const cube = (x) => x * x * x;
// Function to calculate the factorial of a number using recursion
export const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};  
// Function to calculate the power of a number
export const power = (base, exponent) => {
    return base ** exponent;
};