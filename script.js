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

// let year =+prompt("enter year to cheak leap year")
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//   console.log(`${year} is a leap year.`);
// } else {
//   console.log(`${year} is not a leap year.`);
// }

//----------------------------------------------------------------------------------------------------------------------//

//Q20)- Shop discount - Description on Graphic

// let price = +prompt("Enter the price");

// if(price <= 1000){
//   console.log("Discounted price :", (price - (price * (0.1))))
// }
// else if(1000 > price && price <= 2000){
//   console.log("Discounted price :", (price - (price * (0.2))))
// }
// else{
//   console.log("Discounted price :", (price - (price * (0.3))))
// }


//----------------------------------------------------------------------------------------------------------------------//

//Q22)- Accept an english alphabet from user and check if it is a consonent or a vowel;

// let char = prompt("Enter an English alphabet");
// if(char == 'a' || char == 'e' || char == 'o' || char == 'i' || char == 'u' 
// || char == 'A' || char == 'E' || char == 'O' || char == 'I' || char == 'U'){
//   console.log(`it is a ${char}  vowel`);
// }else{
//     console.log(`it is a ${char} Consonent`);
// }

//----------------------------------------------------------------------------------------------------------------------//

//Q23) - Accept an integer and Print hello world n times

// let n = prompt("Enter a number");  

// for (let i = 0; i < n; i++) {
//     console.log("Hello, World!");  
// }

//----------------------------------------------------------------------------------------------------------------------//

//Q24)- Print natural number up to n. 
   
// let n = prompt("enter number to print  numbers"); 

// for (let i = 1; i <= n; i++) {
//     console.log(i);
// }
     

//----------------------------------------------------------------------------------------------------------------------//

//Q25)- Reverse for loop. Print n to 1.

// let n = prompt("enter number to print  numbers"); 

// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }

//----------------------------------------------------------------------------------------------------------------------//

//Q26)- Take a number as input and print its table
//       5 * 1 = 5
//       5 * 2 = 10 ... up to 10 terms


// let num = +prompt("Enter a number to print table");
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
// }

//----------------------------------------------------------------------------------------------------------------------//

//Q27) - sum upto n.

// let n = prompt("enter number to add ");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(`sum of upto ${n} term is = ${sum}`);

//----------------------------------------------------------------------------------------------------------------------//

//Q28)- Factorial of a number

// let n = prompt("enter number to find its factorial ");
// let factorial=1;
// for (let i = 1; i <= n; i++) {
// factorial*=i;
// }
// console.log(factorial);

//----------------------------------------------------------------------------------------------------------------------//

//Q29)- Print the sum of all even & odd numbers in a range seperately.

// let n = +prompt("enter number to sum of all even & odd numbers in a range seperately. ");
// let even=0;
// let odd=0;
// for (let i = 1; i <= n; i++) {
// if ( i%2 == 0 ) {
//   even+=i;
// } else {
//   odd+=i;
// }
// }
// console.log(`sum of even number is ${even}`);
// console.log(`sum of odd number is ${odd}`);

// ------------------------------------------------------------------------------------------------------------------------//

//Q30)- Print all the factors of a number.

// let n = +prompt("Enter the number to find its factor")
//  for(let i = 1; i<=n; i++){
//     if(n % i == 0){
//         console.log(i)
//     }
//  }

//-------------------------------------------------------------------------------------------------------------------------//

 //Q31)- Print the sum of all factors of a number, 50 -> 1 + 2 + 5 + 10 + 25 = 43

//  let n = +prompt("Enter number to find its factors for sum")
//  let sum = 0;
//  for(let i = 1; i<=n; i++){
//     if(n % i == 0){
//         sum += i;
        
//     }
//  }
// console.log(`sum of factor ${n} =  ${sum}`);

//-----------------------------------------------------------------------------------------------------------------------//

//Q32)- check if the numer is prime or not

