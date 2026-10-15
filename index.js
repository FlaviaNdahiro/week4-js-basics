1.// square

const square = n => n * n;

console.log(square(5)); // 25
console.log(square(3)); // 9

2.//isEven(n)

function isEven(n) {
    return n % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false

3.//Celsius and Fahrenheit conversion

function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

console.log(celsiusToFahrenheit(25)); // 77
console.log(fahrenheitToCelsius(77)); // 25

4.//formatPrice(amount, currency = "RWF"

function formatPrice(amount, currency = "RWF") {
    return amount.toLocaleString("en-US", {
        style: "currency",
        currency: currency
    });
}

console.log(formatPrice(5000)); // RWF 5,000.00 (format may vary)
console.log(formatPrice(2500, "USD")); // $2,500.00

5.// getGrade(score)

function getGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid score";
    }

    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(85));  // A
console.log(getGrade(75));  // B
console.log(getGrade(45));  // F
console.log(getGrade(120)); // Invalid score

6.// max(...numbers) — Without Math.max()

function max(...numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    let largest = numbers[0];

    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

console.log(max(10, 25, 8, 40, 15)); // 40
console.log(max(3, 7, 2));           // 7

7.// capitalize(word)

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(capitalize("kigali")); // Kigali
console.log(capitalize("rwanda")); // Rwanda

8.// countVowels(text) — Case-insensitive

function countVowels(text) {
    let count = 0;

    for (let letter of text.toLowerCase()) {
        if ("aeiou".includes(letter)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Kigali"));       // 3
console.log(countVowels("EDUCATION"));    // 5
console.log(countVowels("JavaScript"));   // 3

9.// isPalindrome(word)

function isPalindrome(word) {
    let reversed = word.split("").reverse().join("");

    return word.toLowerCase() === reversed.toLowerCase();
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("level"));   // true
console.log(isPalindrome("hello"));   // false

10.// repeatAction(times, callback)

function repeatAction(times, callback) {
    for (let round = 1; round <= times; round++) {
        callback(round);
    }
}

repeatAction(5, function(round) {
    console.log("Round " + round);
});

11.// createCounter(start = 0) — Using a closure

function createCounter(start = 0) {
    let count = start;

    return {
        increment: function() {
            count++;
            return count;
        },

        decrement: function() {
            count--;
            return count;
        },

        getValue: function() {
            return count;
        }
    };
}

const counter = createCounter(5);

console.log(counter.getValue());  // 5
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.getValue());  // 6

12.// makeDiscount(percent) — Returns a function

function makeDiscount(percent) {
    return function(price) {
        return price - (price * percent / 100);
    };
}

const discount10 = makeDiscount(10);
const discount20 = makeDiscount(20);

console.log(discount10(10000)); // 9000
console.log(discount20(10000)); // 8000
console.log(discount10(5000));  // 4500

