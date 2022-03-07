console.log("Filter Demo");

const num = [1,2,3,4,5,6,7,8,9,10];

function Greaterthen4(x)
{
   return x >4;
}
let output = num.filter(Greaterthen4).map(x=> x);

console.log(output);
output = num.filter(x=>
   x>4
   )


   output = num.filter(x=>
      x%2==0)

   console.log("Even Numbers")
   console.log(output)