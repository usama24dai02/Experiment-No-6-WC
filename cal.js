const readline = require("readline");

// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function for calculator
function calculator() {
    rl.question("Enter first number: ", function (num1) {
        rl.question("Enter operator (+, -, *, /): ", function (operator) {
            rl.question("Enter second number: ", function (num2) {

                const a = parseFloat(num1);
                const b = parseFloat(num2);
                let result;

                switch (operator) {
                    case '+':
                        result = a + b;
                        break;
                    case '-':
                        result = a - b;
                        break;
                    case '*':
                        result = a * b;
                        break;
                    case '/':
                        result = b !== 0 ? a / b : "Error: Division by zero!";
                        break;
                    default:
                        result = "Invalid operator!";
                }

                console.log(`Result: ${result}`);
                rl.close();
            });
        });
    });
}

calculator();
