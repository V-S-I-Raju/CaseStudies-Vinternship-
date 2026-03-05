// Example variables

var studentName: string = "John";

var score1: number = 50;

var score2: number = 42.5;

var sum = score1 + score2;

console.log("name:", name);
console.log("first score:", score1);
console.log("second score:", score2);
console.log("sum:", sum);


// Type assertion example

var str = "1";

var str2: number = <number><any>str;

console.log(typeof str2);


// Scope Example

var global_num = 12;

class Numbers {

num_val = 13;

static sval = 10;

storeNum(): void {

var local_num = 14;

console.log("local variable:", local_num);

}

}

console.log("Global num:", global_num);

console.log("Static:", Numbers.sval);

var obj = new Numbers();

console.log("Class variable:", obj.num_val);

obj.storeNum();


// Interactive challenge

const button = document.getElementById("runChallenge") as HTMLButtonElement;

button.onclick = () => {

const city = (document.getElementById("cityInput") as HTMLInputElement).value;

const temp = Number((document.getElementById("tempInput") as HTMLInputElement).value);

const rain = (document.getElementById("rainInput") as HTMLInputElement).checked;

const message = `In ${city}, it is ${temp}°C. Is it raining? ${rain}`;

(document.getElementById("challengeOutput") as HTMLElement).textContent = message;

};