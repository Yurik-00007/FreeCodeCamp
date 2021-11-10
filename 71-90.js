//71
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

//82

//83

//84

//85

//86

//87

//88

//89

//90