const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "One");
});

const promise2 = 25;

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "Three");
});

const promise4 = Promise.resolve("Rishabh");

//returns if all the promises are resolved and rejects if one of them is rejected
Promise.all([promise1,promise2,promise3,promise4]).then((values)=>{
    console.log(values)
})

//returns all the promises whether it gets rejected also with status rejected
Promise.allSettled([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});

//return the promises which is faster to resolve and rejects remaining
Promise.race([promise1,promise2,promise3,promise4]).then((values) =>
  console.log(values)
);
