// sum(1)(2)(3)(4)..( n)()


 function sum(a){
    return function(b){
        if(b){
        return sum(a+b);}
        else{
        console.log("8888888",a);
        return a;
    }
    }
}

function add(a) {
    return function(b){
      if(b){
        return add(a+b)
      }
      return a
    }
  }


console.log("********",add(1)(2)(3)(4));
add(1)(2)(3)(4);
