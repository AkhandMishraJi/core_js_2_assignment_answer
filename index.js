// Question 1
const square =(Number) => Number*Number
console.log(square(5));

//QUESTION 1 END

 // QUESTION NO. 2
 
const ages = [19,22,19,24,20,25,26,24,25,24]
//TO FIND MAXIMUM  AND MINIMUM AGE AND SORTING AGES 
max = Math.max(...ages)
min = Math.min(...ages)
console.log( ' THE MAX AGE IS ',max);
console.log( ' THE MIN AGE IS ',min);
console.log(`THE SORTED ARRAY   ${ages.sort()}`);
//TO FIND MIDDLE AGE
console.log(` ${ages[5]} , ${ages[6]} `);
//to find average age

let sum = 0
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
avg = sum/ages.length
console.log(`THE AVERAGE IS = ${avg}`);
//to find range of no. between  max and min ages ;
console.log(ages.reverse());
//comparing (min-average) and (max-average) using abs()
minavg = Math.abs(min - avg)
maxavg = Math.abs(max- avg)
console.log(`${min} - ${avg}`);
console.log(`${max} - ${avg}`);

//Question 3
const userData = new Map()
userData.set("Akhand",{
    name:"Akhand",
    age:10,
    email:"kanhamishra286@gmail.com",
    location:"India"
})
userData.set("Ramesh",{
    name:"Ramesh",
    age:55,
    email:"Ramesh6@gmail.com",
    location:"India"
})
userData.set("Suresh",{
    name:"Suresh",
    age:44,
    email:"suresh6@gmail.com",
    location:"India"
})
userData.set("Mukesh",{
    name:"Mukesh",
    age:34,
    email:"muskesh@gmail.com",
    location:"India"
})
userData.set("sukesh",{
    name:"sukesh",
    age:33,
    email:"sukesh6@gmail.com",
    location:"India"
})

function getUserInfoUsingName(name) {
    return userData.get(name)
}
console.log(getUserInfoUsingName("Akhand"));
// Question 4
const person1 = {name:"Akhand Pratap Mishra" , age:10}
const person2 = {name:"Rakesh" , age:60}
function introduce(){
console.log(`Hello , I Am ${this.name} and I am ${this.age} Years Old.`);
}
introduce.call(person1)
//Question 5
 const uniqueNumbers = new Set([545,5435,345,25,26,25,23,5,3,522,525,532,52,77,366,2555555555555555555,25,266,24])

 uniqueNumbers.forEach(number=>{
  console.log(`Square Of ${number} = ${number*number}`);
  
 }) 
// Question 6
function displayInfo(name,role) {
    console.log(`Name: ${name} \n ${role}`);
    
}
 
 displayInfo.call(null, "Akhand Pratap Mishra" , "Web Developer")
 displayInfo.apply(null, ["Rakesh" , "Android Developer"])
function greet() {
    console.log(`Hello ${this.name} , You Are A ${this.role}`);
}
const user = {
    name:"AKhand Pratap Mishra",
    role : "Web Developer"
}
const bindGreet = greet.bind(user)
bindGreet()
// Question 7
const calculator = {
    add: function (a,b) {
        return a+b
    },
    subtract: function (a,b) {
        return a-b
    },
    multiply: function (a,b) {
        return a*b
    },
    calculate: function (operation,a,b) {
        if (operation =="add") {
            return this.add(a,b)
         }else if (operation =="subtract") {
            return this.subtract(a,b)
         }else if (operation =="multiply") {
            return this.multiply(a,b)
         }
    }
}
// Add result
const addResult = calculator.calculate.call(calculator , "add" , 12,3)
const subtractResult = calculator.calculate.call(calculator , "subtract" , 12,3)
const multiplyResult = calculator.calculate.call(calculator , "multiply" , 12,3)

// printing Operations
console.log("Add",addResult);
console.log("Subtract",subtractResult);
console.log("Multiply",multiplyResult);

// Discount Claculator
const discountCalculator = {
    discountPercentage: 22,
    discountedAmount: function(amount){
       return amount - (amount*this.discountPercentage/100) 
    }
}
var price = 500
const calculateDiscount= discountCalculator.discountedAmount.bind(discountCalculator)
const discountedAmount = calculateDiscount(price)
console.log(`Summary: \n Price : ${price}\n Total Amount: ${discountedAmount}`);


