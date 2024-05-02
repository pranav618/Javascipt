let obj1 = {
    a: 1,
    b: {
      x: 2
    },
    c: 3
}
  
  
let obj2 = {
    a: 2,
    b: {
      x: 3
    },
    c: 3,
    d: 4
}
  

// {
//    a: [1, 2],
//    "b.x": [2, 3],
//     d: [null, 4]
//  }


let diffObj = function(obj1,obj2, res){

    for(let i in obj2){
        if(obj1[i] && obj2[i]===obj1[i]){
            continue;
        }
        else if(obj1[i] && obj2[i]===obj1[i]){

        }
    }


}

