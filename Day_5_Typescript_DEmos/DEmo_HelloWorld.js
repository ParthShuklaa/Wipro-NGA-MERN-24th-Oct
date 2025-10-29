// This is a typescript file that prints "Hello, World!" to the console with the help of a function
function greet(name) {
    return "Hello, ".concat(name, "!");
}
var Message = greet("World");
console.log(Message);
// every declaration has its type defined explicitly ie function parameter 'name' is of type string and return type of function is also string
