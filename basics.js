//VARIABLE
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
// arithmetic operator*/

//1. write even number or odd number

let evenNumber = []
let oddNumber = []

let index = 1
while (index <= 30) {
     index++

// for (let index = 1; index <= 30; index++) {
    if(index % 2 === 0){
        evenNumber.push(index);
    }else{ 
        oddNumber.push(index)
    }
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

