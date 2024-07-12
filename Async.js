//Asunc Function always returns a Promise

async function greet(){
    return 'Hello'
}
const result=greet()
console.log(result)

//In console o/p: Promise {'Hello'}

//OR 

async function greet1(){
    return Promise.resolve('Hello')
}
greet1().then((value)=>console.log(value))

//In console o/p: Hello