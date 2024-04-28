
function closures(){
    for(var x=0;x<=5;x++){
        setTimeout(()=>{
            console.log(x)
        },x*1000)
    }
}




function closures2(){
    for(let x=0;x<=5;x++){
        setTimeout(()=>{
            console.log(x)
        },x*1000)
    }
}


function closures3(){

    for(var x=0;x<=5;x++){
        function y(i){
            setTimeout(()=>{
                console.log(i)
            },x*1000)
        }
        y(x)
    }
   
}


// closures()
// closures2()
closures3()

