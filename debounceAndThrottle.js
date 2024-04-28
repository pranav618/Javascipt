
let count=0;

let apiCall= ()=>console.log("**********", count++);

let debounce = function(fn, timer){

    let delay;
    return function(){
        let context=this;
        let args= arguments;
        clearTimeout(delay);
        delay= setTimeout(()=>{
            fn.apply(context,args);
        },timer)
    } 
}


let debounceCall= debounce(apiCall, 300)



let throttle= function(fn, timer){
    let flag=true;
    return function(){
        
        if(flag){
            fn();
            flag=false;
            setTimeout(()=>{
                flag=true;
        },timer)
    }

    }
}

let throttleCall= throttle(apiCall, 300)
