// Example variables
var studentName = "John";
var score1 = 50;
var score2 = 42.5;
var sum = score1 + score2;
console.log("name:", name);
console.log("first score:", score1);
console.log("second score:", score2);
console.log("sum:", sum);
// Type assertion example
var str = "1";
var str2 = str;
console.log(typeof str2);
// Scope Example
var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13;
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14;
        console.log("local variable:", local_num);
    };
    Numbers.sval = 10;
    return Numbers;
}());
console.log("Global num:", global_num);
console.log("Static:", Numbers.sval);
var obj = new Numbers();
console.log("Class variable:", obj.num_val);
obj.storeNum();
// Interactive challenge
var button = document.getElementById("runChallenge");
button.onclick = function () {
    var city = document.getElementById("cityInput").value;
    var temp = Number(document.getElementById("tempInput").value);
    var rain = document.getElementById("rainInput").checked;
    var message = "In ".concat(city, ", it is ").concat(temp, "\u00B0C. Is it raining? ").concat(rain);
    document.getElementById("challengeOutput").textContent = message;
};
