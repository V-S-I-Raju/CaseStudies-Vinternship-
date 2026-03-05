/**
 * Case Study 1
 * Introduction to TypeScript
 * Author: V S I Raju
 */

/* ===============================
   Console Utility
================================ */

const consoleBox = document.getElementById("consoleBox") as HTMLDivElement;

function printToConsole(message: string): void {

    const line = document.createElement("div");
    line.textContent = message;

    consoleBox.appendChild(line);

}

/* ===============================
   Hello World Example
================================ */

let message: string = "Hello, World! Welcome to TypeScript.";

const runButton = document.getElementById("runProgram") as HTMLButtonElement;

runButton.addEventListener("click", () => {

    console.log(message);
    printToConsole(message);

});


/* ===============================
   Interactive Challenge
================================ */

const nameInput = document.getElementById("nameInput") as HTMLInputElement;

const ageInput = document.getElementById("ageInput") as HTMLInputElement;

const greetButton = document.getElementById("generateGreeting") as HTMLButtonElement;

const greetingOutput = document.getElementById("greetingOutput") as HTMLParagraphElement;

greetButton.addEventListener("click", () => {

    const name: string = nameInput.value.trim();
    const age: number = Number(ageInput.value);

    if (!name || !age) {

        greetingOutput.textContent = "Please enter both name and age.";
        return;

    }

    const greeting: string =
        `Hello ${name}! You are ${age} years old. Welcome to TypeScript.`;

    console.log(greeting);

    printToConsole(greeting);

    greetingOutput.textContent = greeting;

});