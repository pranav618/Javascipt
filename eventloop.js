
document.getElementById("app").innerHTML = `
<button>Button</button>
`;

function logger1(string) {
  console.log("logger1");

  setTimeout(()=>{
      console.log("**setTimeout***loggger1")
  })

  Promise.resolve().then(() => {
    console.log("promise logger 1");

    setTimeout(()=>{
        console.log("**prmoise***loggger1")
    },500)
  });
}

function logger2(string) {
  console.log("logger 2");

  setTimeout(()=>{
    console.log("***setTimeout**loggger2")
   })

  Promise.resolve().then(() => {
    console.log("promise logger 2");

    setTimeout(()=>{
        console.log("**prmoise***loggger2")
    },500)
  });
}

document.getElementsByTagName("button")[0].addEventListener("click", logger1);
document.getElementsByTagName("button")[0].addEventListener("click", logger2);

// document.getElementsByTagName("button")[0].click();
