console.log("Varibales Demo");

// There are 3 ways to declare variables
// 1. var 2. let 3. const

// Hoisting, var declaration part is moved to the top of the prog 
num = 10;
var num;
console.log(num);
num ="Hello";
console.log(num);

// This prob is resolved by using let & const

let num1;
num1 = 20;
num1="Hello";
console.log(num1);

// when u declare a var with const keyword, it becomes 
// mandat to give it a value also in same line
// num2= 300;
const num2= 300;
console.log(num2);
// we cannot reassign value in a constant var
//num2= 300;


// let & const variables have local scope
// var variables have global scope


console.log("After Test Method by using var");
test = 100;
function First()
{

  console.log(test);
  test = 200;
}

First();
console.log(test);


console.log("After Test Method by using let");
test1 = 100;
function First1()
{

  let test1 = 1000;
  console.log(test1);
  test1 = 200;
}

First1();
console.log(test1);

TEST = 10;
console.log(TEST);
{
  let TEST1 = 500;
  console.log(TEST1);
}
console.log(TEST1)







