
/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let gender
let male
let female
let isMale = true

gender = isMale ? male : female
console.log("its a " + gender)


/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let z = 6
let y = 2
let subtraction = z - y 
let addition = z + y
let resultz = z + 0
let resulty = y + 0

if(subtraction === 8){
    console.log (true)
}else if(addition === 8){
    console.log (true)
}else {console.log( false)
}

if(  resultz === 8){
    console.log (true)
}else if(resulty === 8){
    console.log (true)
}else {console.log( false)
}



/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/

const concatenation = "string1" + 65

console.log(concatenation) // "string165"

/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/

let number1 = 60
let number2 = 80
let total = number1 + number2
let average = total / 2
console.log (average)


/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/

let string1 = "is this string longer?"
let string2 = "or is this string longer?"
let longestString = " "
string1.length > string2.length ? longestString=string1 : longestString=string2

console.log(longestString)
/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let integer = 8
let end = parseInt (integer)
if(end===NaN){console.log("not an integer")}
else{console.log("is an integer")}

/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let number5 = 70
let percent = 50
let percentage = (number5 * percent)/100
console.log(percentage)

/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

const number = 29

const isEven = number % 2 === 0

if (isEven) {
    console.log("Number is even")
} else {
    console.log("Number is odd")
}


/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/