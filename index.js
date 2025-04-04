console.log("The return keyword in JavaScript is used inside a function to send a value back to where the function was called. It stops the execution of the function and specifies the value that should be returned.");
console.log("Function expression is a way to define a function as a value,often assigned to a variable");


const greet = function(name) {
    return `Hello, ${name}!`;
  };
  
  console.log(greet("Alice")); 

  let numbers = function(num1,num2){
    return num1 % num1;
  }
  console.log(numbers(100,50));

  const paraFn = () => {
    console.log("variable is assigned to the function(fat arrow)");

  }
paraFn();

console.log("We need function in our program beacause they allow you to write reusable, organized, and efficient code.");

let sumofNum = (num3,num4,num5,num6) => {
    return num3 + num4 + num5 + num6;
}
console.log(sumofNum(12,13,65,25));

let multiplicationofNum = (num3,num4,num5,num6) => {
    return num3 * num4 * num5 * num6;
}
console.log(multiplicationofNum(21,5,10,25));

let subractionofNum = (num3,num4,num5,num6) => {
    return num3 - num4 - num5 - num6;
}
console.log(subractionofNum(12,13,65,25));

const calculateBoxArea = (length, height) => {
  return length * height
}
console.log(calculateBoxArea(20, 30));


let fruits = ["Apple", "Banana", "Orange"];

let addFruit = (fruit) => {
    fruits.push(fruit);
    return fruits;
};

console.log(addFruit("Mango"));

let stringItem = (str) => {
  for(i = 0; i < str.length; i++){
    console.log(str[i]);
  }

}
stringItem("Hello World");

let ageCalculator = () => {
  let ageYear = 2000;
  let year = 2025;
  return year - ageYear;
}
console.log(ageCalculator());

let foodItems = ["Rice", "Beans", "Chicken", "Milk", "Eggs", "Tomatoes", "Onions", "Bread", "Apples", "Carrots"];
//for loop//
for(let i = 0; i <= foodItems.length; i++) {
  console.log(foodItems[i]);
}
//while loop//
let count = 0;
while(count <= foodItems.length){
  console.log(foodItems[count]);
  count ++
}
//do while loop//
let foodStart = 0;
do{ 
  console.log(foodItems[foodStart]);
  foodStart ++
}while(foodStart <= foodItems.length);



const dashboardMenu = [
  { id: 1, name: "Dashboard", icon: "home", path: "/dashboard" },
  { id: 2, name: "Orders", icon: "shopping-cart", path: "/orders" },
  { id: 3, name: "Products", icon: "box", path: "/products" },
  { id: 4, name: "Customers", icon: "users", path: "/customers" },
  { id: 5, name: "Reports", icon: "bar-chart", path: "/reports" },
  { id: 6, name: "Messages", icon: "message-square", path: "/messages" },
  { id: 7, name: "Settings", icon: "settings", path: "/settings" },
  { id: 8, name: "Profile", icon: "user", path: "/profile" },
  { id: 9, name: "Logout", icon: "log-out", path: "/logout" }
];
//for loop//
for(i = 0; i < dashboardMenu.length; i++){
  console.log(dashboardMenu[i].name);
}

//while loop//
let startCount = 0;
while(startCount < dashboardMenu.length){
  console.log(dashboardMenu[startCount].name);
  startCount ++
}

//do while loop//
let continueCount = 0;
do{
  console.log(dashboardMenu[continueCount].name);
  continueCount ++
}while(continueCount < dashboardMenu.length);

//while loop//
let countingNum = 10;
while(countingNum >= 1){
  console.log(countingNum);
  countingNum --
}




