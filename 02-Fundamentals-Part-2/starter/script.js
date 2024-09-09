'use strict';

console.log("Fundamental 2");

let hasDriversLicence=false ;
const passTest = true;

if(passTest)
{
    //this will not be identified if 
    //it fails withour strict mode
    //hasDriverLicence=true;
    if(hasDriversLicence)
    {
        console.log("I can drive")
    }
}

//functions

function logger()
{
    console.log("My name is Gautam")
}

logger();
let a = logger;
console.log(a())


function foodProcessor(apples,oranges)
{
    console.log(apples,oranges);
    const juice = `juice with ${apples} and ${oranges}`
    return juice;
}

const juice = foodProcessor(5,0)
console.log(juice)

//Function declaration
function callAge1(birthYear) {
    return 2037-birthYear;
    
}

const agIs = callAge1(2020)
console.log(agIs)

//function expression

const calcAge2 = function (birthYear) {
    return 2037-birthYear;
}

const age2Val =calcAge2(1990);
console.log(age2Val)

//Arrow function

const age3Val = birthYear => 2037-birthYear;
const ageVale3 = age3Val(1999);
console.log(ageVale3);

const yearOfRetiremtnt = birthYear =>{
    const age = 2037-birthYear;
    const ageTore = age - 5;
    return ageTore;
}

const agetToret =yearOfRetiremtnt(1992);
console.log(agetToret)

const ageDiff= (myName,myAge)=>
{
    if(myName=='Gautam')
    {
        return `Name is ${myName}
        and ${myAge} year old`;
    }else
    return "Not in DB";
}

const myName = 'Gauam';
const valReturn = ageDiff(myName,20);
console.log(valReturn)

/*
Arrays
*/

const frnzArr = ['first','second','third'];
console.log(frnzArr)

const yr = new Array(1191,1992,1993,'one');
console.log(yr)

for (let index = 0; index < yr.length; index++) {
    const element = yr[index];
    console.log(element)
}

yr[2]='Gautam';

console.log(yr)

yr.push('hello')
console.log(yr)

// yr = ['new'];
// console.log(yr)

const mydetails= [yr,'Gautam',2037-2035]
console.log(mydetails)
//strict check
console.log(mydetails.includes('Gautam'))
console.log(mydetails.includes(1191))

//OBJECTS

const jonas = {
    "fName":"Gautam",
    lName:'Rawat'
}
console.log(jonas);
console.log(jonas.fName);
console.log(jonas['fName']);
console.log(typeof jonas.fName);
console.log(typeof jonas);


const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
  ];
  
  const jonasNew = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };
  

  console.log(`${jonasNew.firstName} has 
  ${jonasNew.friends.length} and his
  best friend is ${jonasNew.friends[1]}`)

  //Objects methods

  const GautamArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
  ];
  
  const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 199,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    calAge : function(birthYr)
    {
        return 2034-birthYr;
    },
    calAgeAgain : function()
    {
        return 2034-this.age;
    }
};
  
console.log(jonasObject.calAge(2022));
console.log(jonasObject['calAge'](2022))
console.log(jonasObject.calAgeAgain())


/* "Jonas is a 46-year old teacher,
 and he has a drivers licence"
*/

const jonasObjectChallenge = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 199,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    calAge : function(birthYr)
    {
        return 2034-birthYr;
    },
    calAgeAgain : function()
    {
        return 100-this.age;
    },
    getSummary: function()
    {
        if(this.age >this.calAgeAgain())
        {
            return `${this.firstName} is a ${this.calAgeAgain()}-yeae olsd teacher
            and he has a drivers licence`

    
        }elseif(this.age<18)
        {
            return `${this.firstName} is a ${this.age}-yeae olsd teacher
            and he do not has a drivers licence`

            
        }
        }
};


console.log(jonasObjectChallenge.getSummary())


/*
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/

const markObj = {fullName:"Mark",
mass:"78",
height:"1.69",
calcBMI:function()
{
    this.bmi=this.mass/(this.height*this.height);
    return this.bmi;
}}

const johnObj = {fullName:"John",
mass:"92",
height:"1.95",
calcBMI:function()
{
    this.bmi=this.mass/(this.height*this.height);
    return this.bmi;
}}

console.log(`JOHN's BMI = ${johnObj.calcBMI()} :: Marks 's BMI = ${markObj.calcBMI()}`)

const compareBMI = (markObj,johnObj) =>{

    const markBMI = markObj.calcBMI();
    const johnBMI = johnObj.calcBMI();
    if(markBMI>johnBMI)
    {
        return `${markObj.fullName}'s BMI (${markBMI}) is higher than ${johnObj.fullName} (${johnBMI})!`;
    }else
    return `${johnObj.fullName}'s BMI (${johnBMI}) is higher than ${markObj.fullName} (${markBMI})!`;
    
}
const returnedBMI_valueAndObject = compareBMI(markObj,johnObj);
console.log(returnedBMI_valueAndObject)


//LOOOOOOPS



const myArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
  ];
const newArr = [];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    
    console.log(element, typeof element)
    if(typeof element === 'string') continue;
    newArr.push(element)
}

console.log(newArr);

//while loop

const whileLoopCheck = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
  ];
  console.log("======");
let rep =0;
  while (rep<whileLoopCheck.length) {
    console.log(whileLoopCheck[rep]);
    rep++;
  }

  /*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.



👋 OPTIONAL: You can watch my solution in video format in the next lecture
  */