/*
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

//59 Сравнение с оператором равенства
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual('12'));

//60 Сравнение с оператором строгого равенства

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict('7'));

//61 Практикуйтесь в сравнении разных значений
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
let w='11';
console.log(typeof(w));
console.log(compareEquality(10, "10"));

//62 Сравнение с оператором неравенства

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(99));
*/
//63 Сравнение с оператором строгого неравенства
// Setup
function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual('17'));
//64 Сравнение с оператором
function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(100));
//65

function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//66
function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(10));
//67
function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

console.log(testLessOrEqual(24));
//68
function testLogicalAnd(val) {
  // Only change code below this line

  if (val<=50 && val>=25) {
    
      return "Yes";
  
  }

  // Only change code above this line
  return "No";
}

  console.log(testLogicalAnd(55));
//69
function testLogicalOr(val) {
  // Only change code below this line

  if (val<10 || val>20) {
    return "Outside";
  }

 

  // Only change code above this line
  return "Inside";
}

console.log(testLogicalOr(0));
//70

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }else   {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

console.log(testElse(6));