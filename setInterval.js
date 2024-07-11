//without parameter

function greet(){
    console.log('Hello Rishabh')
}

const intervalId=setInterval(greet,2000)
//clearInterval(intervalId)

//with Parameter

function greet1(name){
    console.log(`Hello ${name}`)
}

const intervalId1=setInterval(greet1,2000,'Lucky')
//clearInterval(intervalId1)