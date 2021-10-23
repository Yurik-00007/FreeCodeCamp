//50 Глобальный и локальный объем функций
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear='sweater'


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


//55

