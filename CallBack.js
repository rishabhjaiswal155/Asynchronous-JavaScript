//A Function which is passed as an argument to other function is called callback function

//A Function which have another Function as an argument and return function as value is called Higher order Function

//In setTimeOut example, setTimeOut is Higher order function and greet is Callback Function 

//Also setTimeout is example of Asynchronous Callback which holds execution for sometime or event to be occured or Data to be fetched 

//Synchronous CallBacks executes immediately

function greet(name){
    console.log(`Hello ${name}`)
}

function greetMe(greetFn){
    const name='Rishabh'
    greetFn(name)
}
greetMe(greet)

//Here greetFn is CallBack Function
//greetMe is Higher order Function