const p1= new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("Promise 1 resolved")
    },10000)
})


const p2= new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("Promise 2 resolved")
    },30000)
})


const p3= new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("Promise 3 resolved")
    },40000)
})


const p4= new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("Promise 4 resolved")
    },20000)
})

//traditional promise method 

function handlePromise1(){
    console.log("Hello world 1");
    p1.then(res=>console.log(res));
}

// handlePromise1();

//using async and await
//await can only be used inside asunc function

async function handlePromise2(){
    console.log("Hello world 2");

    const a1= await p1;
    console.log(a1);

    const a4= await p4;
    console.log(a4);

    const a3= await p3;
    console.log(a3);

    const a2= await p2;
    console.log(a2);
}

handlePromise2();

// Hello world 2                            instantly consoled
// Promise 1 resolved                       consoled after 10 sec.
// Promise 4 resolved                       consoled after 20 sec.
// Promise 3 resolved                       consoled after 40 sec.
// Promise 2 resolved                       consoled after 40 sec.