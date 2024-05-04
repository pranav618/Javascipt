const concatArray = (arr1, arr2) =>  {
    const c =arr1.concat(arr2);

console.log(arr1.concat(arr2),"called");
}

const memo =function(...args){
    let concArr=args[0];
    let context= this;
    return function(...args2){
        // concArr.call(context,args2[0],args2[1]);                         // this also works
        concArr.apply(context,[...args2]);

    }
}


const memoizedConcat = memo(concatArray);
memoizedConcat([1,2],[3,4]) //[1,2,3,4] called
memoizedConcat([1,5],[6,4]) // [1,5,6,4] called
