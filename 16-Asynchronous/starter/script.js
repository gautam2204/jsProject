'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const flagWhat = function(country)
// {
//     const request=new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v3.1/name/${country}?fullText=true`);
// request.send();
// request.addEventListener('load',function()
// {
//     const data = JSON.parse(this.responseText)[0];
//     console.log(typeof data);
//     console.log(data);
//     const html = `
// <article class="country">
// <img class="country__img" src="${data.flags.svg}" />
// <div class="country__data">
//   <h3 class="country__name">${data.name.common}</h3>
//   <h4 class="country__region">${data.subregion}</h4>
//   <p class="country__row"><span>👫</span>${data.population}</p>
//  </div>
// </article>
// `
// console.log(html);
// countriesContainer.insertAdjacentHTML('beforeend',html)
// })
// console.log("===");
// }
// flagWhat('india');
// flagWhat('pakistan');
// flagWhat('australia');
// flagWhat('maldives');
//=========

//const request=new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v3.1/name/${country}?fullText=true`);
// request.send();

// New call fetch

// const request = fetch('https://restcountries.com/v3.1/name/india')
// console.log(request);

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.capital[0]}</p>
      <p class="country__row"><span>💰</span>${data.subregion}</p>        
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getneighbour = function (country) {
  return fetch(`https://restcountries.com/v3.1/alpha/${country}`)
    .then(response => response.json())
    .then(data => data.common.name);
};

const getJson = function (country) {
  return fetch(`https://restcountries.com/v3.1/name/${country}`).then(
    response => response.json()
  );
};

const getCountryData = function (country) {
  getJson(country)
    .then(function (response) {
      console.log(response[0]);
      renderCountry(response[0], response[0].name.common);
      return response[0];
    })
    .then(data => {
      const countryCode = data.cca2;
      console.log(countryCode);
      renderCountry(data, countryCode);
    })
    .catch(err => {
      const errDetail = `Error calling api ${err}`;
      console.error(errDetail);
      return errDetail;
    })
    .finally(finalCall => console.log('Iteration Completed'));
};

// getCountryData('asdasd');
// getCountryData('argentina');
// getCountryData('germany');
// getCountryData('sweden');
getCountryData('republic of india');

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates.
 For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location,
 like a city and country name.
 Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. 
Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location.
 Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403.
 This is an error with the request. Remember, fetch() does NOT reject the promise in this case. 
 So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. 
So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors,
 just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

const ajaxCallToUrl = function (lat, lng) {
  let responseText = null;
  const request = new XMLHttpRequest();
  request.open('GET', `https://geocode.xyz/${lat},${lng}?geoit=json`);
  request.send();
  request.addEventListener('load', function () {
    const val = JSON.parse(this.responseText);
    console.log(val);
  });
};

const respnseOfLatLng = ajaxCallToUrl(52.508, 13.381);
console.log('Val = ', respnseOfLatLng);

const whereAmI = function (lat, lng) {};

//create promise

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery start');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve(`You won`);
    } else {
      reject(new Error(`You LOST `));
    }
  }, 2000);
});

lotteryPromise
  .then(res => {
    console.log(res);
  })
  .catch(err => console.log(err));

// const getCountryData = function (country) {

//     getJson(country).then(function (response) {
//       console.log(response[0]);
//       renderCountry(response[0], response[0].name.common);
//       return response[0];
//     })
//     .then(data=>{
//         const countryCode = data.cca2;
//         console.log(countryCode);
//         renderCountry(data, countryCode);
//     })
//     .catch(err=>{
//         const errDetail = `Error calling api ${err}`
//         console.error(errDetail);
//         return errDetail;
//     }
// )
// .finally(finalCall => console.log("Iteration Completed"))};

// getCountryData('republic of india');

const getCountryDataASYNC = async function (country) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}?fullText=true`
    );
    console.log(`Response => typeOFF =  ${typeof response}
    ${response}`);
    const resp = await response.json();
    console.log('Response Body ==>', resp[0]);
    // const resBody = await resp.body;
    // console.log(`ResBody ===>  ${resBody}`);

    renderCountry(resp[0], country);
    return resp[0];
  } catch (error) {
    console.log(`Erro === `, error);
  }
};

console.log('==============FIRST==============');
const abc = getCountryDataASYNC('argentina');
let xyz = '';
console.log(
  `ABC is returned Vlaue ${abc.then(e => {
    console.log(e);
    xyz = e;
  })}`
);
getCountryDataASYNC('brazil');
getCountryDataASYNC('spain');
getCountryDataASYNC('italy');
console.log('================LAST=============');

const getResult = async function () {
  const pageDetialsResponse = await fetch(`https://reqres.in/api/users?page=2`)
    .then(res => res.json())
    .then(responseVal => responseVal);
  console.log('Page Details = ', pageDetialsResponse);
  console.log('Retrieved Details = ', pageDetialsResponse.data[1].id);
  return pageDetialsResponse.data[1].id;
};

const getSingleUserDetails = async function () {
  const res = await getResult();
    console.log('Result is ',res);
    return await fetch(`https://reqres.in/api/users/${res}`);
 
};



// const someVal = getSingleUserDetails().then(res=>{
//      const value = res.json();
// console.log(`Value is ${value.data}`);
//     return value.data;
// })

