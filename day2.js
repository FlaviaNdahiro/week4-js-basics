// 1. Even or odd
let number = 7;

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

// 2. Grade calculator
let score = 85; // Defined score so it doesn't throw a ReferenceError

if (score < 0 || score > 100) {
    console.log("Invalid score");
} else if (score >= 80) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else if (score >= 60) {
    console.log("C");
} else if (score >= 50) {
    console.log("D");
} else {
    console.log("F");
}

// 3. Ticket price
let age = 22;
let isStudent = true;
let price;

if (age > 65) {
    price = 0;
} else if (age < 12) {
    price = 2000;
} else if (isStudent) {
    price = 3000;
} else {
    price = 5000;
}

console.log(price + " RWF");

// 4. Day planner using switch
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Learn HTML");
        break;
    case "Tuesday":
        console.log("Learn CSS");
        break;
    case "Wednesday":
        console.log("Practice JavaScript");
        break;
    case "Thursday":
        console.log("Work on projects");
        break;
    case "Friday":
        console.log("Review the week's lessons");
        break;
    case "Saturday":
    case "Sunday":
        console.log("No class");
        break;
    default:
        console.log("Invalid day");
}

// 5. Countdown
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Liftoff!");

// 6. Sum and average using for...of
let scores = [45, 78, 90, 62, 88];
let sum = 0;

for (let num of scores) {
    sum += num;
}

let average = sum / scores.length;

console.log("Sum:", sum);
console.log("Average:", average);

// 7. Find the number greater than 100 using break
let nums = [12, 45, 78, 120, 150, 200]; // Fixed array syntax

for (let num of nums) {
    if (num > 100) {
        console.log(num);
        break;
    }
}

// 8. Skip negative numbers using continue
let numbersList = [10, -5, 20, -8, 30, -2, 40];

for (let num of numbersList) {
    if (num < 0) {
        continue;
    }
    console.log(num);
}

// 9. Multiplication table: 7 × 1 to 7 × 12 
for (let i = 1; i <= 12; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}

// 10. FizzBuzz, with Kigali for multiples of 7
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 7 === 0) {
        console.log("Kigali");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}