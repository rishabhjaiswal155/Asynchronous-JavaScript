//without parameter
function greet(){
    console.log('Hello Rishabh')
}

const timeoutId=setTimeout(greet,2000)
//clearTimeout(timeoutId)

//with parameter
function greet1(name){
    console.log(`Hello ${name}`)
}

const timeoutId1=setTimeout(greet1,2000,'Lucky')
//clearTimeout(timeoutId1)