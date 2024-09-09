'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2, 4));
let shllowArr = [...arr];
console.log(shllowArr);

console.log(movements);

for (const movement of movements) {
  if (movement > 100) {
    console.log(movement);
  }
}

const getValueGreaterThan100 = function (movement) {
  if (movement > 100) {
    console.log('New =>  ', movement);
  }
};
movements.forEach(getValueGreaterThan100);

console.log(movements);

movements.map(function (ite, k, v) {
  console.log(ite);
  console.log(k);
  console.log(v);
});

movements.map(function (ite, k, v) {
  console.log(ite);
  console.log(k);
  console.log(v);
});

const bal = movements.reduce(function (acc, ite, current, v) {
  acc = current + ite;
  return acc;
});
console.log(bal);
/*
Let's go back to Julia and Kate's study about dogs.
 This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', 
which accepts an arrays of dog's ages ('ages'),
 and does the following things in order:

1. Calculate the dog age in human years using the 
following formula: if the dog is <= 2 years old, 
humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old
 (which is the same as keeping dogs that are at least 18 
  years old)
3. Calculate the average human age of all adult dogs 
(you should already know from other challenges how we 
  calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/


const calcAverageHumanAge = function(ages)
{
    console.log(ages);
    const humanages = ages.map((age)=>age<=2?2*age:16+(age*4))
    console.log(humanages);
    const lessThan18 = humanages.filter(age=>age>18)
    console.log(lessThan18);
    const sum = lessThan18.reduce(function(item,k,v,j)
  {
    item = item + k;
    return item;
  })
    const avg = sum/lessThan18.length;
    console.log(avg);
  }

calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

const calcAverageHumanAgeChain = function(ages)
{
  let lengthPostFilter=0;
    const sum=  ages.map(age=>age<=2?2*age:16+(age*4))
    .filter(age=>age>18)
    .reduce((accumulator,current,i,v)=>{
      console.log(i);
      lengthPostFilter=v.length;
      let val = accumulator+current;
      return val
    },0);

    return sum/lengthPostFilter;
    
  }

 
console.log( calcAverageHumanAgeChain([16, 6, 10, 5, 6, 1, 4]));


console.log(movements);
const firstReturnForTrue = movements.find(mov=>mov<0)
console.log(firstReturnForTrue);


const equalityCheck=movements.includes(-120);
console.log(equalityCheck);

const anyValueConditionIsTrue =movements.some(mov=>mov>300)
console.log(anyValueConditionIsTrue);



const arrToBeFlattend = [[1,2,3],[4,5],4,7,8];
console.log(arrToBeFlattend.flat());

const arrToBeFlattendDeep = [[1,2,3,[4,5]],[4,5],4,7,8];
console.log(arrToBeFlattendDeep.flat());
console.log(arrToBeFlattendDeep.flat(1));
console.log(arrToBeFlattendDeep.flat(2));

console.log(arrToBeFlattendDeep.flatMap(val=>{
  if(val>3)
  return val;
},2
));



//Strings 

const owners = ['Jonas','Martha','Adam','Jack']
console.log(owners.sort());

console.log(movements);
console.log(movements.sort((a, b) => {
  if(a > b) return 1;
 if (a<b) return -1;

}))

console.log(movements.sort((a, b) => b-a))


console.log([200, 450, -400, 30]);
//create 7 empty arrays weird behaviour
const arr12 = new Array(7);
console.log(arr12);

arr12.fill(2)
console.log(arr12);






const account5 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

// const val =alL.map(item => {
//   if(item.checkVisibility())
//   {
//     return [item,item.name]
//   }
// })

const arr123 = Array.from([1,2,3,4,5,234])
console.log(arr123);


let val = arr123.forEach(element => {
  return element+100;
});
console.log(val);


