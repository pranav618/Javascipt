
let parentDiv= document.getElementById("parent");
let moreDiv= document.getElementById("more");


let lastElementObserve= new IntersectionObserver((entries, obeserve)=>{
    entries.forEach(entry=>{
        console.log("**",entries)
        if(entry.isIntersecting){                           // if the element is inside the viewPort now.
            console.log("**00",entry)
            // lastElementObserve.unobserve(entry.target)
            // setTimeout(()=>{
                renderMoreImage(8);
            // },500)
        }
    });
},{
    threshold:0.5,
    // delay:50
    // rootMargin:"-150px"
})

let renderMoreImage=(count)=>{
    console.log("renderMoreImage",count)
    for(let i=0;i<count;i++){
        let childDiv= document.createElement("img");
        childDiv.src= `https://picsum.photos/200/200?random=${i}`
        childDiv.loading="lazy";
        childDiv.alt=count+"renderMoreImage"
        parentDiv.appendChild(childDiv);
    }

    // let lastChildDiv = parentDiv.lastElementChild
    // lastElementObserve.observe(lastChildDiv)
}


let renderInitialImage=(count)=>{
    console.log("renderInitialImage",count)
    for(let i=0;i<count;i++){
        let childDiv= document.createElement("img");
        childDiv.src= `https://picsum.photos/200/200?random=${i}`
        // childDiv.loading="lazy";
        childDiv.alt=count+"renderInitialImage"
        parentDiv.appendChild(childDiv);
    }

    // let lastChildDiv = parentDiv.lastElementChild

}

lastElementObserve.observe(moreDiv)
renderInitialImage(42);


