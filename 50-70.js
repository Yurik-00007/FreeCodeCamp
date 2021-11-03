//50 Глобальный и локальный объем функций
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear='sweater';


  // Only change code above this line
  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);
//51 Вернуть значение из функции с возвратом
function timesFive(num){
  return (num*5);
}
console.log(timesFive(5));
console.log(timesFive(2));
console.log(timesFive(0));
//52

var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);
//52 Понимание неопределенного значения, возвращаемого функцией
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

console.log(addThree());
function addFive() {
  sum = sum + 5;
}
console.log(addFive());
console.log(sum);

//53 Присвоение с возвращаемым значением
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed=processArg(7);
// Only change code below this line
console.log(processed);


//54

//54 Изучите различия между ключевыми словами var и let
let catName = "Oliver";
catName = "Swen";
let catSound = "Meow!";
console.log(catName);
console.log(catSound);

//55 Объявите переменную только для чтения с помощью ключевого слова const

// Only change code below this line
const FCC = "freeCodeCamp";
let fact = "is cool!";
// Only change code above this line

fact = "is awesome!";
console.log(FCC, " ", fact);

//56 Очередь
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  var temp = arr.shift();
  return temp;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//57 Понимание логических значений

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

console.log(welcomeToBooleans());

//58 Использование условной логики с операторами If

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue){
  return "Yes, that was true";
}
return "No, that was false"


  // Only change code above this line

}
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

//59

//60

//61

//62

//63

//64

//65

//66

//67

//68

//69

//70