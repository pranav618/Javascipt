var user = {
    name: "Vishal",
    address: {
      primary: {
        house: "109",
        street: {             
          main: "21",
          cross: "32"
        }
      }
    }
  };
  
  //output
//   {
//     user_name: "Vishal",
//     user_address_primary_house: "109",
//     user_address_primary_street_main: "21",
//     user_address_primary_street_cross: "32",
//   }

//this problem can be used for gettting breadcrums in website
let res={};

let flatten2 = function(user,prevObject){
    for(let key in user){
        if(typeof(user[key])==='object'){
            flatten2(user[key],prevObject+"_"+key+"_");
        }
        else{
            res[prevObject+"_"+ key]=user[key];
        }
    }
    console.log(res);

}

console.log(flatten2(user,"user"));