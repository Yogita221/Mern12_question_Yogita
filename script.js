// Q1) - Sum of two integers

// let a = 1;
// let b = 2;
// let sum = (a + b);
// console.log(sum)

//------------------------------------------------------------------------------------//

// Q2) - Print the messege along with values and sum
//      Ex - The sum of 45 & 12  = 57

// let a = 45;
// let b = 12;
// let sum = (a + b);
// console.log(`The sum of ${a} & ${b} = ${sum}`)

//----------------------------------------------------------------------------------------//

//Q3)- Accept two integers from user and print the sum
//	Ex - The sum of 45 & 12 = 57

// let a = +prompt("Enter the num1");
// let b = +prompt("Enter the num2");
// let sum = (a + b);
// console.log(`The sum of ${a} & ${b} = ${sum}`)

//---------------------------------------------------------------------------------------//

//Q4)- - Accept the User's name, age and print in following manner
//	Ex - Hello Shery, you are 12 years old.

//   const username = prompt("Enter your Name");
//   const age = +prompt("Enter your Age");

//   console.log(`Hello ${username} you are ${age} year old`)

//-----------------------------------------------------------------------------------------//

//Q6)- Accept two numbers from user and swap their values
//     Part 2 - Swap without using third variable

// let a = 11;
// let b = 22;
// let temp;

// temp = a;
// a = b;
// b = temp;
// console.log(a,b)

// without using third variable

// let a = 11;
// let b = 22;
//  a = a + b;                   // 33
//  b = a - b;                   // 33 - 22 =11
//  a = a - b;                   // 33 - 11 = 22

//  console.log(a,b)

 //-----------------------------------------------------------------------------------------------------//

//Q7)-  Accept the length and width of a rectangle. Calculate & print the area and perimiter.

// let length = +prompt("Enter the length of the rectangle: ");
// let width = +prompt("Enter the width of the rectangle: ");

// let area = length * width;
// let perameter = 2 * (length + width);

// console.log(`The area of the rectangle is ${area}`);
// console.log(`The perimeter of the rectangle is ${perameter}`);

//--------------------------------------------------------------------------------------------------------------//

//Q8)- Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

// const p = +prompt("Enter the principle amount");
// const r = +prompt("Enter rate of interest");
// const n = +prompt("Enter the number of times the interest is compounded per year");
// const t = +prompt("Enter the number of years the money is invested or borrowed for");
// const amount = p * Math.pow(1 + r / n, n * t);
// const compoundInterest = amount - p;

// console.log(amount.toFixed(2));
// console.log(compoundInterest.toFixed(2));

//-------------------------------------------------------------------------------------------------------------------//

//Q9)- Accept the three sides of triangle and calculate the area using herons formula

// const a = +prompt("Enter the side a");
// const b = +prompt("Enter the side b");
// const c = +prompt("Enter the side b");

//  const s = (a + b + c / 2);
//  const area = Math.sqrt(s*(s-a)*(s-b)*(s-c)); // ** 1/2
//  console.log(area.toFixed(2));
//  console.log(`the sides of the tringle ${s}`);
//  console.log(`the area of the tringle${area}`);

//----------------------------------------------------------------------------------------------------------------//

//Q10)- Find surface area of sphere

// const r = +prompt("Enter the radius of the sphere");
// const area = 4 * Math.PI * r ** 2
// console.log(`The surface area of sphere is ${(area.toFixed(2))}`);

//----------------------------------------------------------------------------------------------------------------------//

//Q11)- Find circumference and area of circle

 
//  const r = +prompt("Enter the radius"); 

//  const area = Math.PI * r ** 2;
//  const Circumference = 2 * Math.PI * r ;

//  console.log(`The area of the circle is ${area.toFixed(2)}`);
//  console.log(`The Circumference of the circle is ${Circumference.toFixed(2)}`)

//----------------------------------------------------------------------------------------------------------------------//

