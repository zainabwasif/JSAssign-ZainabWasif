/* ***********"JAVASCRIPT QUESTIONS"**************
______________________________________________________________________

******************CHAPTER 40-60******************


***********-Chapter 41, 42 (while loops, do…while loops):-***********

Question 1:
1.	Write a Code that runs twice and does nothing. The counter i has already been declared and assigned 0.

Answer:
for (i = 0; i < 2; i++) {
}

-----------------------------------------------------------------------

Question 2:
2.	Code that looks for "pig" in the array. When it finds it, an alert displays saying, "Found it!" Use the length of the array as the loop limiter. Break out of the loop when it's found.
var animals=["horse", "ox", "cow", "pig", "duck"];

Answer:
var animals = ["horse", "ox", "cow", "pig", "duck"];

for (var i = 0; i < animals.length; i++) {
    if (animals[i] === "pig") {
        alert("Found it!");
        break;
    }
}
-----------------------------------------------------------------------

Question 3:
3.	Code to use a while & do while loop to print the numbers from 1 to 10.

Answer:
var i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);
-----------------------------------------------------------------------

Question 4:
4.	To use a while loop to ask the user for a number and then print that number back to them.

Answer:
var number;
do {
    number = prompt("Please enter a number");
} while (isNaN(number));

console.log("You entered: " + number);
-----------------------------------------------------------------------

Question 5:
5.	To use a while loop to check if a number is even or odd.

Answer:
var number = prompt("Please enter a number");

while (isNaN(number)) {
    alert("That's not a valid number. Please try again.");
    number = prompt("Please enter a number");
}

if (number % 2 === 0) {
    console.log("The number " + number + " is even.");
} else {
    console.log("The number " + number + " is odd.");
}
-----------------------------------------------------------------------

Question 6:
6.	Create a guessing game where the user has to guess a number between 1 and 100. 

Answer:
var correctNumber = Math.floor(Math.random() * 100) + 1;
var guess;
do {
    guess = prompt("Guess a number between 1 and 100");
    if (guess < correctNumber) {
        alert("Too low! Try again.");
    } else if (guess > correctNumber) {
        alert("Too high! Try again.");
    }
} while (guess != correctNumber);
alert("Congratulations! You guessed the number.");
-----------------------------------------------------------------------

Question 7:
7.	 Use a while & do-while loop to create a countdown timer?

Answer:
Using a while loop::
var count = 10;
while (count > 0) {
    console.log(count);
    count--;
}
console.log("Time's up!");

Using a do-while loop::
var count = 10;
do {
    console.log(count);
    count--;
} while (count > 0);
console.log("Time's up!");

______________________________________________________________________







***********-Chapter 46, 48 (Events):-***********

Question 1:
1.	Create a simple event that prints a message when the user clicks on an element.

Answer:
<!DOCTYPE html>
<html>
<body>

<button id="myElement">Click me</button>

<script>
document.getElementById("myElement").addEventListener("click", function() {
    console.log("You clicked on the element!");
});
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 2:
2.	Create an event that hides an element when the user clicks on a different element

Answer:
<!DOCTYPE html>
<html>
<body>

<button id="buttonElement">Click me to hide the text</button>
<p id="hideElement">This text will be hidden when you click the button.</p>

<script>
document.getElementById("buttonElement").addEventListener("click", function() {
    document.getElementById("hideElement").style.display = "none";
});
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 3:
3.	Create a link that changes color when the user hovers over it and then back to its original color when the user moves the mouse away.

Answer:
<!DOCTYPE html>
<html>
<head>
<style>
a {
  color: blue;
}

a:hover {
  color: red;
}
</style>
</head>
<body>

<a href="https://www.google.com">This is a link</a>

</body>
</html>

-----------------------------------------------------------------------

Question 4:
4.	Create an event that scrolls to the top of the page when the user clicks on a link.

Answer:
<!DOCTYPE html>
<html>
<body>

<a href="#" onclick="topFunction()" id="myBtn">Go to top</a>

<script>
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 5:
5.	Create a link that plays a sound when the user clicks on it.

Answer:
<!DOCTYPE html>
<html>
<body>

<a href="#" onclick="playSound()">Play Sound</a>

<audio id="mySound" src="sound.mp3" preload="auto"></audio>

<script>
function playSound() {
  var sound = document.getElementById("mySound");
  sound.play();
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 6:
6.	Create a simple link that opens a new window when clicked.

Answer:
<!DOCTYPE html>
<html>
<body>

<a href="https://www.google.com" target="_blank">Open Bing in new window</a>

</body>
</html>

-----------------------------------------------------------------------

Question 7:
7.	Create a simple button that alert a message when clicked.

Answer:
<!DOCTYPE html>
<html>
<body>

<button onclick="myFunction()">Click me</button>

<script>
function myFunction() {
  alert("Hello, World!");
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 8:
8.	Create a button that changes color when the user hovers over it.

Answer:
<!DOCTYPE html>
<html>
<head>
<style>
#myButton {
  background-color: blue;
  color: white;
}

#myButton:hover {
  background-color: red;
}
</style>
</head>
<body>

<button id="myButton">Hover over me</button>

<script>
var button = document.getElementById("myButton");

button.onmouseover = function() {
  button.style.backgroundColor = "red";
}

button.onmouseout = function() {
  button.style.backgroundColor = "blue";
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 9:
9.	Create a button that plays a sound when the user clicks on it.

Answer:
<!DOCTYPE html>
<html>
<body>

<button onclick="playSound()">Play Sound</button>

<audio id="mySound" src="sound.mp3" preload="auto"></audio>

<script>
function playSound() {
  var sound = document.getElementById("mySound");
  sound.play();
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 10:
10.	Create an event that alert a message when the user moves the mouse over an element.

Answer:
<!DOCTYPE html>
<html>
<body>

<div id="myDiv">Hover over me</div>

<script>
document.getElementById("myDiv").onmouseover = function() {mouseOver()};

function mouseOver() {
  alert("You are hovering over the element!");
}
</script>

</body>
</html>
-----------------------------------------------------------------------

Question 11:
11.	Create an event that hides an element when the user moves the mouse out of it.

Answer:
<!DOCTYPE html>
<html>
<body>

<div id="myDiv">Hover over me</div>

<script>
document.getElementById("myDiv").onmouseout = function() {mouseOut()};

function mouseOut() {
  document.getElementById("myDiv").style.display = "none";
}
</script>

</body>
</html>
-----------------------------------------------------------------------

Question 12:
12.	 Create a link that opens a new window when the user clicks on it and then closes the window when the user clicks on a close button in the new window. The size of the new window should be determined by the user's mouse position.

Answer:
<!DOCTYPE html>
<html>
<body>

<a href="#" onclick="openWindow()">Open new window</a>

<script>
var myWindow;

function openWindow() {
  var width = window.event.clientX;
  var height = window.event.clientY;
  myWindow = window.open("", "", "width=" + width + ",height=" + height);
  myWindow.document.write("<button onclick='window.close()'>Close me</button>");
}
</script>

</body>
</html>
______________________________________________________________________







***********-Chapter 49, 50 (Reading and Setting field values)   :-***********

Question 1:
Read the value of a user Input and print it to the console.

Answer:
<!DOCTYPE html>
<html>
<body>

<input type="text" id="myInput">
<button onclick="printValue()">Print value</button>

<script>
function printValue() {
  var inputValue = document.getElementById("myInput").value;
  console.log(inputValue);
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 2:
2.	Read the value of a checkbox and print it to the console

Answer:
<!DOCTYPE html>
<html>
<body>

<input type="checkbox" id="myCheckbox">
<button onclick="printValue()">Print value</button>

<script>
function printValue() {
  var checkboxValue = document.getElementById("myCheckbox").checked;
  console.log(checkboxValue);
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 3:
3.	Read the value of a select box and print it to the console.

Answer:
<!DOCTYPE html>
<html>
<body>

<select id="mySelect">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
<button onclick="printValue()">Print value</button>

<script>
function printValue() {
  var selectValue = document.getElementById("mySelect").value;
  console.log(selectValue);
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 4:
4.	Place some text in a field. Make up an id for the field.

Answer:
<!DOCTYPE html>
<html>
<body>

<input type="text" id="myField" value="Some text">

</body>
</html>

-----------------------------------------------------------------------

Question 5:
5.	Ask the user about Martial Status. If the variable married is false, place the value "available" in the field with the id "status"

Answer:
<!DOCTYPE html>
<html>
<body>

<p>Marital Status: <input type="checkbox" id="married"> Married</p>
<p>Status: <input type="text" id="status"></p>

<button onclick="checkMaritalStatus()">Check Status</button>

<script>
function checkMaritalStatus() {
  var married = document.getElementById("married").checked;
  if (!married) {
    document.getElementById("status").value = "available";
  }
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 6:
6.	If a input is empty, fill it with a string.

Answer:
<!DOCTYPE html>
<html>
<body>

<input type="text" id="myInput">
<button onclick="fillInput()">Fill Input</button>

<script>
function fillInput() {
  var input = document.getElementById("myInput");
  if (input.value === "") {
    input.value = "This is a string";
  }
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 7:
7.	Create a Registeration Form with Validation.

Answer:
<!DOCTYPE html>
<html>
<body>

<form id="regForm">
  Username: <input type="text" id="username" required><br>
  Password: <input type="password" id="password" required><br>
  Email: <input type="email" id="email" required><br>
  <input type="submit">
</form>

<script>
document.getElementById("regForm").addEventListener("submit", function(event){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;

  if (username === "" || password === "" || email === "") {
    alert("All fields must be filled out");
    event.preventDefault();
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    event.preventDefault();
  } else if (!email.includes("@")) {
    alert("Email must be a valid email address");
    event.preventDefault();
  } else {
    alert("Registration successful!");
  }
});
</script>

</body>
</html>

______________________________________________________________________






***********-Chapter 51 (Reading and Setting paragraph text)  :-***********

Question 1:
1.	How can I create a paragraph that expands when the user clicks on a Show More?

Answer:
<!DOCTYPE html>
<html>
<body>

<p id="myPara" style="display: none;">This is a paragraph with lots of text. This is a paragraph with lots of text. This is a paragraph with lots of text. This is a paragraph with lots of text. This is a paragraph with lots of text.</p>
<button onclick="showMore()">Show More</button>

<script>
function showMore() {
  var para = document.getElementById("myPara");
  if (para.style.display === "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 2:
2.	Read the text of a paragraph and use it to search for a specific word or phrase.

Answer:
<!DOCTYPE html>
<html>
<body>

<p id="myPara">This is a paragraph with lots of text. This is a paragraph with lots of text. This is a paragraph with lots of text. This is a paragraph with lots of text. This is a paragraph with lots of text.</p>
<input type="text" id="myInput">
<button onclick="searchText()">Search</button>

<script>
function searchText() {
  var paraText = document.getElementById("myPara").innerText;
  var searchText = document.getElementById("myInput").value;
  if (paraText.includes(searchText)) {
    alert("The paragraph contains the search text: " + searchText);
  } else {
    alert("The paragraph does not contain the search text: " + searchText);
  }
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 3:
3.	Read the text of a paragraph and use it to find the longest word.

Answer:
<!DOCTYPE html>
<html>
<body>

<p id="myPara">This is a paragraph with lots of text. This is a paragraph with lots of text. This is a paragraph with lots of text. This is a paragraph with lots of text. This is a paragraph with lots of text.</p>
<button onclick="findLongestWord()">Find Longest Word</button>

<script>
function findLongestWord() {
  var paraText = document.getElementById("myPara").innerText;
  var words = paraText.split(" ");
  var longestWord = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  alert("The longest word in the paragraph is: " + longestWord);
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 4:
4.	Set the text of a paragraph to the value of a text field, but only if the value is not empty.

Answer:
<!DOCTYPE html>
<html>
<body>

<input type="text" id="myInput">
<p id="myPara"></p>
<button onclick="setText()">Set Text</button>

<script>
function setText() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue !== "") {
    document.getElementById("myPara").innerText = inputValue;
  }
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 5:
5.	Set the text of a paragraph to the value of a text field, but only if the value is equal to a specific word or phrase.

Answer:
<!DOCTYPE html>
<html>
<body>

<input type="text" id="myInput">
<p id="myPara"></p>
<button onclick="setText()">Set Text</button>

<script>
function setText() {
  var inputValue = document.getElementById("myInput").value;
  var specificWord = "Bing"; // replace with your specific word or phrase
  if (inputValue === specificWord) {
    document.getElementById("myPara").innerText = inputValue;
  }
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 6:
6.	Set the text of a paragraph to the value of a text field, but only if the value is less than a certain length.

Answer:
<!DOCTYPE html>
<html>
<body>

<input type="text" id="myInput">
<p id="myPara"></p>
<button onclick="setText()">Set Text</button>

<script>
function setText() {
  var inputValue = document.getElementById("myInput").value;
  var maxLength = 10; // replace with your maximum length
  if (inputValue.length <= maxLength) {
    document.getElementById("myPara").innerText = inputValue;
  }
}
</script>

</body>
</html>

______________________________________________________________________






***********-Chapter 52 (Manipulating Images and Text):-***********

Question 1:
1.	When the user clicks on the sentence, it turns bold.

Answer:
<!DOCTYPE html>
<html>
<body>

<p id="myPara" onclick="makeBold()">Click on this sentence.</p>

<script>
function makeBold() {
  document.getElementById("myPara").style.fontWeight = "bold";
}
</script>

</body>
</html>

-----------------------------------------------------------------------

Question 2:
2.	How can I make an image disappear when the user hovers over it and show text instead? When the user hovers off the image, the original image should reappear.

Answer:
<!DOCTYPE html>
<html>
<body>

<div id="image">
  <img src="image.jpg" alt="Image">
  <div id="text">This is some text</div>
</div>

<script>
var image = document.getElementById("image");
var text = document.getElementById("text");

image.onmouseover = function() {
  image.style.opacity = 0;
  text.style.opacity = 1;
}

image.onmouseout = function() {
  image.style.opacity = 1;
  text.style.opacity = 0;
}
</script>

</body>
</html>
-----------------------------------------------------------------------

Question 3:
3.	When the user mouses over the heading, its background turns black, but it retains its original light gray color

Answer:
<!DOCTYPE html>
<html>
<body>

<h1 id="myHeading">Hover over me</h1>

<script>
var heading = document.getElementById("myHeading");

heading.onmouseover = function() {
  heading.style.backgroundColor = "black";
  heading.style.color = "lightgray";
}

heading.onmouseout = function() {
  heading.style.backgroundColor = "lightgray";
  heading.style.color = "black";
}
</script>

</body>
</html>
-----------------------------------------------------------------------

Question 4:
4.	When user hover to a paragraph, Add a underline style to text.

Answer:
<!DOCTYPE html>
<html>
<body>

<p id="myPara">Hover over me</p>

<script>
var para = document.getElementById("myPara");

para.onmouseover = function() {
  para.style.textDecoration = "underline";
}

para.onmouseout = function() {
  para.style.textDecoration = "none";
}
</script>

</body>
</html>

______________________________________________________________________








***********-Chapter 52 (Swapping Images):-***********

Question 1:
1.	Swap the images when the user clicks on a button.

Answer:
<!DOCTYPE html>
<html>
<body>

<img id="myImage" src="image1.jpg" style="width:500px">

<button onclick="changeImage()">Click me</button>

<script>
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("image2")) {
        image.src = "image1.jpg";
    } else {
        image.src = "image2.jpg";
    }
}
</script>

</body>
</html>
______________________________________________________________________





================= THE END =================

*/