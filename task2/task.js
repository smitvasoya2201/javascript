console.log("Task module loaded successfully.");

alert("welcome to my calculator ");
var flag = true;
while (flag) {
    var num1 = Number(prompt("Enter the first number:"));
    var num2 = Number(prompt("Enter the second number:"));

    var operation = Number(prompt("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\nEnter the number corresponding to the operation you want to perform:"));

    switch (operation) {
        case 1:
            alert(`The result of addition ${num1} and ${num2}  is: ${num1 + num2}`);
            break;
        case 2:
            alert(`The result of subtraction ${num1} and ${num2}  is: ${num1 - num2}`);
            break;
        case 3:
            alert(`The result of multiplication ${num1} and ${num2}  is: ${num1 * num2}`);
            break;
        case 4:
            alert(`The result of division ${num1} and ${num2}  is: ${num1 / num2}`);
            break;
    }
    flag = confirm("Do you want to perform another operation?");
}