//Q12)- Accept two numbers and print the greatest between them

// let a = +prompt("enter first number")
// let b = +prompt("enter second number")

// if (a > b) {
//   console.log(`${a} is grater then ${b}`);
  
// }
// else{
//   console.log(`${b} is grater then ${a}`);
// }

//----------------------------------------------------------------------------------------------------------------------//

// 13- Accept the gender from the user as char and print the respective greeting message
//     Ex - Good Morning Sir (on the basis of gender)

// let name = prompt("enter your name");
// let gender = prompt("enter your gender");

// if (gender=="male"||gender=="Male") {
//     console.log("Good Morning Sir ");
    
//   } else {
//     console.log("Good Morning mam ");
//   }
    


//----------------------------------------------------------------------------------------------------------------------//

//Q14)- Extend the previous program and handle the wrong inputs.
//     Print Good Morning sir for input m or M & Good morning Maam for input F or f 
//     else print Wrong Input

// let name = prompt("enter your name");
// let gender = prompt("enter your gender");

// if (gender =="M"|| gender == "m") {
//   console.log("Good Morning Sir");
  
// }else if (gender === "F" || gender === "f") {
//     console.log("Good Morning Mam");
// }
    
//  else {
//   console.log("Wrong input");

// }

//----------------------------------------------------------------------------------------------------------------------//

//Q15)- Accept an integer and check whether it is an even number or odd.

// let num=+prompt("enter number");
// if (num %2 == 0) {
//   console.log("given number is even number");
  
// } else {
//   console.log("given number is odd number");
// }

//----------------------------------------------------------------------------------------------------------------------//

//Q16)- Accept name and age from the user. Check if the user is a valid voter or not.
//      Vaid - Hello Shery, You are a valid voter.
//      Invalid - Sorry Shery, you can't cast the vote.

// let name = prompt("enter your name ");
// let age = +prompt("enter your age ");
// if (age>=18) {
//   console.log(`Hello ${name}, You are a valid voter.`);
  
// } else {
//   console.log(`Sorry ${name}, you can't cast the vote.`);
// }

// Part 2 - Print after how many years the user will be eligible

// const username = prompt("Enter your Name");
// const age = +prompt("Enter your Age");
// if(age >= 18){
//     console.log("Eligible for Vote");
    
// } else{
//    console.log("Not eligible for Vote")

//   console.log(`sorry! ${username} you can not vote for ${18 - age} more year `)
// }


//----------------------------------------------------------------------------------------------------------------------//

// Q17)- Accept a day number between 1-7 and print the corresponding dayname

// const day = +prompt("Enter day")
// if(day == 1){
//     console.log("Monday")
// }
// else if (day == 2){
//     console.log("Tuesday")
// }
// else if (day == 3){
//     console.log("Wednesday")
// }
// else if (day == 4){
//     console.log("Tharseday")
// }
// else if (day == 5){
//     console.log("Friday")
// }
// else if (day == 6){
//     console.log("Saturday")
// }
// else if (day == 7){
//     console.log("Sunday")
// }
// else {
//     console.log("Wrong input");
    
// }

//----------------------------------------------------------------------------------------------------------------------//

//Q18)- Accept three numbers and print the greatest among them


// let a =+prompt("Enter a")
// let b =+prompt("Enter b" )
// let c =+prompt("Enter c" )

// if(a>b && a>c){
//     console.log(`largest number is ${a}`)
// }
// else if(b>c && b>a){
//     console.log(`largest number is ${b}`)
// }
// else {
    
//     console.log(`largest number is ${c}`)
// }

//----------------------------------------------------------------------------------------------------------------------//

//Q19)- Accept a year and check if it a leap year or not (google to find out what's a leap year)

let year =+prompt("enter year to cheak leap year")
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

//----------------------------------------------------------------------------------------------------------------------//

//Q20)- Shop discount - Description on Graphic
