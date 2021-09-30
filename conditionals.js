// https://github.com/The-Knowledge-House/Conditionals-Exercises/blob/master/conditionals.js

//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs
// and log the output to make sure it works
//(e.g. "The greater number of 5 and 10 is 10")

function greaterNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else if (num1 < num2) {
    return num2;
  }
  else {
    return "same number";
  }
}

console.log(greaterNum(5, 10)); // 10 is greater than 5
console.log(greaterNum(20, 10)); // 20 is greater than 10
console.log(greaterNum(30, 30)); // 30 is the same number as 30

console.log("");



// Let result = (condition) ? ‘Something’: ‘plan b'

//Exercise #2
//Write a function named helloWorld that:
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the
// resultto make sure it works

function helloWorld(language) {
  switch (language) {
    case "es":
      return "Holda Mundo"; // Espanol or Spanish
    case "de":
      return "Hallo Welt"; // German
    case "en":
      return "Hello World"; // Englishj
  }
}

console.log(helloWorld("es"))
console.log(helloWorld("de"))
console.log(helloWorld("en"))

console.log("")



//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result
//to make sure it works

function assignGrade(score) {
  if (score < 60) {
    return "F";
  }
  else if (score < 70) {
    return "D";
  }
  else if (score < 80) {
    return "C";
  }
  else if (score < 90) {
    return "B";
  }
  else if (score <= 100) {
    return "A";
  }
}

console.log("Your letter grade is: " + assignGrade(59)); // 59 == F
console.log("Your letter grade is: " + assignGrade(60)); // 60 == D
console.log("Your letter grade is: " + assignGrade(70)); // 70 == C
console.log("Your letter grade is: " + assignGrade(80)); // 80 == C
console.log("Your letter grade is: " + assignGrade(90)); // 90 == C
console.log("Your letter grade is: " + assignGrade(100)); // 100 == C

console.log("");



//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"

function pluralize(noun, number) {
  if (number > 1 && noun != "sheep" && noun != "geese") {
    noun += "s";
    console.log(number + " " + noun);
  }
  else if (noun == "sheep" || noun == "geese") {
    console.log(number + " " + noun);
  }
  else {
    console.log(number + " " + noun);
  }
}

pluralize("cat", 1);
pluralize("cat", 2);
pluralize("dog", 1);
pluralize("dog", 3);
pluralize("sheep", 1);
pluralize("sheep", 4);
pluralize("geese", 1);
pluralize("geese", 5);

console.log("");
