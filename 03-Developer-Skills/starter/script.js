// Remember, we're gonna use strict mode in all scripts now!
"use strict";

console.log("my");
const array = ["hello", 123];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

let highestTemp = temperatures[0];
let lowestTemp;

for (let i = 0; i < temperatures.length; i++) {
//   console.log(temperatures[i]);
if(temperatures[i]=='error') continue;
  for (let j = 1; j < temperatures.length; j++) {
    temperatures[j]=='error'
    if (temperatures[i] > temperatures[j]) {
      highestTemp = temperatures[i];
      lowestTemp = temperatures[j];
    } else highestTemp = temperatures[j];
    lowestTemp = temperatures[i];
  }
}

console.log(`highest = ${highestTemp}
             lowest = ${lowestTemp}`);


const measureKelvin = function()
{
    const measurement = {
        type:'temp',
        unit:'celsius',
        //value: prompt('Degree celsius')
    }

    console.table(measurement)
    const tempVal = Number(measurement.value);

    const kelvin = tempVal+273;
    return kelvin
}

const val = measureKelvin();
console.log(val);