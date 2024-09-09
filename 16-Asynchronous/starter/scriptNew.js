const getID = function (pageID) {
  fetch(`https://reqres.in/api/users?page=${pageID}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('ID is not present');
      }
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      return data.data[1].id;
    })
    .then(function (idReceived) {
      console.log('ID From id call ', idReceived);
      const responseC = fetch(`https://reqres.in/api/users/${idReceived}`);
      console.log(responseC);
      return responseC;
    })
    .then(function (responseDetails) {
      if (!responseDetails.ok) {
        throw new Error('ID is not present');
      }
      const responseBody = responseDetails.json();
      // console.log("Response Body =",responseBody);
      return responseBody;
    })
    .then(responsePromise => {
      console.log(responsePromise.data);
    })
    .catch(err => {
      console.error('Error Object= ', err);
      console.error('Error msg=', err.message);
    });
};

getID(2);

const getAllUsers = async function () {
  try {
    const res = await fetch(`https://reqres.in/api/users`);
    console.log('1 async call response ', res);
    // const val = res.json()
    //    console.log('to json in async ',val);
    const bodyOfres = await res.json();
    console.log('2 Body of res', bodyOfres);
  } catch (err) {
    console.log(err);
  }
};

getAllUsers();

console.log('normal');

// //not a call back

// const callBack = function()
// {
//     console.log('hello from callback');
// }

// const iAmWithCallBack = function(callBack)
// {
//         console.log('I am from main');
//         callBack()
// }

// iAmWithCallBack()

(async function () {
  try {
    const res = await fetch(`https://reqres.in/api/users?page=3`);
    console.log('1 iife async call response ', res);
    // const val = res.json()
    //    console.log('to json in async ',val);
    const bodyOfres = await res.json();
    console.log('2 iife Body of res', bodyOfres);
  } catch (err) {
    console.log('Error');
  }
})();

function sleep(milliseconds) {
   return new Promise(()=> setTimeout(function () {
        console.log('I am in promise of setout ');
    }, milliseconds)
    ).finally(()=>'Finally Done');
}

// Example usage of sleep within an async function
async function example() {
  console.log('Start');
  await sleep(2000); // Waits for 2000 milliseconds (2 seconds)
  console.log('End');
}

example();

function sleep1(milliseconds) {
    return new Promise((resolve,reject)=>{
        if(milliseconds<5000)
        {
            resolve(`${Date.now()}`);
        }else
        {
            reject(new Error('Value Greater'));
        }

    })
 }
 
//  // Example usage of sleep within an async function
//  async function example1() {
//    console.log('Start');
//    await sleep1(2000); // Waits for 2000 milliseconds (2 seconds)
//    console.log('End');
//  }
async function example1() {
    console.log('Start',Date.now());
    try {
        const result = await sleep1(2000); // Change the value to test both resolve and reject
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    console.log('End',Date.now());
}

 console.log(`Norm = ${Date.now()}`);
 
 example1();
