//1
function halfNumber(num) {
    "use strict";

    if (isNaN(num)) {
        window.console.log("Not a valid number.");
        throw new Error("Not a valid number.");
    } else {
        var result = num / 2;
        window.console.log("Half of " + String(num) + " is " + String(result) + ".");
        return result;
    }
}

halfNumber(5);
halfNumber(20);


//2
function squareNumber(num) {
    "use strict";

    if (isNaN(num)) {
        window.console.log("Not a valid number.");
        throw new Error("Not a valid number.");
    } else {
        var result = num * num;
        window.console.log("The result of squaring the number " + String(num) + " is " + String(result) + ".");
        return result;
    }
}

squareNumber(3);
squareNumber(10);


//3
function percentOf(num1, num2) {
    "use strict";

    if (isNaN(num1) && isNaN(num2)) {
        window.console.log("Not a valid number.");
        throw new Error("Not a valid number.");
    } else {
        var result = Math.round(num1 / num2 * 100);
        window.console.log(String(num1) + " is " + String(result) + "% of " + String(num2) + ".");
        return result;
    }
}

percentOf(2, 4);
percentOf(1, 4);

//4
function findModulus(num1, num2) {
    "use strict";

    if (isNaN(num1) && isNaN(num2)) {
        window.console.log("Not a valid number.");
        throw new Error("Not a valid number.");
    } else {
        var result = num1 % num2;
        window.console.log(String(result) + " is the modulus of " + String(num1) + " and " + String(num2) + ".");
        return result;
    }
}

findModulus(4, 2);
findModulus(10, 5);

//5
function sumNumbers() {
    "use strict";
    var sum = 0;
    var numberCollection = window.prompt("Enter numbers delimited by commas");
    numberCollection = numberCollection.split(",");
    for (var i=0; i < numberCollection.length; i++) {
        sum += parseInt(numberCollection[i]);
    }

    window.console.log("Sum of the numbers in "+numberCollection + " is: " +String(sum));

    return sum;
}

sumNumbers();