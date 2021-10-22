//22
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
// Change this line
console.log(myStr);

//23
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr);

//24
var myStr='FirstLine\n\t\\\SecondLine\nThirdLine'; 
console.log(myStr);

//25
var myStr = 'This is the start. '+'This is the end.'; // Change this line
console.log(myStr);

//26
// Only change code below this line

var myStr = 'this is the first sentence. ';
myStr +="This is the second sentence.";
console.log(myStr);

//27
// Only change code below this line
var myName = 'Yurik';
var myStr = 'My name is '+myName+' and I\'m well!';
console.log(myStr);
//28
// Change code below this line
var namber=28;
var someAdjective = 'awesome';
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(namber+'\n'+myStr);
//29
// Setup
var namber=29;
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;
console.log(namber+'\n'+lastNameLength);
//30
// Setup
var namber=30;
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
console.log(namber+'\n'+firstLetterOfLastName);

//31
// Setup
var namber=31;
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
console.log(namber+'\n'+myStr);

//32
// Setup
var namber=32;
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line
console.log(namber+'\n'+thirdLetterOfLastName);
//33
var namber=33;
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
console.log(namber+'\n'+lastLetterOfLastName);

//34
var namber=34;
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line
console.log(namber+'\n'+secondToLastLetterOfLastName);
//35
var namber=35;
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "I saw a "+myNoun+". It was very "+myAdjective+". I was afrade of it and I "+myVerb+" "+myAdverb+"."; // Change this line
// Only change code above this line
console.log(namber+'\n'+wordBlanks);

//36
// Only change code below this line
var namber=36;
var myArray = ['sanny',5,'nice'];
console.log(namber+'\n'+myArray);
//37
// Only change code below this line
var namber=37;

var myArray1 = [['Bill',36],['Tomm',33],['Ann',22]];
console.log(namber+'\n'+myArray1);
//38
var namber=38;

var myArray = [50,60,70];
var myData=myArray[0];
console.log(namber+'\n'+myData);

//39
// Setup
var namber=39;

var myArray = [18,64,99];
myArray[0]=45;
// Only change code below this line
console.log(namber+'\n'+myArray);

//40
var namber=40
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];
var myData1 = myArray[3];

console.log(namber+'\n'+myData+'\n'+myData1);

//41
var namber=41

// Setup
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3]);
// Only change code below this line
console.log(namber+'\n'+myArray);
//42 Управление массивами с помощью pop ()
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray=myArray.pop();
console.log(removedFromMyArray);
console.log(myArray);
//43 Управление массивами с помощью shift ()
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray=myArray.shift();
console.log(removedFromMyArray);
console.log(myArray);
//44 Управление массивами с помощью unshift ()
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
console.log(myArray);
myArray.unshift(["Paul",35]);
console.log(myArray);
// Only change code below this line

//45 Список покупок
var myList = [['potato',2],['cucumbers',4],['tomatoes',2],['meat',2],['Chocolate Bar',15]];
console.log(myList);

//46 Написание многоразового JavaScript с функциями
function reusableFunction(){
    console.log("Hi World");
  }
  reusableFunction();

//47 Передача значений функциям с аргументами
function functionWithArgs(a,b){
    console.log(a+b);
  }
  functionWithArgs(1,2);
  functionWithArgs(7,9);

//48


//49


//50


//51


//52


//52


//53


//54


//55

