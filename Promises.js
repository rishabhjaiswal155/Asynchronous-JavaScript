//onFullfillment and onRejection are callback functions
const onFullfillment = (result) => {
  console.log(result);
  console.log("seting Up the Dinning Table");
};

const onRejection = (error) => {
  console.log(error);
  console.log("Preparing to make pasta");
};

//This is promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Bringing Tacos");
//   }, 2000);
// });

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Not Bringing Tacos");
  }, 2000);
});

// promise.then(onFullfillment);
// promise.catch(onRejection);

//OR
//Not encouraged

//promise.then(onFullfillment,onRejection)

//OR
//promise chaining(encouraged)

promise.then(onFullfillment).catch(onRejection)