/* //VARIABLE
var Name = "ragul";
console.log(Name)
let age = 27;
console.log(age)
const MyName = "sha";
console.log(MyName);
//what's the difference between var and let
// var can be reasign a variable with same name it possible!
var Name = "ragul"
console.log(Name)
var Name = "sha"
console.log(Name)
// let can't be reasign a variable with same name it's not possible
let Summit = 30;
console.log(Summit)
let Sum = 40
console.log(Summit)
//what is const
//const is constant it can't be redeclared a variable value
const Message = "i am fine"
console.log(Message)
//DATATYPE
//primitive datatype and non-primitive datatype
//primitive datatype
let Employee ="ragul" //String
console.log(Employee)
const num = 27 //Number 
console.log(age)
const Passing = true //Boolean
console.log(Passing)
let Value = null //null
console.log(Value)
let Student ; // undefined
console.log(Student)
//non-primitive datatype
let Myarray = ["ragul","sha","indhuja","25","27"] //Array
console.log(Myarray)
console.log(Myarray[2])
let Product = {
    Name:science,
    Age:27,
}
console.log(Product.Name) //objects
                                                
//function

let number = 70;
function name (){
    let name = "ragul"
    console.log(name);
}
name()
console.log(number)
{
    var hello = "sha"
}
console.log(hello)
{
    let fan = "tata"
    console.log(fan)
}
let text = "i am fine"
 function first(){
    const age = 27
    console.log(age)
 }
   function second(){
    let mark = 90
    console.log(mark)
  }
  second()
first()
console.log(text)
// operator
// arithmetic operator

//1. write even number or odd number

let evenNumber = []
let oddNumber = []

let index = 1
while (index <= 30) {
     

// for (let index = 1; index <= 30; index++) {
    if(index % 2 === 0){
        evenNumber.push(index);
    }else{ 
        oddNumber.push(index)
    }
    index++
}
// }
console.log('EvenNumber:',evenNumber)
console.log('OddNumber:',oddNumber)
 
// 2. print a number from 1 to 20 

let i = 1
do{
    console.log(i)
    i++
}while(i<=20)

// for (let i = 1; i <=20; i++) {
    // console.log(i)
// }

// 3. fizzbuzz,print number 1 to 20,and number multiple by 3 means "fizz" and multiple by 5 "buzz",multiple both of them means "FizzBuzz"

for(number = 1; number<= 20; number++){

    if (number % 3 === 0 && number % 5 === 0) {
        console.log('FizzBuzz')
    }
    else if (number % 3 === 0) {
        console.log('Fizz')
    }
    else if (number % 5 === 0){
        console.log('Buzz')
    }
    else{
        console.log(number)
    }
}

// 4. write program to find factorial of given number

let fact= 7;
let factorial = 1;

for(i = 1; i<= fact; i++){
    factorial = factorial * i; 
}
console.log(`Factorial of ${fact} is ${factorial}`);



// function

 function myName(name){
   console.log("my name is",name)
}
myName("ragul")

let num = function name(name = ragul){
    console.log("hello")
}
console.log(num)

// callback

function fun(){
    return 5
}
console.log(fun()) 
function time(){
    console.log("second function2")
}
time(fun())
 */
// 1.what's the output?
/* function test() {
var a = 10;
if (true) {
var a = 20;
}
console.log(a);
}
test();

// output:20 ..because var is function scope it run outside of the block
// 2.what's the output?
function test() {
let a = 10;
if (true) {
let a = 20;
}
console.log(a);
}
output:error,if function call means output is 10 because let block scope it can't run outside of a block

// 3.fix the error
// console.log(a)
// let a = 5
let a = 5
console.log(a)
// note: "a" is cannot access before the initialization

// 4.
function test() {
if (true) {
let a = 10;
console.log(a);
    }
}
test();
//   fix error and give valid output----inside a function let variable is assigned but it initialized outside of block,we can assign inside a block it will return a value 10.

// 5.
function outer() {
let count = 0;
return function() {
count++;
return count;
}
}

const fn = outer();
console.log(fn());
console.log(fn()); */
// find Output?....it's output is 1,2 because it closure inside a function remember and has access to variable from its outer scope even a outer scope has finished executing

