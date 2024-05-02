const nestedArray = [2, 2, 5, [5, [5, [6]], 7]];

//[2,2,5,5,5,6,7]


let flatArray= function(nestedArray,result){
    for(let i in nestedArray){
        if(Array.isArray(nestedArray[i])){
            flatArray(nestedArray[i],result);
        }
        else{
            result.push(nestedArray[i]);
        }
    }
    return result;
}


console.log(flatArray(nestedArray,[]));