'use strict';


// const happy = function(name,age)
// {
//     name=name;
//     age=age;
// }

// happy('gau',21);
// console.log(typeof happy);

/////////////////
class HappyCl {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const gautam = new HappyCl('gau',1991);
console.log(HappyCl.hasOwnProperty('name'));
const piya = new HappyCl('Piya',1992);
const preksha = new HappyCl('Preksha',1993);
console.log(gautam instanceof HappyCl);

console.log(HappyCl.prototype);

HappyCl.prototype.calAge = function()
{
    console.log(2037-this.age);
}

gautam.calAge()
piya.calAge()
preksha.calAge()

// console.log(gautam.has));

