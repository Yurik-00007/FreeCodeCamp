//71
/*
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }else if (val < 5) {
      return "Smaller than 5";
    }else{
      return "Between 5 and 10";
    }
  }
  
  console.log(testElseIf(7));
//72 Логический порядок в операторах If Else
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
//73 Цепочка операторов If Else
function testSize(num) {
  // Only change code below this line
if(num<5){
  return "Tiny";
}else if(num<10){
  return "Small";
}else if(num<15){
  return "Medium";
}else if(num<20){
  return "Large";
}else if(num >= 20){
  return "Huge";
}
else{
  return "Change Me";}
  // Only change code above this line
}

console.log(testSize(7));
//74
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if(strokes == 1){
  return names[0];
}else if(strokes <= par-2){
  return names[1];
}else if(strokes <= par-1){
  return names[2];
}else if(strokes <= par){
  return names[3];
}else if(strokes <= par+1){
  return names[4];
}else if(strokes <= par+2){
  return names[5];
}else if(strokes >= par+3){
  return names[6];
}
else{
  return "Change Me";
}
  // Only change code above this line
}

console.log(golfScore(5, 4));
//75
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 1:
  console.log(answer='alpha');
  break;
  case 2:
  console.log(answer='beta');
  break;
   case 3:
  console.log(answer='gamma');
  break;
   case 4:
  console.log(answer='delta');
  break;
}


  // Only change code above this line
  return answer;
}

caseInSwitch(4);

//76 Добавление параметра по умолчанию в операторы переключения

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break;
  default:
  answer = "stuff";
  break;
}


  // Only change code above this line
  return answer;
}

console.log(switchOfStuff("b"));

//77

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch(val){
case 1:
case 2:
case 3:
answer = "Low";
break;
case 4:
case 5:
case 6:
answer = "Mid";
break;
case 7:
case 8:
case 9:
answer = "High";
break;
default:
answer = "there is no answer";
}
  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(9));

//78
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case "bob": 
    answer = "Marley";
    break;
   case 42 :
    answer = "The Answer";
    break;
   case 1 :
    answer = "There is no #1";
    break;
   case 99 :
    answer = "Missed me by this much!";
    break;
   case 7 :
    answer = "Ate Nine";
    break;
    default:
    answer = "NO answer";
    break;
  }

  // Only change code above this line
  return answer;
}

console.log(chainToSwitch(7));
//79
function isLess(a, b) {
  // Only change code below this line

    return a < b;
  
    
  // Only change code above this line
}

console.log(isLess(10, 15));
//80
// Setup
function abTest(a, b) {
  // Only change code below this line
if(a<0){
  return undefined;
}else if(b<0)
return undefined;

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,-2));
//81
let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count+=1;
    break;
    case 7:
    case 8:
    case 9:
    count+=0;
    break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    count-=1;
    break;
  }


  return "Change Me";
  // Only change code above this line
}
cc(2); cc(3); cc(7); cc('K'); cc('A')
let result=''
if (count>0){
  result='Bet';
}else{
  result='Hold';
}
console.log(count+' '+result);
//82
const myDog = {
  // Only change code below this line
'name': 'Sharif',
legs: 4,
tails: 1,
friends: ['people', 'dogs']


  // Only change code above this line
};
console.log(myDog)

//83
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;  
console.log(hatValue);
console.log(shirtValue);
//84
// Setup
const testObj1 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj1['an entree'];   // Change this line
const drinkValue = testObj1['the drink'];    // Change this line
console.log(entreeValue);
console.log(drinkValue);
//85
// Setup
const testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj2[playerNumber]; 
console.log(player);
//86
const myDog86 = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog86.name='Happy Coder';
console.log(myDog86);
//87
const myDog87 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog87["bark"]="bow-wow";
myDog87["bark2"]="wow";
//88
delete myDog87.tails;
console.log(myDog87);
//89
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
 const lookup = {
     alpha: "Adams",
     bravo : "Boston",
     charlie: "Chicago",
     delta: "Denver",
     echo: "Easy",
     foxtrot: "Frank"
  };
result = lookup[val];
  // Only change code above this line
  return result;
}

console.log(phoneticLookup("charlie"));
//90

var myObj90 ={
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
function checkObj(checkProp) {
  // Only change code below this line
  if(myObj90.hasOwnProperty("checkProp")){
    return myObj90[checkProp];
  }else if(myObj90.hasOwnProperty(checkProp)!==true){
    return "Not Found";
  }else{
  return "Change Me!";
  }
  // Only change code above this line
}
checkObj("gift");
*/

function checkObj(obj, checkProp) {
  // Only change code below this line
  console.log(obj.hasOwnProperty(checkProp));
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }else if(obj.hasOwnProperty("checkProp")!==true){
    return "Not Found";
  }else {
  return "Change Me!";
  }
  // Only change code above this line
}
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));
