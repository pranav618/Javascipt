const users =[
{firstName: "pranav", lastName: "nath", age: 26},
{ firstName: "donald", lastName: "trump", age: 75},
{ firstName: "elon", lastName: "musk", age: 50 },
{ firstName: "deepika", lastName: "padukone", age: 26}
]

// list of full names
//Q1. ["akshay saini", "donald trump" ...

let firstName= users.map((value,index,arr)=>{
    return value.firstName + " " + value.lastName;
})

// console.log(firstName);

//Q2. {26: 2, 75: 1, 50: 1}


// The difference between the two methods is that Object.hasOwnProperty() looks 
// for a key in an object alone while the in operator looks for the key in the object and its prototype chain.

let finalCount={};
let ageCount1 = users.filter((value, index, arr)=>{
    if(!( value.age in finalCount)){                  // finalCount.hasOwnProperty(value.age)                                     
        finalCount[value.age]= 1;
    }
    else{
        finalCount[value.age] +=1;
    }
})

let ageCount2= users.reduce(function(accumulatedCount,currValue, index, array){
    if(!(accumulatedCount.hasOwnProperty(currValue.age))){                                              
        accumulatedCount[currValue.age]= 1;
    }
    else{
        accumulatedCount[currValue.age] +=1;
    }
    return accumulatedCount;
},{})

// console.log(ageCount1);




//Q3. first name of all people with age less than 30
// chaining filter and map example

let output1= users.filter((value, index, array)=>  value.age<30).map((value, index, array)=> value.firstName);

let output2= users.reduce(function(acc, curr, index, array){
    if(curr.age<30){
        acc.push(curr.firstName);                                     
    }
    return acc;
},[])

// console.log(output2)


// Q4 find unique element in an array

let a=[2,4,6,7,8,3,2,4,66,7,8]

let unique = a.filter((value, index, arr)=>{
    return (arr.indexOf(value) === index);
})


console.log(unique);




