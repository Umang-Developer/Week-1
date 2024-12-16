// Function to perform addition of multiple numbers
function add(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Function to perform subtraction of multiple numbers
function subtract(numbers) {
    return numbers.reduce((acc, num) => acc - num);
}

// Function to perform multiplication of multiple numbers
function multiply(numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}

// Function to perform division of multiple numbers
function divide(numbers) {
    return numbers.reduce((acc, num) => acc / num);
}

// Function to handle user input and operation selection
function calculate(operation, numbers) {
    switch (operation) {
        case 'add':
            return add(numbers);
        case 'subtract':
            return subtract(numbers);
        case 'multiply':
            return multiply(numbers);
        case 'divide':
            return divide(numbers);
        default:
            return 'Invalid operation';
    }
}

// Example usage
let numbers = [10, 5, 2];
console.log("Addition: " + calculate('add', numbers));
console.log("Subtraction: " + calculate('subtract', numbers));
console.log("Multiplication: " + calculate('multiply', numbers));
console.log("Division: " + calculate('divide', numbers));
