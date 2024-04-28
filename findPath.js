var obj = {
    a: {
        b: {
            c: 12
        }
    }
};

Object.prototype.findPath= function(params){
    let arr= params.split(".");
    let curr=obj;
    for(let i=0;i<arr.length;i++){
        if(curr[arr[i]]===undefined){
            return undefined
        }
        else{
            curr=curr[arr[i]];
        }
    }
    return curr; 
    
}

// console.log(findPath('a.b.c')); // 12



console.log(obj.findPath('a.b.c')); // 12
console.log(obj.findPath('a.b')); // {c: 12}
console.log(obj.findPath('a.b.d')); // undefined
console.log(obj.findPath('a.c')); // undefined
console.log(obj.findPath('a.b.c.d')); // undefined
console.log(obj.findPath('a.b.c.d.e')); // undefined
