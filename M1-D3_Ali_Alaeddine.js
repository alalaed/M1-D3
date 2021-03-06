/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

console.log("1. Datatypes are some form of content you can put into a container")
console.log("2. Numbers, strings, Boolean, undefined, and null")

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

console.log("A variable is the container that you can fill the datatypes you already have.")

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let sum = (12+20)
console.log ("3. let sum = 12+20 ,it gives:" + sum)


/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12
console.log ("4. let x = 12, it gives " + x)

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe"
console.log('5. let name = "John Doe", it gives: ' + name)

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let subtraction = 12 - x
console.log("6. let subtraction = 12 - x, it gives: " + subtraction)


/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john"
let name2 = "John"

if (name1 === name2) {
    console.log("7.true")
} else{
    console.log("7. false")
}

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/


if (x === 1) {
    x = "one"
}
    else if (x === 2) {
        x = "two"
    }

    else if (x === 3) {
        x = "three"
    }

    else if (x === 4) {
        x = "four"
    }

    else if (x === 5) {
        x = "five"
    }

    else if (x === 6) {
        x = "six"
    }

    else if (x === 7) {
        x = "seven"
    }

    else if (x === 8) {
        x = "eight"
    }

    else if (x === 9) {
        x = "nine"
    }

    else {
        x = "x is not a number between 1 and 9"
    }

console.log("8. it is " + x)





/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let time
let isOnTime = true
let onTime = 100
let delay = 50

time = isOnTime ? onTime : delay
console.log("9. " + time)

 

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/