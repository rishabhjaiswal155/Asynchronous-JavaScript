//await keyword is always used in combination with async keyword
//It always comes infront of promise return by async function

async function greet(){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Hello"),2000)
    })

    let result=await promise
    console.log(result)
}
 greet()

