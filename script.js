console.log("This is a script file")
 function Add()
{
  var no1 = parseInt(document.getElementById("txtNo1").value);
  var no2= parseInt(document.getElementById("txtNo2").value);
  document.getElementById("txtResult").value = no1+no2;
}
function Subtract()
{
  var no1 = parseInt(document.getElementById("txtNo1").value);
  var no2= parseInt(document.getElementById("txtNo2").value);
  document.getElementById("txtResult").value = no1-no2;
}
function Product()
{
  var no1 = parseInt(document.getElementById("txtNo1").value);
  var no2= parseInt(document.getElementById("txtNo2").value);
  document.getElementById("txtResult").value = no1*no2;
}
function Divide()
{
   var no1 = parseInt(document.getElementById("txtNo1").value);
  var no2= parseInt(document.getElementById("txtNo2").value);
   document.getElementById("txtResult").value = no1/no2;
}
 function Display1to10()
 {
   var result="";
   for(var i = 1;i<=10;i++)
      result += i+"\n";
      console.log(result); 
 } 

 function Table()
 {
  var result="";
  for(var i = 1;i<=10;i++)
     result += 6 + " *  " +  i + " = " + 6*i + "\n";
     console.log(result); 
     DisplayDiv();
     
  
 }
 function DisplayDiv()
 {
   document.getElementById("div1").style.display="block";
 }
 function FillMessage()
 {
  document.getElementById('div1').innerHTML ='Page has been loaded';
 }


 let x = function IsEven(no)
 {    if(no %2 ==0)
        return "Even"
      else 
        return("Odd")

 }

  console.log(x(10));
 
  function CallStringFunctions()
  {
    var name = document.getElementById("txtName").value;
    console.log(name.length);
    console.log(name.toUpperCase());
    console.log(name.toLowerCase());
    let str = "Apple, Banana, Kiwi";
    let part = str.slice(7, 13);
    console.log(part);
    console.log(name.substring(2,5));
    console.log(name.indexOf('a'));



  }