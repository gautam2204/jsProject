console.log(10+2+19);

let age = 10;
age = 20;

console.log(age)

const birthYear = 10;
console.log(birthYear);

// birthYear = 20;
const gAge=10;
console.log(gAge-3);

// operateor precedence

let massMark=78,heightMark=1.69, massJohn=95,heightJohn=1.88,BMIMark,BMIJohn;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn=massJohn/(heightJohn*heightJohn);

console.log("Mark BMI ",BMIMark);
console.log("John BMI ",BMIJohn);

let markHigherBMI=BMIMark>BMIJohn;
console.log(`On Calculating mark bmi came ${markHigherBMI}`)

console.log(`multiple lines
string
literals 
example 😂😂😂`);

if(markHigherBMI)
{
console.log(`Mark's BMI is higher ${BMIMark} than John's!`);
 }
 else
 { 
    console.log("John's BMI is higher than Mark's!");
}

//type casting
const yr = '1191';
console.log(22+Number(yr));

//type cohersion
console.log(2+3+'5'-2)

//Falsy Values
/*
Five falsy values are 0 , '' , undefined , null , NaN
*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean({}));
console.log(Boolean('a'));
console.log(Boolean(''));

let hasMoney = 0;
if(hasMoney)
{
    console.log("Has money");
}else
{
    console.log("Get a job");
}
/*
    Good use case for undefined checks
*/
let makeMeUndefined;
if(makeMeUndefined)
{
    console.log("I will not be called");
}else
{
    console.log("I will be called as 'UNDEFINED' is a falsy value just make sure make not zero");
}


//Equality Operator === strict == loose

// let getNum = prompt("get a number?");
getNum=22;
if(getNum===23)
{
console.log("23 is great number (strict check)")
}
if(getNum==23)
{
console.log("23 is great number (loose check)")
}
if(getNum!==23)
{
    console.log("loose check block ")
}

/*
switch statement
*/

const day = 's';

switch (day) {
    case 'Monday':
        console.log("Day is Monday")
        break;

    case 'Tuesday':
        console.log("Day is Tuesday");
        break;
    default:
        console.log('Not a day')
        break;
}
