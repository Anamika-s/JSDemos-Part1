console.log("Arrays Demos");

const num = [1,2,3,4,15];
console.log(num);

for(var i = 0;i<num.length;i++)
console.log(num[i]);




// map , it is used to iterate thru Array 
 // Syntax for map
//const vari = arrayname.map(callback function)

const double= function(x)
{
  return x*2;
}
let output = num.map(double);

// Chaining
output = num.reverse().map(double);
console.log(output);

// function triple(x)
// {
//   return x*3;
// }


output = num.map(x=> 
  x*3
)
output = num.reverse().map(x=> 
  x*3
)
console.log("TRIPLE " + output);


function Binary(x)
{
  return x.toString(16);
}

output = num.map(Binary);

console.log(output);

