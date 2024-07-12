function resolveHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  });
}

function resolveWorld() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("World");
    }, 1000);
  });
}


// async function sequential(){
//     const hello=await resolveHello()
//     console.log(hello)
//     const world=await resolveWorld()
//     console.log(world)
// }
// sequential()

// async function concurrent(){
//     const hello= resolveHello()
//     const world= resolveWorld()
// console.log(await hello)
// console.log(await world)
// }
// concurrent()

async function parallel(){
    Promise.all([
        (async ()=>console.log(await resolveHello()))(),
        (async ()=>console.log(await resolveWorld()))()
    ])
}

parallel()