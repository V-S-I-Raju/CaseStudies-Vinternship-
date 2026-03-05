/**
 * Case Study 2
 * Basic Syntax in TypeScript
 * Author: V S I Raju
 *
 * Demonstrates:
 * Variables
 * Functions
 * Statements
 * Expressions
 * Identifiers
 * Keywords
 * Comments
 * Object Oriented Programming
 */
/* ===============================
Console Utility
================================ */
var consoleBox = document.getElementById("consoleBox");
function printToConsole(message) {
    var line = document.createElement("div");
    line.textContent = message;
    consoleBox.appendChild(line);
}
/* ===============================
Identifier Demonstration
================================ */
// Valid identifiers
var firstName = "Raju";
var num1 = 10;
var _total = 20;
var $result = num1 + _total;
printToConsole("Identifier Example:");
printToConsole("firstName = ".concat(firstName));
printToConsole("$result = ".concat($result));
/* ===============================
Function Example
================================ */
function doubleNumber(num) {
    // Expression example
    var result = num * 2;
    return result;
}
/* ===============================
Interactive Challenge
================================ */
var fruitInput = document.getElementById("fruitInput");
var numberInput = document.getElementById("numberInput");
var runChallenge = document.getElementById("runChallenge");
var challengeOutput = document.getElementById("challengeOutput");
runChallenge.addEventListener("click", function () {
    consoleBox.innerHTML = "";
    // Variable example
    var fruit = fruitInput.value;
    var numberValue = Number(numberInput.value);
    // Statement example
    if (!fruit || isNaN(numberValue)) {
        challengeOutput.textContent = "Please enter both fruit and number.";
        printToConsole("Invalid input detected.");
        return;
    }
    var doubled = doubleNumber(numberValue);
    // Expression example
    var message = "Favorite fruit: ".concat(fruit, ". Double of ").concat(numberValue, " is ").concat(doubled, ".");
    challengeOutput.textContent = message;
    printToConsole("Challenge Result:");
    printToConsole(message);
});
/* ===============================
Object Oriented Example
================================ */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return "Hello! My name is ".concat(this.name, ".");
    };
    return Person;
}());
var runClassDemo = document.getElementById("runClassDemo");
runClassDemo.addEventListener("click", function () {
    var person = new Person("Developer");
    var greeting = person.sayHello();
    console.log(greeting);
    printToConsole("Class Example:");
    printToConsole(greeting);
});
/* ===============================
Keyword Demonstration
================================ */
function showKeywordExamples() {
    printToConsole("Common TypeScript Keywords:");
    var keywords = [
        "break", "case", "const", "continue",
        "do", "else", "enum", "export",
        "for", "function", "if", "import",
        "let", "new", "return", "static",
        "switch", "this", "throw", "true",
        "try", "typeof", "var", "while"
    ];
    keywords.forEach(function (k) { return printToConsole(k); });
}
showKeywordExamples();
