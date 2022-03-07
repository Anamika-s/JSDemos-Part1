const users = 
[
   {firstName : "Ajay", lastName: "Sood", Age : 28},
   {firstName : "Deepak", lastName: "Kumar", Age : 28},
   {firstName : "Lalit", lastName: "Singh", Age : 30},
   {firstName : "Ajay", lastName: "Sood", Age : 27},
   {firstName : "Ajay", lastName: "Sood", Age : 25}
];


// for(var i = 0;i<users.length;i++)
// console.log(users[i].firstName + " " + users[i].lastName);

let usersList = users.map(x=>
  {
    console.log(x.firstName + x.lastName)
  })

let usersListAgeMoreThan25 =  users.filter(x=>
   x.Age> 25)
   
console.log(usersListAgeMoreThan25);
  
usersListAgeMoreThan25 =  users.filter(x=>
    x.Age> 25).map(x=>x.firstName)
    console.log(usersListAgeMoreThan25)
    