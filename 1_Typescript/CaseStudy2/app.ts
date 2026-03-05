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

const consoleBox = document.getElementById("consoleBox") as HTMLDivElement;

function printToConsole(message: string): void {

    const line = document.createElement("div");
    line.textContent = message;

    consoleBox.appendChild(line);

}



/* ===============================
Identifier Demonstration
================================ */

// Valid identifiers
let firstName: string = "Raju";
let num1: number = 10;
let _total: number = 20;
let $result: number = num1 + _total;

printToConsole("Identifier Example:");
printToConsole(`firstName = ${firstName}`);
printToConsole(`$result = ${$result}`);



/* ===============================
Function Example
================================ */

function doubleNumber(num: number): number {

    // Expression example
    const result = num * 2;

    return result;

}



/* ===============================
Interactive Challenge
================================ */

const fruitInput = document.getElementById("fruitInput") as HTMLInputElement;
const numberInput = document.getElementById("numberInput") as HTMLInputElement;

const runChallenge = document.getElementById("runChallenge") as HTMLButtonElement;
const challengeOutput = document.getElementById("challengeOutput") as HTMLParagraphElement;


runChallenge.addEventListener("click", () => {

    consoleBox.innerHTML = "";

    // Variable example
    const fruit: string = fruitInput.value;

    const numberValue: number = Number(numberInput.value);

    // Statement example
    if (!fruit || isNaN(numberValue)) {

        challengeOutput.textContent = "Please enter both fruit and number.";
        printToConsole("Invalid input detected.");
        return;

    }

    const doubled = doubleNumber(numberValue);

    // Expression example
    const message = `Favorite fruit: ${fruit}. Double of ${numberValue} is ${doubled}.`;

    challengeOutput.textContent = message;

    printToConsole("Challenge Result:");
    printToConsole(message);

});



/* ===============================
Object Oriented Example
================================ */

class Person {

    name: string;

    constructor(name: string) {

        this.name = name;

    }

    sayHello(): string {

        return `Hello! My name is ${this.name}.`;

    }

}

const runClassDemo = document.getElementById("runClassDemo") as HTMLButtonElement;

runClassDemo.addEventListener("click", () => {

    const person = new Person("Developer");

    const greeting = person.sayHello();

    console.log(greeting);

    printToConsole("Class Example:");
    printToConsole(greeting);

});



/* ===============================
Keyword Demonstration
================================ */

function showKeywordExamples(): void {

    printToConsole("Common TypeScript Keywords:");

    const keywords = [
        "break", "case", "const", "continue",
        "do", "else", "enum", "export",
        "for", "function", "if", "import",
        "let", "new", "return", "static",
        "switch", "this", "throw", "true",
        "try", "typeof", "var", "while"
    ];

    keywords.forEach(k => printToConsole(k));

}

showKeywordExamples();