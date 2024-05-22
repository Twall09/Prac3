// QUESTION 1

function reverseNumber(num) {
 let numStr = num.toString();

 let isNegative = num < 0;

 if (isNegative) {
  numStr = numStr.slice(1);
 }

 let reversedStr = numStr.split("").reverse().join("");

 let reversedNum = parseInt(reversedStr);

 if (isNegative) {
  reversedNum = -reversedNum;
 }

 return reversedNum;
}

// Example:
console.log(reverseNumber(12345)); // Output: 54321
console.log(reverseNumber(-9876)); // Output: -6789

// QUESTION 2

function StringAlpha(str) {
 return str.split("").sort().join("");
}

// Example:
console.log(StringAlpha("keyincollege")); // Output: "ceeegikllnoy"

// QUESTION 3

// Unsure how to do this one

// QUESTION 4

function getDate() {
 let currentDate = new Date();

 let year = currentDate.getFullYear();

 let month = currentDate.getMonth() + 1; // added 1 because it starts at 0.
 let day = currentDate.getDate();

 if (month < 10) {
  month = "0" + month;
 }
 if (day < 10) {
  day = "0" + day;
 }

 // Assemble the date string in the format "YYYY-MM-DD"
 let dateString = year + "-" + month + "-" + day;

 return dateString;
}

// Example:
console.log(getDate());

// QUESTION 5

function capitalize(str) {
 if (str.length === 0) {
  return str;
 }

 return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example:
console.log(capitalize("tyler")); // Output: "Hello"
console.log(capitalize("Tyler")); // Output: "Tyler" (no change)
console.log(capitalize("")); // blank

// QUESTION 6

function checkPeriod(str) {
 // Check if the string contains a period
 if (str.includes(".")) {
  return "contain period";
 } else {
  return "no period";
 }
}

// Example:
console.log(checkPeriod("Hello world.")); // Output: "contain period"
console.log(checkPeriod("Hello world")); // Output: "no period"
console.log(checkPeriod("")); // Output: "no period"

// QUESTION 7

function putSuffix(num) {
 let str = num.toString();

 // Define suffixes based on the last digit of the number
 const suffixes = {
  1: "st",
  2: "nd",
  3: "rd",
 };

 let lastDigit = str.charAt(str.length - 1);

 // Any number besides 1,2,3
 let suffix = suffixes[lastDigit] || "th";

 return num + suffix;
}

// Examples:
console.log(putSuffix(1)); // Output: "1st"
console.log(putSuffix(22)); // Output: "22nd"
console.log(putSuffix(333)); // Output: "333rd"
console.log(putSuffix(4)); // Output: "4th"
