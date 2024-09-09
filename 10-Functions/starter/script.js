'use strict';

const bookings=[];
const createBooking = function(flightNum
,numPassengers=1,price=199)
{
    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking)
}

createBooking('LH123');
createBooking('LH123',1,266);

const empDetail ={
    empId : 1234,
    empName : "Gautam"
}
const department = "Digital";

const getEmployee=function(dept,emp)
{
    const department = dept+" Inst";
    emp.empName='Mr.'+emp.empName;

    console.log(department,emp.empName);
}

getEmployee(department,empDetail);

console.log(department,empDetail.empName);

console.log(getEmployee);

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
const numbersCombined1 = [1, ...numbersTwo,'s'];

/*Higher order functions
Functions that accepts a function
*/

const oneWord = function(strVal)
{
    return strVal.replace(/ /g,'').toLowerCase();
}

const upperFirst =function(strVal)
{
   const [first, ...others]=strVal.split( ' ')  ;
   return [first.toUpperCase(),...others].join(' ');
}

const transformer=function(str,fn)
{
console.log(`Transformed String : ${fn(str)}`);
}

transformer('JavaScript is the worst',upperFirst);
transformer('JavaScript is the worst',oneWord);

const getTypeOfs = function(elm){
        console.log(typeof elm);
}

const numArr = ['abc','xyz',12];
numArr.forEach(getTypeOfs);

/*
Function returning a function
*/

const greet = function(greeting)
{
    return function(name)
    {
        console.log(`${greeting} , ${name}`);
    }
}

//

(function()
{
    console.log('Hello');
})();

(() => console.log('Hello'))();


//closure

let f;

const g = function()
{
    const a=23;
    f=function()
    {
        console.log(a*2);
    }
}

const h = function()
{
    const a=777;
    f=function()
    {
        console.log(a*2);
    }
}

g();
f();
h();
f();

console.dir(f);











