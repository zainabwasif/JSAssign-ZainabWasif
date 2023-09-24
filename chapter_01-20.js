/* ***********"JAVASCRIPT QUESTIONS"**************
______________________________________________________________________

******************CHAPTER 01-20******************


***********-Chapter 1 (Alerts):-***********

Question 1:
1.	Alert these following (individually): 
    I.	First Name
    II.	Last Name
    III.Email
    IV.	Phone Number
    V.	Password

Answer:
Assuming the information is stored in variables
var firstName = "John";
var lastName = "Doe";
var email = "johndoe@example.com";
var phone = "123-456-7890";
var password = "secret";

Using the alert() function to display each variable
alert("First Name: " + firstName);
alert("Last Name: " + lastName);
alert("Email: " + email);
alert("Phone Number: " + phone);
alert("Password: " + password);
-----------------------------------------------------------------------

Question 2:
2.	Correct this statement: alert"You're learning JavaScript!";

Answer:
alert("You're learning JavaScript!");
-----------------------------------------------------------------------

Question 3:
3.	Code an alert statement displaying any message you like.

Answer:
alert("Hello, this is Zainab wasif. I hope i am doing it on the right pattern");
______________________________________________________________________





***********-Chapter 2 (Variables for string):-***********

Question 1:
1.	Declare any variable in the camelCase format.

Answer:
var myName = "Zainab";
var favoriteColor = "blue";
var numberOfLanguages = 6;
-----------------------------------------------------------------------


Question 2:
2.	Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.

Answer:
var myVariable; ....This declares a variable named myVariable without defining it
myVariable = "This is a string of my choice"; ....This assigns a string value to the variable
-----------------------------------------------------------------------

Question 3:
3.	Declare the variable teamName and Alert your Team name

Answer:
var teamName; 
teamName = "redlaw"; 
alert("My team name is " + teamName);
-----------------------------------------------------------------------

Question 4:
4.	This statement has already been coded. var bestMan = "Charlie"; Assign the variable a new string

Answer:
var bestMan = "Charlie"; 
 var bestMan = "Charlie"; 
______________________________________________________________________






***********-Chapter 3 (Variables for numbers):-***********

Question 1:
1.	Declare a variable “caseQty”

Answer:
var caseQty;
-----------------------------------------------------------------------

Question 2:
2.	Assign to the variable caseQty, which has already been declared, the value 144.

Answer:
var caseQty; {already declered}
caseQty = 144;
-----------------------------------------------------------------------

Question 3:
3.	Rewrite this statement so the variable can be used in a math operation. var num = "9";

Answer:
var num = Number("9");
-----------------------------------------------------------------------

Question 4:
4.	In one statement declare a variable. In a second statement assign it the sum of 2 numbers.

Answer:
var mySum; 
mySum = 5 + 7;
-----------------------------------------------------------------------

Question 5:
5.	What is the value of orderTotal?
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;

Answer:
order total will be=  110
-----------------------------------------------------------------------

Question 6:
6.	In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number.

Answer:
var myNumber;
myNumber = 10;
myNumber = myNumber + 5;
______________________________________________________________________






***********-Chapter 4 (Variable names Legal and Illegal):-***********

Question 1:
1.	Correct this statement.
var product cost = 3.45;

Answer:
var productCost = 3.45;
-----------------------------------------------------------------------

Question 2:
2.	Rewrite this using camelCase.
var Nameofband;

Answer:
var nameOfBand;
-----------------------------------------------------------------------

Question 3:
3.	In a single statement declare a legally-named variable and assign a number to it.

Answer:
var myNumber = 10;
-----------------------------------------------------------------------

Question 4:
4.	Declare a variable that is a combination of your first and last names. Use camelCase.

Answer:
var zainabWasif;
zainabWasif = "Zainab Wasif"
-----------------------------------------------------------------------

Question 5:
5.	List the legal and Illegal Variables.

Answer:
Legal variables: name, _age, $price, totalCost, my_number, isTrue
Illegal variables: 2ndName, product-cost, var, if-else, my name, is true
______________________________________________________________________





***********-Chapter 5 (Math Expression I):-***********

Question 1:
1.	What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?

Answer:
remainder operator or the modulus operator. 
The symbol for this operator is % (percent sign)
-----------------------------------------------------------------------

Question 2:
2.	What is the value of num?
var num = 20 % 6;

Answer:
2, which is the remainder of dividing 20 by 6.
-----------------------------------------------------------------------

Question 3:
3.	In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000.

Answer:
var largeNum = 1000 * 2000;
-----------------------------------------------------------------------

Question 4:
4.	Assign to a variable the value represented by one variable subtracted from the value represented by another variable

Answer:
var z = y - x;
-----------------------------------------------------------------------

Question 5:
5.	Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name.

Answer:
var myRemainder = 15 % 4;
-----------------------------------------------------------------------

Question 6:
6.	Code an alert that displays the result of a multiplication on 2 numbers.

Answer:
alert(5 * 7); 
______________________________________________________________________





***********-Chapter 6 (Math Expression II):-***********

Question 1:
1.	Code a short form of x = x + 1; Use either of the two legal expressions.

Answer:
x++;       // This uses the increment operator
x += 1;    // This uses the addition assignment operator
-----------------------------------------------------------------------

Question 2:
2.	If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?

Answer:
x--;       // This uses the decrement operator
x -= 1;    // This uses the subtraction assignment operator
-----------------------------------------------------------------------

Question 3:
3.	var x = 50;
var y = x++;
What is the value of y?

Answer:
y = 50
-----------------------------------------------------------------------

Question 4:
4.	var y = 50;
var z = --y;
What is the value of z?

Answer:
z = 49
-----------------------------------------------------------------------

Question 5:
5.	In a single statement, decrement num and assign its original value to newNum.

Answer:
var num = 10;
var newNum = num--;
console.log("num is " + num);
console.log("newNum is " + newNum);
-----------------------------------------------------------------------

Question 6:
6.	In a single statement add 1 to a variable and assign its original value to another variable.

Answer:
var x = 5;
var y = x++;
console.log("x is " + x);
console.log("y is " + y);
-----------------------------------------------------------------------

Question 7:
Assign a number value to a variable. 
Increment the variable.
Display the new value in an alert

Answer:
var num = 10;
num++;
alert("The new value is " + num);
______________________________________________________________________




***********-Chapter 7 (Math Expression III):-***********

Question 1:
1.	var calculatedNum = 2 + (2 * 6);
What is the value of calculatedNum?

Answer:
14
-----------------------------------------------------------------------

Question 2:
2.	var calculatedNum = (2 + 2) * 6;
What is the value of calculatedNum?

Answer:
24
-----------------------------------------------------------------------

Question 3:
3.	var calculatedNum = (2 + 2) * (4 + 2);
What is the value of calculatedNum?

Answer:
24
-----------------------------------------------------------------------

Question 4:
4.	var calculatedNum = ((2 + 2) * 4) + 2;
What is the value of calculatedNum?

Answer:
18
-----------------------------------------------------------------------

Question 5:
5.	Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.

Answer:
var cost = (2 + (2 * 4)) + 10;
console.log("cost is " + cost);
-----------------------------------------------------------------------

Question 6:
6.	Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20.

Answer:
var units = (2 + 2) * (4 + 10);
console.log("units is " + units);
______________________________________________________________________





***********-Chapter 8 (Concatenating Text Strings):-***********

Question 1:
1.	var num = "2" + "2";
What is the value of num? Include quotation marks.

Answer:
22
-----------------------------------------------------------------------

Question 2:
2.	message = ("Hello," + "Dolly");
What is the value of message? (Include the quotation marks.)
Alert the statement

Answer:
The value of message is “Hello,Dolly”
-----------------------------------------------------------------------

Question 3:
3.	alert("33" + 3);
What message displays in the alert box?

Answer:
333
-----------------------------------------------------------------------

Question 4:
4.	Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".

Answer:
var part1 = "Pakistan";
var part2 = "Zindabad";
var phrase = part1 + " " + part2;
alert(phrase);
-----------------------------------------------------------------------

Question 5:
5.	Write a statement that assigns to a variable the concatenation of a string with a number

Answer:
var result = "The answer is " + 42;
console.log(result);
-----------------------------------------------------------------------

Question 6:
6.	Assign strings to two variables. Then concatenate them and assign the result to a third variable.

Answer:
var firstName = "Ali";
var lastName = "Khan";
var fullName = firstName + " " + lastName;
console.log(fullName);
______________________________________________________________________





***********-Chapter 9 (Prompts):-***********

Question 1:
1.	Code a prompt with the message "Enter first name". The user's response is assigned to firstName.

Answer:
firstName = input("Enter first name: ")
-----------------------------------------------------------------------

Question 2:
2.	Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.

Answer:
country = input("Country? ") or "China"
-----------------------------------------------------------------------

Question 3:
3.	Correct this statement
var yourName = prompt(Enter Your Name");

Answer:
var yourName = prompt("Enter Your Name");
-----------------------------------------------------------------------

Question 4:
4.	Code a prompt that specifies a string as the message Include a default input.

Answer:
message = input("Enter a message: ") or "Default Message"
-----------------------------------------------------------------------

Question 5:
5.	Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default response. Assign the user's response to a third variable.

Answer:
message = "Enter your favorite color: "
default_response = "Blue"

user_response = input(message) or default_response
-----------------------------------------------------------------------

Question 6:
6.	Display a prompt, including both a message and a default response.
Display the user's response in an alert.

Answer:
var message = "Enter your favorite color: ";
var default_response = "Blue";

var user_response = prompt(message, default_response);

alert("You entered: " + user_response);
______________________________________________________________________






***********-Chapter 10 (if statments):-***********

Question 1:
1.	var city = "Karachi"
if (city = "Karachi") {
console.log("The City OF Lights")
Correct the above statement:

Answer:
var city = "Karachi";
if (city == "Karachi") {
    console.log("The City OF Lights");
}
-----------------------------------------------------------------------

Question 2:
2.	This is the first line of an if statement:
if (x === y) {
Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.

Answer:
if (x === y) {
    var z = prompt("Please enter the value of z");
}
-----------------------------------------------------------------------

Question 3:
3.	Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi". if not then alert ("Please write correct city")

Answer:
if (ZipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}
-----------------------------------------------------------------------

Question 4:
4.	Code an if statement. Test whether a variable has a particular numerical value. If so, assign a new value to that variable, as in x = 1;

Answer:
if (x === 10) {
    x = 1;
}
______________________________________________________________________





***********-Chapter 11 (Comparison Operators):-***********

Question 1:
1.	Code the first line of an if statement that tests whether one variable is unequal to another. (Use !)

Answer:
if (x !== y) {
    //...
}
-----------------------------------------------------------------------

Question 2:
2.	Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable.

Answer:
if (x >= y) {
    //...
}
-----------------------------------------------------------------------

Question 3:
3.	Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable.

Answer:
if (x !== 10) {
    x = 5;
}
-----------------------------------------------------------------------

Question 4:
4.	Code an if statement that tests whether a number is unequal to a different number. If the condition is true (it will be), display a congratulations alert.

Answer:
if (5 !== 10) {
    alert("Congratulations!");
}
-----------------------------------------------------------------------

Question 5:
5.	Code a prompt asking for your first name.
Code an if statement that tests whether the name you entered is unequal to another name.
If the condition is true (it will be), display an alert that says "No match"

Answer:
var enteredName = prompt("Enter your first name");
var anotherName = "Bob";

if (enteredName !== anotherName) {
    alert("No match");
}

______________________________________________________________________







***********-Chapter 12 (if…else and else if statements):-***********

Question 1:
1.	Code an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert.

Answer:
if (x >= y) {
    alert("x is greater than or equal to y");
} else {
    alert("x is less than y");
}

-----------------------------------------------------------------------

Question 2:
2.	Write a program using if else and else if statement which take marks from user. And the program will calculate your percentage and  give you grade A/C to Your percentage. (MARKSHEET)

Answer:
var marks = prompt("Enter your marks");

var percentage = (marks / 100) * 100;

if (percentage >= 90) {
    alert("You got an A grade");
} else if (percentage >= 80) {
    alert("You got a B grade");
} else if (percentage >= 70) {
    alert("You got a C grade");
} else if (percentage >= 60) {
    alert("You got a D grade");
} else {
    alert("You failed");
}

-----------------------------------------------------------------------

Question 3:
3.	This is the if statement that begins the code.
if (a === 10) {
  alert("a is 10");
}
If a isn't 10, display an alert that says The correct value of a is ____

Answer:
if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}

-----------------------------------------------------------------------

Question 4:
4.	Prompt the user to enter a city.
If the city is Karachi, display an alert acknowledging it is Karachi.
If not, check to see if it's Lahore.
If it is, display an alert acknowledging it's Lahore.
Otherwise, display a different alert.

Answer:
var city = prompt("Enter a city");

if (city === "Karachi") {
    alert("It is Karachi");
} else if (city === "Lahore") {
    alert("It's Lahore");
} else {
    alert("The city is " + city);
}

______________________________________________________________________







***********-Chapter 13 (Testing sets of conditions):-***********

Question 1:
1.	Code the first line of an if statement that tests whether both are true: a has the same value as b and c has the same value as d.

Answer:
if (a === b && c === d) {
    //...
}
-----------------------------------------------------------------------

Question 2:
2.	Code the first line of an if statement that tests whether either or both are true: a has the same value as b or c doesn't have the same value as d.

Answer:
if (a === b || c !== d) {
    //...
}

-----------------------------------------------------------------------

Question 3:
3.	Code the first line of an if statement that tests whether 
I.	name is either "Hamza" or "Arsalan".
II.	age is Less than 60.

Answer:
if ((name === "Hamza" || name === "Arsalan") && age < 60) {
    //...
}

-----------------------------------------------------------------------

Question 4:
4.	Declare two variables and assign them number values.
If the first variable is less than the second variable or greater than the second variable, display an alert.

Answer:
var num1 = 10;
var num2 = 20;

if (num1 < num2 || num1 > num2) {
    alert("The condition is true");
}

-----------------------------------------------------------------------

Question 5:
5.	Declare 2 variables. Assign one of them your first name and the other one your last name.
Code 2 prompts, asking for your first and your last name.
If your answers match the two variables, display an alert.

Answer:
var firstName = "Zainab";
var lastName = "Wasif";

var enteredFirstName = prompt("Enter your first name");
var enteredLastName = prompt("Enter your last name");

if (enteredFirstName === firstName && enteredLastName === lastName) {
    alert("Your answers match the variables");
} else {
    alert("Your answers do not match the variables");
}

______________________________________________________________________






***********-Chapter 14 (If statements nested):-***********

Question 1:
1.	Code an if statement enclosing a nested if. If password is not empty, then check if password is not greater than 5  , then display an alert that says "Password must be greater than 5" if greater than 5 then Alert "OK".

Answer:
var password = "yourPassword";

if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }
} else {
    alert("Password cannot be empty");
}

-----------------------------------------------------------------------

Question 2:
2.	Try this statement by yourself
if (a === 1) {
 if (c === "Max") {
    alert("OK");
  }
}

Answer:
This code will first check if the variable a is equal to 1. If it is, it will then check if the variable c is equal to “Max”. If both conditions are true, it will display an alert saying “OK”.
-----------------------------------------------------------------------

Question 3:
3.	Code the first line of an if statement that avoids the nesting above by testing for multiple conditions.
if (a === 1) {
  if (c === "Max") {
 alert("OK");
  }
}

Answer:
if (a === 1 && c === "Max") {
    alert("OK");
}
-----------------------------------------------------------------------

Question 4:
4.	Declare two variables and assign them the same number value.
Test two conditions, using nested if statements. Test whether the first variable equals the second variable and also whether it is less than or equal to the second variable. If the test passes—and it will—display an alert message.

Answer:
var num1 = 10;
var num2 = 10;

if (num1 === num2) {
    if (num1 <= num2) {
        alert("The conditions are met");
    }
}

______________________________________________________________________







***********-Chapter 15 (Array I):-***********

Question 1:
1.	Declare an empty array.

Answer:
var arr = [];

-----------------------------------------------------------------------

Question 2:
2.	Code an array with 1 string element

Answer:
let array = ["Hello, World!"];

-----------------------------------------------------------------------

Question 3:
3.	var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index

Answer:
var alphabet = ["h","i","j","k"];
alert(alphabet[2]);

-----------------------------------------------------------------------

Question 4:
4.	var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.

Answer:
var alphabet = ["h","i","j","k", "l","m", "n", "o"];
console.log(alphabet.length);

-----------------------------------------------------------------------

Question 5:
5.	Declare an array with one element and Add a second element with index in array. Create an alert whose message is the new element.

Answer:
var array = ["Hello"];
array[1] = "World";
alert(array[1]);

______________________________________________________________________





***********-Chapter 16 (Array II):-***********

Question 1:
1.	Code an array with 1 string element.
Add an additional element to the array using push.
Create an alert whose message is the last element.

Answer:
var array = ["Hello"];
array.push("World");
alert(array[array.length - 1]);

-----------------------------------------------------------------------

Question 2:
2.	var Alphabet=["h","i","j","k"]
Remove the last element from the array Alphabet.

Answer:
var Alphabet = ["h","i","j","k"];
Alphabet.pop();

-----------------------------------------------------------------------

Question 3:
3.	var Alphabet=["h","i","j","k"]
Add a new element, a number, to the end of an array.

Answer:
var Alphabet = ["h","i","j","k"];
Alphabet.push(5);

______________________________________________________________________







***********-Chapter 17 - 20 (for Loops):-***********

Question 1:
1.	Write a statement in which loop is to run 10 times.

Answer:
for (var i = 0; i < 10; i++) {
    console.log(i);
}

-----------------------------------------------------------------------

Question 2:
2.	Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 12 times using <= to specify how many loops.

Answer:
for (var i = 0; i <= 11; i++) {
    console.log(i);
}

-----------------------------------------------------------------------

Question 3:
3.	What are the 5 characters missing from this code, excluding any spaces that are missing? Type them in order, with no spaces or commas between them.
for var i = 0 i <= 4 i++
Note: Complete this statement by yourself

Answer:
for (var i = 0; i <= 4; i++) {
    // code to be executed
}

-----------------------------------------------------------------------

Question 4:
4.	Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.

Answer:
for (var counter = 0; counter < 100; counter++) {
    // code to be executed
}

-----------------------------------------------------------------------

Question 5:
5.	Code the first line of a for loop with the usual counter and the usual starting value. Run it 3 times using > to specify how many loops. Decrement it with each iteration.

Answer:
Code the first line of a for loop with the usual counter and the usual starting value. Run it 3 times using > to specify how many loops. Decrement it with each iteration.

-----------------------------------------------------------------------

Question 6:
6.	The statement assigns the number of elements in the array to the variable.

Answer:
var array = ["h","i","j","k"];
var length = array.length;

-----------------------------------------------------------------------

Question 7:
7.	Set a variable named “flag” with an initial Boolean value of your choice.

Answer:
var flag = true;

-----------------------------------------------------------------------

Question 8:
8.	Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array pets.

Answer:
var pets = ["dog", "cat", "bird"];
for (var i = 0; i < pets.length; i++) {
    // code to be executed
}

-----------------------------------------------------------------------

Question 9:
9.	Coding Exercise:
Set a for loop to run 10 iterations.
On the second iteration, display the counter in an alert. (It should be 1.)
Break out of the loop.

Answer:
for (var i = 0; i < 10; i++) {
    if (i === 1) {
        alert(i);
        break;
    }
}

-----------------------------------------------------------------------

Question 10:
10.	Create an array which contains user names
Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array user names.
Code an if statement that tests the presense of (user name) in an array.
If user name match Alert that "Enter". if not then alert ("Please write correct user name").

Answer:
var userNames = ["Alice", "Bob", "Charlie"];
var firstName = prompt("Enter first name");

for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] === firstName) {
        alert("Enter");
        break;
    }
}

if (i === userNames.length) {
    alert("Please write correct user name");
}

-----------------------------------------------------------------------

Question 11:
11.	Complete this code to display an alert if a match isn't found.
var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
};

Answer:
var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  alert("Match not found");
}

-----------------------------------------------------------------------

Question 12:
12.	var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”];
var secondArr = [1, 2, 3, 4, 5, 6];
Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array firstArr.
In the scope of main loop Code the nested loop. Limit the number of nested loops by the number of elements in the array secondArr.
After that concatenate the both loops.
Expected Output:
a1
a2
a3
a4
…
f6

Answer:
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}

______________________________________________________________________  


================= THE END =================


*/