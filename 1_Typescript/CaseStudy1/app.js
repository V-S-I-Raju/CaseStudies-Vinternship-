/**
 * Case Study 1
 * Introduction to TypeScript
 * Author: V S I Raju
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
   Hello World Example
================================ */
var message = "Hello, World! Welcome to TypeScript.";
var runButton = document.getElementById("runProgram");
runButton.addEventListener("click", function () {
    console.log(message);
    printToConsole(message);
});
/* ===============================
   Interactive Challenge
================================ */
var nameInput = document.getElementById("nameInput");
var ageInput = document.getElementById("ageInput");
var greetButton = document.getElementById("generateGreeting");
var greetingOutput = document.getElementById("greetingOutput");
greetButton.addEventListener("click", function () {
    var name = nameInput.value.trim();
    var age = Number(ageInput.value);
    if (!name || !age) {
        greetingOutput.textContent = "Please enter both name and age.";
        return;
    }
    var greeting = "Hello ".concat(name, "! You are ").concat(age, " years old. Welcome to TypeScript.");
    console.log(greeting);
    printToConsole(greeting);
    greetingOutput.textContent = greeting;
});
