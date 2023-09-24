/* ***********"JAVASCRIPT QUESTIONS"**************
______________________________________________________________________

******************CHAPTER 20-40******************


***********-Chapter 21 (Changing Case):-***********

Question 1:
1.	Type the characters that are missing from this code.
var allLower = userInput.toLowerCase;

Answer:
var allLower = userInput.toLowerCase();

-----------------------------------------------------------------------

Question 2:
2.	Convert the string represented by x to lower-case and assign the result to the same variable.

Answer:
x = x.toLowerCase();

-----------------------------------------------------------------------

Question 3:
3.	Convert the string represented by y to upper-case and assign the result to the same variable.

Answer:
y = y.toUpperCase();

-----------------------------------------------------------------------

Question 4:
4.	Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand.

Answer:
Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand.

-----------------------------------------------------------------------

Question 5:
5.	Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand.

Answer:
let newVariable = array[index].toLowerCase();

-----------------------------------------------------------------------

Question 6:
6.	Display in an alert the upper-case version of the string represented by a variable.

Answer:
alert(variable.toUpperCase());

-----------------------------------------------------------------------

Question 7:
7.	var cityName = “kaRacHi”;
Convert the string represented by a cityName in Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase.

Answer:
cityName = cityName.toLowerCase().replace(/(^|\s)\S/g, function(letter) {
    return letter.toUpperCase();
});

______________________________________________________________________







***********-Chapter 22 - 25 (Strings):-***********

Question 1:
1.	"captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.

Answer:
var sameWords = "captain";
var sliced = sameWords.slice(1, 3);

-----------------------------------------------------------------------

Question 2:
2.	The number of characters in the string will be assigned to the variable.

Answer:
var stringVariable = "Your string here";
var length = stringVariable.length;

-----------------------------------------------------------------------

Question 3:
3.	The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand.

Answer:
var animal = "elephant";
var seg = animal.slice(3, 7);

-----------------------------------------------------------------------

Question 4:
4.	Find the number of characters in the string represented by a variable and assign the number to a second variable.

Answer:
var firstVariable = "Your string here";
var secondVariable = firstVariable.length;

-----------------------------------------------------------------------

Question 5:
5.	In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and assign it to a second variable that hasn't been declared beforehand.

Answer:
var firstVariable = "Your string here";
var length = firstVariable.length;

let secondVariable = firstVariable.slice(1, length - 3);

-----------------------------------------------------------------------

Question 6:
6.	var text = "To be or not to be.";
var indx = text.indexOf("be");
What is the value of indx?


Answer:
3
-----------------------------------------------------------------------

Question 7:
7.	var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
What is the value of indx?
Note: Try the above both examples by yourself.

Answer:
16
-----------------------------------------------------------------------

Question 8:
8.	Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand.

Answer:
let indx = text.lastIndexOf("go");

-----------------------------------------------------------------------

Question 9:
9.	Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string.

Answer:
if (str[indexNum] !== undefined) {

-----------------------------------------------------------------------

Question 10:
10.	In this string "abcde", what character is at index 2? (Use charAt)

Answer:
c
-----------------------------------------------------------------------

Question 11:
11.	Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand.

Answer:
let cha = text.charAt(9);

-----------------------------------------------------------------------

Question 12:
12.	Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand.

Answer:
let x = str.charAt(str.length - 1);

-----------------------------------------------------------------------

Question 13:
13.	Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.

Answer:
let cha = input.charAt(4);

-----------------------------------------------------------------------

Question 14:
1.	Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character.

Answer:
if (str.charAt(2) === char) {

-----------------------------------------------------------------------

Question 15:
15.	Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand.
In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand.

Answer:
for (var i = 0; i < str.length; i++) {
    arr[i] = str.charAt(i);
}
let revisedReply = reply.replace("no", "yes");

-----------------------------------------------------------------------

Question 16:
16.	In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.

Answer:
let newStr = str.replace("1", "one");

-----------------------------------------------------------------------

Question 17:
17.	If you want all instances replaced, enter 3 characters that need to appear in this statement.
var y = x.replace("a", "z");

Answer:
var y = x.replace(/a/g, "z");

______________________________________________________________________








***********-Chapter 26 (Rounding Numbers):-***********

Question 1:
1.	Form a statement that rounds a number to the nearest integer.

Answer:
var roundedNumber = Math.round(number);

-----------------------------------------------------------------------

Question 2:
2.	Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.

Answer:
let roundNum = Math.ceil(origNum);

-----------------------------------------------------------------------

Question 3:
3.	Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.

Answer:
let roundNum = Math.floor(origNum);

-----------------------------------------------------------------------

Question 4:
4.	Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.

Answer:
let roundedNum = Math.round(num);

-----------------------------------------------------------------------

Question 5:
5.	Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.

Answer:
let roundedNum = Math.floor(0.5);

______________________________________________________________________








***********-Chapter 27 (Random Numbers):-***********

Question 1:
1.	Convert a random number generated by JavaScript to a number in the range 1 to 50

Answer:
var num = Math.floor(Math.random() * 50) + 1;

-----------------------------------------------------------------------

Question 2:
2.	Generate a random number and assign it to a variable that hasn't been declared beforehand.

Answer:
var randomNumber = Math.random();
-----------------------------------------------------------------------

Question 3:
3.	You have to create a dice in JavaScript with the use of pseudo-random number.

Answer:
// Generate a random number between 1 and 6
var diceRoll = Math.floor(Math.random() * 6) + 1;

console.log("You rolled a " + diceRoll);

-----------------------------------------------------------------------

Question 4:
4.	You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number.

Answer:
// Generate a random number between 0 and 1
var toss = Math.random() < 0.5 ? "Heads" : "Tails";

console.log("The coin landed on " + toss);

______________________________________________________________________






***********-Chapter 28, 29 (Converting Strings):-***********

Question 1:
1.	How do you convert a string to an integer in JavaScript?

Answer:
var str = "123";
var num = parseInt(str);

console.log(num);  // Outputs: 123

-----------------------------------------------------------------------

Question 2:
2.	Write a JavaScript function to convert the string "123" to an integer.

Answer:
function convertStringToInt(str) {
    var num = parseInt(str);
    return num;
}

var str = "123";
console.log(convertStringToInt(str));  // Outputs: 123

-----------------------------------------------------------------------

Question 3:
3.	How can you convert a string containing a decimal number to a floating-point number in JavaScript?

Answer:
var str = "123.45";
var num = parseFloat(str);

console.log(num);  // Outputs: 123.45

-----------------------------------------------------------------------

Question 4:
4.	How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?

Answer:
function canConvertToNumber(str) {
    var num = parseFloat(str);
    return !isNaN(num);
}

var str1 = "123.45";
console.log(canConvertToNumber(str1));  // Outputs: true

var str2 = "Hello";
console.log(canConvertToNumber(str2));  // Outputs: false

-----------------------------------------------------------------------

Question 5:
5.	How can you convert a number to a string in JavaScript?

Answer:
var num = 123.45;
var str = num.toString();

console.log(str);  // Outputs: "123.45"

-----------------------------------------------------------------------

Question 6:
6.	Write a JavaScript function to convert the number 42 to a string.

Answer:
function convertNumberToString(num) {
    var str = num.toString();
    return str;
}

var num = 42;
console.log(convertNumberToString(num));  // Outputs: "42"

-----------------------------------------------------------------------

Question 7:
7.	Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how?

Answer:
var str = "3.14";
var num = parseInt(str);

console.log(num);  // Outputs: 3

______________________________________________________________________







***********-Chapter 30 (Controlling the length of decimals):-***********

Question 1:
1.	Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.

Answer:
var num = 3.14159;
var newNum = num.toFixed(4);

console.log(newNum);  // Outputs: "3.1416"

-----------------------------------------------------------------------

Question 2:
2.	In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable.

Answer:
var num = 3.14159;
num = Number(num.toFixed(2));

console.log(num);  // Outputs: 3.14

-----------------------------------------------------------------------

Question 3:
3.	Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.

Answer:
var num = 3.14159;
if (num.toFixed(2).length > 4) {
    // rest of the code
}

-----------------------------------------------------------------------

Question 4:
4.	Assign a number with many decimal places to a variable.
Code an alert that displays the number rounded to 2 decimal places and converted to a string.

Answer:
var num = 3.141592653589793;
alert(num.toFixed(2));

______________________________________________________________________








***********-Chapter 31 - 34 (Date & Time):-***********

Question 1:
1.	Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.

Answer:
var dObj = new Date();

-----------------------------------------------------------------------

Question 2:
2.	Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.

Answer:
var dObj = new Date();
var dStr = dObj.toString();

-----------------------------------------------------------------------

Question 3:
3.	Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.

Answer:
var d = new Date();
var day = d.getDay();

-----------------------------------------------------------------------

Question 4:
4.	The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index.

Answer:
var d = new Date();
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = dayNames[d.getDay()];

alert("Today is " + day);

-----------------------------------------------------------------------

Question 5:
5.	Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.

Answer:
var d = new Date();

var year = d.getFullYear();
var month = d.getMonth() + 1;  // Months are zero-based in JavaScript
var day = d.getDate();

var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
var milliseconds = d.getMilliseconds();

console.log("Year: " + year);
console.log("Month: " + month);
console.log("Day: " + day);
console.log("Hours: " + hours);
console.log("Minutes: " + minutes);
console.log("Seconds: " + seconds);
console.log("Milliseconds: " + milliseconds);

-----------------------------------------------------------------------

Question 6:
6.	Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand.

Answer:
var later = new Date(2020, 11, 31);

-----------------------------------------------------------------------

Question 7:
7.	Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.

Answer:
var date = new Date(1992, 1, 2);

-----------------------------------------------------------------------

Question 8:
8.	Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.

Answer:
var referenceDate = new Date();
var beginningOf1980 = new Date(1980, 0, 1);
var elapsedMilliseconds = referenceDate.getTime() - beginningOf1980.getTime();

alert("Milliseconds elapsed since the beginning of 1980: " + elapsedMilliseconds);

-----------------------------------------------------------------------

Question 9:
9.	How do you change the year of a date in JavaScript?

Answer:
var d = new Date();
console.log(d);  // Outputs the current date and time

d.setFullYear(2020);
console.log(d);  // Outputs the date and time with the year changed to 2020

-----------------------------------------------------------------------

Question 10:
10.	Write a JavaScript function to change the month of a given date to January.

Answer:
function changeMonthToJanuary(date) {
    date.setMonth(0);
    return date;
}

var d = new Date();
console.log(d);  // Outputs the current date and time

d = changeMonthToJanuary(d);
console.log(d);  // Outputs the date and time with the month changed to January

-----------------------------------------------------------------------

Question 11:
11.	What is the method to change the day of the week for a specific date in JavaScript?

Answer:
var d = new Date();
var currentDay = d.getDay();
var daysUntilNextSunday = (7 - currentDay) % 7;
d.setDate(d.getDate() + daysUntilNextSunday);

-----------------------------------------------------------------------

Question 12:
12.	Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)

Answer:
function changeMinutes(date, newMinutes) {
    date.setMinutes(newMinutes);
    return date;
}

var d = new Date();
console.log(d);  // Outputs the current date and time

// Prompt the user for the new minutes value
var newMinutes = prompt("Please enter the new minutes value:");
newMinutes = parseInt(newMinutes);

// Change the minutes of the date
d = changeMinutes(d, newMinutes);
console.log(d);  // Outputs the date and time with the minutes changed

-----------------------------------------------------------------------

Question 13:
13.	Write a JavaScript function to add a specific number of hours to a given time.

Answer:
function addHours(date, hours) {
    date.setHours(date.getHours() + hours);
    return date;
}

var d = new Date();
console.log(d);  // Outputs the current date and time

// Add 5 hours to the date
d = addHours(d, 5);
console.log(d);  // Outputs the date and time with 5 hours added

-----------------------------------------------------------------------

Question 14:
14.	You have to create a age calculator in JavaScript.

Answer:
function calculateAge(birthdate) {
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDifference = today.getMonth() - birthDate.getMonth();
    
    // Adjust the age if the current month is before the birth month or it's the birth month but before the day.
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

console.log(calculateAge('1990-01-01'));  // Replace '1990-01-01' with the actual birthdate

______________________________________________________________________






***********-Chapter 35 - 37 (Functions):-***********

Question 1:
1.	Code the first line of a function displayAlert.

Answer:
function displayAlert() {
    alert("Hello, World!");
}


-----------------------------------------------------------------------

Question 2:
2.	Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.

Answer:
function askName() {
    var userName = prompt("Enter name");
}

-----------------------------------------------------------------------

Question 3:
3.	Code a function that calls 2 other functions.

Answer:
function function1() {
    // Code for function1 goes here
    console.log("Function 1 is called");
}

function function2() {
    // Code for function2 goes here
    console.log("Function 2 is called");
}

function callFunctions() {
    function1();
    function2();
}

-----------------------------------------------------------------------

Question 4:
4.	Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.

Answer:
function displayUserName() {
    var userName = prompt("Enter name");
    alert("Hello, " + userName);
}
displayUserName();

-----------------------------------------------------------------------

Question 5:
5.	Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.

Answer:
function concat(a, b, c) {
var myVar = "Hello";
var myStr = "World";
var myNum = 2023;

concat(myVar, myStr, myNum);

-----------------------------------------------------------------------

Question 6:
6.	Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.

Answer:
function concatenate(param1, param2) {
    var result = param1 + param2;
}

-----------------------------------------------------------------------

Question 7:
7.	Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.

Answer:
function multiply(param1, param2, param3) {
    var result = param1 * param2 * param3;
}

-----------------------------------------------------------------------

Question 8:
8.	Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.

Answer:
function average(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var avg = sum / numbers.length;
    return avg;
}

-----------------------------------------------------------------------

Question 9:
9.	Write a JavaScript function that takes two parameters and returns their sum.

Answer:
function sum(num1, num2) {
    return num1 + num2;
}

-----------------------------------------------------------------------

Question 10:
10.	Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.

Answer:
function average(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var avg = sum / numbers.length;
    return avg;
}

-----------------------------------------------------------------------

Question 11:
11.	You have to capture the returned value from a function and store it in a variable?

Answer:
function addNumbers(num1, num2) {
    return num1 + num2;
}

var result = addNumbers(5, 10);

console.log(result);  // Outputs: 15

-----------------------------------------------------------------------

Question 12:
12.	Write a function which tells letter counts of (word).

Answer:
function letterCounts(word) {
    var counts = {};
    for (var i = 0; i < word.length; i++) {
        var letter = word[i];
        if (counts[letter]) {
            counts[letter]++;
        } else {
            counts[letter] = 1;
        }
    }
    return counts;
}

-----------------------------------------------------------------------

Question 13:
13.	Write a function to set (year) in date object.

Answer:
function setYear(date, year) {
    date.setFullYear(year);
}

-----------------------------------------------------------------------

Question 14:
14.	Write a function which tells the age of a person who Born on (dateOfBirth)

Answer:
function calculateAge(dateOfBirth) {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

-----------------------------------------------------------------------

Question 15:
15.	Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
result should be in true or false

Answer:
function isWordInArray(word, array) {
    return array.includes(word);
}
var names = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
console.log(isWordInArray('raza', names));  // Outputs: true
console.log(isWordInArray('ali', names));   // Outputs: false

-----------------------------------------------------------------------

Question 16:
16.	Write a function which repeat (letter) 10 times.
Hint: "abcde" str.repeat(10)

Answer:
function repeatLetter(letter) {
    return letter.repeat(10);
}
console.log(repeatLetter('a'));  // Outputs: aaaaaaaaaa

-----------------------------------------------------------------------

Question 17:
17.	write a function which reverse array = ['a','b','c','d','e']
Hint: arr.reverse()

Answer:
function reverseArray(arr) {
    return arr.reverse();
}
var letters = ['a','b','c','d','e'];
console.log(reverseArray(letters));  // Outputs: ['e', 'd', 'c', 'b', 'a']

______________________________________________________________________






***********-Chapter 38 (Local vs. Global Variables):-***********

Question 1:
1.	Write a JavaScript function that demonstrates the usage of a local variable.

Answer:
function showLocalVariable() {
    var localVariable = "I am a local variable";
    console.log(localVariable);
}

-----------------------------------------------------------------------

Question 2:
2.	How can you access a global variable inside a function in JavaScript?

Answer:
var globalVariable = "I am a global variable";

function showGlobalVariable() {
    console.log(globalVariable);
}

showGlobalVariable();  // Outputs: "I am a global variable"

________________________________________________________________________








***********-Chapter 39, 40 (Switch Statements):-***********

Question 1:
1.	Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases

Answer:
var day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}

-----------------------------------------------------------------------

Question 2:
2.	Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and break the statement, if not default message will be shown to user.

Answer:
var cityName = prompt("Please enter your city name");

switch (cityName) {
    case "New York":
        alert("You are in New York");
        break;
    case "Los Angeles":
        alert("You are in Los Angeles");
        break;
    case "Chicago":
        alert("You are in Chicago");
        break;
    default:
        alert("City not recognized");
}

________________________________________________________________________




================= THE END =================


*/