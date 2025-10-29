// This is a typescript file that prints "Hello, World!" to the console with the help of a function

function greet(name: string): string {
    return `Hello, ${name}!`;
}
const Message: string = greet("World");
console.log(Message);

// every declaration has its type defined explicitly ie function parameter 'name' is of type string and return type of function is also string