// 6. Write a program to find largest number in the given findLargest(10, 25, 15)
// const findLargest = [3,5,2,7,4,9]
// let large = findLargest[0]

// for(let i = 1; i <= findLargest.length; i++){
//     if(findLargest[i] > large){
//         large = findLargest[i];
//     }
// }
// console.log(large)
// 7.Write a program to swap 2 variables without creating third variable.

// let a = 20;
// let b = 15;
// console.log("Before swap:", 'a =',a ,'b =',b );
// a = a + b //a is now 35
// b = a - b // b is now 20 (original value of a)
// a = a - b // a is now 15 (original value of b)
// console .log("after swap:",'a =', a ,'b=',b)

// 8.Fix the error in the below program

// var test = function() {
//   console.log("Hello");
// }
// test();

// 9.write a program to create function with default parameters the return some value.

// function text(name = 'ragul',age = 27){
//     return `${name},${age}`;
// }
// console.log(text()) output:ragul,27

// 10. find output of the given program
// let a = 1;

// function outer() {
// let b = 2;
// function inner() {
// let c = 3;
// console.log(a + b + c);
// }
// inner();
// }
// outer(); //output:6

// 11. Find output 
// let a = 10;

// function test() {
// let a = 20;
// console.log(a);
// }

// test(); //output:20

// 12.write a program to Create Calculator Function (example calculate(5,2,”+”)=7) likewise it should work for +, -, *, /

// function calCulate(number1,number2,operator){
//     switch (operator){
//         case '+':
//             return number1 + number2; 
//         case '-':
//             return number1 - number2; 
//         case '*':
//             return number1 * number2; 
//        case '/':
//            if(number2 === 0){
//             return "Error: division by zero is not allowed.";
//            }
//            return number1 / number2;
//            default:
//             return "ERROR: INVALID OPERATOR PROVIDED.";
//      }
// }
// const result = calCulate(5,2, '+')
// console.log(`5 + 2 = ${result}`);
// const result1 = calCulate(5,2, '-')
// console.log(`5 - 2 = ${result}`);
// const result2 = calCulate(5,2, '*')
// console.log(`5 * 2 = ${result}`);
// const result3 = calCulate(5,2, '/')
// console.log(`5 / 2 = ${result}`);

// // 13. say true or false 
// console.log(null == undefined); //? output:True ,typeof is object
// console.log(null === undefined); //? output:false it follow strict rule ,typeof is undefined

// 14.Give me output?
// let a = 5;
// console.log(a++); // ? output:5,printfirst than increment next 6
// console.log(++a); // ? output:7,increment first than print 7

// 15. Write a program to check number is positive or negative.

// const value = 6;
// console.log(value > 0 ? "positive number": value < 0 ? "negative number": "zero");

// 16. var vs const vs let difference and explain

// scope:
// var:function and global scope
// let and const:block scope (curly braces {})
// reassignment & redeclaration:
// var: both allowed
// let:reassignmrnt allowed,but not redeclaration within a same scope
// const:neither allowed
// hoisting:
// var:hoisted and initialized with 'undefined'
// let/const:hoisted but not initialized,resulting in a temporal dead zone (tdz)

// 17. Write program on Fibonacci Series







// Arrays

/* let lists = ["australia","newzealand","finland","luxemberg","switzerland","iceland","germany","brazil","ireland"]
// push
lists.push("netherland")
console.log(lists)
// pop
lists.pop("netherland")
console.log(lists)
// unshift
lists.unshift("singapore")
console.log(lists)
// shift
lists.shift("singapore")
console.log(lists) */
// map
/* let numbers = [4,6,8,3,2,6];
const filArr = numbers.map(num => num * 2);
console.log(filArr); */
// filter
let numb = [2,3,4,5,6,7,8,9];
const after = numb.filter(arr => arr > 3)
console.log(after)
// reduce
const sum =[3,4,5]
const total = sum.reduce((Acc, x)=> Acc + x);
console.log(total)






























