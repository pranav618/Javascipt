

//custom bind, pollyfill


let name={
    fName:"Pranav",
    lName:"Nath"
}

let printName=function(args){
    console.log(this.fName+" "+this.lName+" from "+args);
}

// let printName1= printName.bind(name);

// console.log("printName", printName1);
// printName1();

//create pollyfill



Function.prototype.mybind= function(...args){
    let func= this;
    let argument= args.slice(1);

    return function(...args2){
        func.apply(args[0],[...argument, ...args2]);
        
    }

}


let printName2 = printName.mybind(name);
printName2("muz")                              // should return same as printName1();



