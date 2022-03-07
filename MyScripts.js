console.log("Inside JS file");
const arr = [1,2,3,4,5];

// Double =[10,4,8,14]

//  function double(x)
//  {
//     return x*2;
//  }

// const double = function(x)
// {
//   return x*2;
// }


const double = x=>
 x*2;
 const triple = x=>
 x*3;

  const Binary =x=>
    x.toString(16);
  //  const out = arr.map(function Binary(x)
  //  {
  //    return x.toString(2);
  //  })
 let output = arr.map(double);
 console.log(output);

 output = arr.map(triple);
 console.log(output);

 output = arr.map(Binary);
 console.log(output);

 

  // LINQ 
  // var x = (from temp in collection
  //  select temp)

  console.log("Odd Values");

output = arr.filter(IsOdd);

function IsOdd(x)
{
  return x%2;
}
function IsEven(x)
{
  return x%2==0;
}
const out1 = arr.filter(function greaterthan4(x)
{
   return x >4;
}
)
console.log("Odd Numbers")
console.log(output)
output = arr.filter(IsEven);
console.log("Even numbers")
console.log(output)
console.log(out1)
  // const out2 = arr.filter(x)
  // {
  //    x>2;
  // }

  const out3 = arr.filter(x => x<10)
  console.log(out3)


// Sum of numbers

function findSum(arr)
{
  let sum = 0
  for(let i=0;i<arr.length;i++)
  sum+=  arr[i];
  return sum;
}

console.log("Sum is " + findSum(arr));

// Max no 
function MaxNo(arr)
{
  let max = 0
  for(let i=0;i<arr.length;i++)
  if(arr[i] > max)
  max = arr[i];
  return max;
}

console.log("Max no is " + MaxNo(arr));
// Reduce


// const arr =[1,2,3,4];
const sum = arr.reduce(function(acc, cur)
{
   acc = acc+ cur;
   return acc;
},0)

console.log(sum);

const max = arr.reduce(function(acc, cur)
{
   if(cur>acc){
     acc = cur;
   }
   return acc;
})

console.log(max);


// Collections

const users =[
  {firstName:"Ajay", lastName:"Sood", Age:23},
  {firstName:"Deepak", lastName:"Kumar", Age:41},
  {firstName:"Vjay", lastName:"Sood", Age:25},
  {firstName:"Ajay", lastName:"Sood", Age:23}
];

// List all names

var usersList = users.map(function(x)
{
  console.log(x.firstName + " " + x.lastName)
})


usersList = users.filter(function(x)
{
   return x.Age> 30;

})

usersList = users.filter((x)=> x.Age> 30).map((x)=> x.firstName);

console.log("Users List")
console.log(usersList);




//23 : 2, 41 : 1, 25 :1

const usersGroup = users.reduce(function(acc,cur)
{
   if(acc[cur.Age])
   {
      acc[cur.Age] = ++ acc[cur.Age];
   }
   else 
   {
     acc[cur.Age] = 1;

   }
   return acc;
},{})


console.log(usersGroup);



