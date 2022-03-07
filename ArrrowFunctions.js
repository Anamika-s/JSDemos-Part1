console.log("inside Js file")

// 1. Way Regualr Function
// function First()
// {
//   console.log("Inside Function1 ");
// }

// 2. Way Anonymous Method

// const First = function()
// {
//   console.log("Inside First Function")
// }
// 3. Way Arrow Function
const First = ()=>
{
  console.log("Inside First Function");
}
First();

// function Add(x, y)
// {
//   console.log(x+y);
// }
// const Add  = function(x, y)
// {
//   console.log(x+y);
// }
const Add = (x,y)=>
{
  console.log(x+y);
}
 
Add(10,20);


// function Subtract(x , y)
// {
//    return x-y;
// }

// console.log(Subtract(10,2));

// const Subtract = function(x,y)
// {
//   return x-y;
// } 

// const Subtract = (x,y)=>
// {
// return x-y;
// };

// no need to write return statement if Arrow functions has 
// one statement (returns)
// 
const Subtract= (x,y)=>
      x-y;

      console.log(Subtract(20,20));

      // if an arrow function needs 1 para , then there is 
      // no need to use ()
 const IsEven = x=>
 {
   if(x%2==0)
   return 1;
   else 
   return 0;
 }     

 console.log(IsEven(1));