// let n = prompt("enter number to Check if the number is Prime or not ");
// let flag = true;
// for (let i = 2; i <= n / 2; i++) {
//   if (n % i == 0) {
//     flag = false;
//     break;
//   }
// }
// if (flag == true) {
//   console.log(`given number ${n} is  Prime`);
// } else {
//   console.log(`given number ${n} is non Prime`);
// }

//-----------------------------------------------------------------------------------------------------------------------//

//Q33)- Write a program to take two inputs a, b & find the value of  a raised to the power of b. 
//	Ex - a = 2, b = 5
//	OP - 2^5 = 32

// let a = +prompt("enter a number  ");
// let b = +prompt("enter b number ");
// result = 1;
// for (let i = 0; i < b; i++) {
//   result *= a;
// }
// console.log(`${a} raised to the power of ${b} is ${result}`);

//-----------------------------------------------------------------------------------------------------------------------//

//Q34)- Seprate each digit of a number and print it on the new line ex - 123 
//	    OP
//		3
//		2
//		1

// let a = 123;
// while(a > 0) {
//     let rem = a % 10;
//     console.log(rem);    // print last digit
//     a = Math.floor(a/10);
// }

//----------------------------------------------------------------------------------------------------------------------//

//Q35)- Sum of digits of a number, 936 = 18

// let a = 936;
// let sum =0
// while(a> 0) {
//     let rem = a % 10;
//     sum += rem;
//     a = Math.floor(a/10);
    
// }
//     console.log(sum);


//----------------------------------------------------------------------------------------------------------------------//

//Q36)- Accept the number and it reverse number

// let a = 123;
// let rev = 0;
// while(a>0) {
//     rev=(rev*10) + (a%10);
//     a = Math.floor(a/10);
// }
// console.log(rev);

//----------------------------------------------------------------------------------------------------------------------//

//Q37)- Accept a number and check if it is a pallindromic number (If number and its reverse are equal)
    //   Ex - 12321 - Rerverse - 12321

    // let num = +prompt("Enter the number");
    // let copy = num;
    // let rev = 0;
    // while(num > 0) {
    //     rev=(rev * 10) + (num % 10);
    //     num = Math.floor(num/10);
    // }
    // console.log(rev === copy ? "palinndrone" : "Not Palindrone")


//-----------------------------------------------------------------------------------------------------------------------//

//Q38)- Accept a number and check if it is a strong number or not (Sum of factorial of each digit)
    //   Ex- 145 = 1! + 4! + 5! = 145

// let a = 145;
// let copy = a;
// let sum = 0;
// while(a>0){
//     let rem = a % 10;
//     let fact = 1;
//     for(let i = 1; i <=rem; i++){
//         fact *= i;        
//     }
//     sum +=fact;
//     a = Math.floor(a/100);
// }

// console.log(sum === a? "strong ": "Not Strong");

//--------------------------------------------------------------------------------------------------------------------//

//Q39)- Automorphic number 5 = 25 = 625 = 390625, 6=36, 76 = 5776

// var n = 625;
// var temp = n;
// var sq = n*n;
// var count = 0;

// while ( n != 0) {
//   count++; 
//   n = Math.floor(n/10);

// }
// n = temp;
// const result = sq % Math.pow(10,count);
// console.log(result == n);

//--------------------------------------------------------------------------------------------------------------------//

//Q40)- Print hello until user gives wrong input using do while

 


//--------------------------------------------------------------------------------------------------------------------//

//Q42)- Print Weekday using Switch

// var day = +prompt("Enter the Number");
// switch(day){
//     case 1: {
//         console.log('Monday')
//         break;
//     }
//     case 2: {
//         console.log('Tuesday')
//         break;
//     }  case 3: {
//         console.log('Wednesday')
//         break;
//     }
//     case 4: {
//         console.log('Thursday')
//         break;
//     }
//     case 5: {
//         console.log('Friday')
//         break;
//     }
//     case 6: {
//         console.log('Saturday')
//         break;
//     }
//     case 7: {
//         console.log('Sunday')
//         break;
//     }
//     default: {
//         console.log('Invalid Input')
//     }
// }

//-------------------------------------------------------------------------------------------------------//

