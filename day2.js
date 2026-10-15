/*
Exercise 1: Even or Odd
Pseudocode:
- Start with a number.
- If the number divided by 2 has remainder 0, print "even".
- Otherwise, print "odd".
*/

const number = 7;

if (number % 2 === 0) {
    console.log("Exercise 1:", "even");
} else {
    console.log("Exercise 1:", "odd");
}

/*
Exercise 2: Grade Calculator
Pseudocode:
- Start with a score between 0 and 100.
- If the score is outside this range, print "Invalid score" and stop.
- If the score is 80 or above, print A.
- Otherwise, check B, C, D, and F in order.
*/

function calculateGrade(score) {
    if (score < 0 || score > 100) {
        console.log("Exercise 2:", "Invalid score");
        return;
    }

    if (score >= 80) {
        console.log("Exercise 2:", "Grade A");
    } else if (score >= 70) {
        console.log("Exercise 2:", "Grade B");
    } else if (score >= 60) {
        console.log("Exercise 2:", "Grade C");
    } else if (score >= 50) {
        console.log("Exercise 2:", "Grade D");
    } else {
        console.log("Exercise 2:", "Grade F");
    }
}
