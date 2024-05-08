const items= document.getElementById("items");
const container = document.getElementById("container");

const totalItems= 68;

let getTotalPageNumber = (totalItems)=>{
    let itemsPerPage = 10;
    return Math.ceil(totalItems/itemsPerPage);
}

let renderPageNumber = (totalPages) =>{
    for(let i =1;i<=totalPages ; i++){
        let item = document.createElement("button");
        item.id = "page"+i;
        item.className = "page"; 
        item.innerHTML = i;
        item.onclick=getPageContents
        items.appendChild(item);
    }
}


let getPageContents=async(event)=>{
    const pageNumber= event.currentTarget.firstChild.data
    if(pageNumber===localStorage.getItem("pageNumber")) return null

    // container.innerHTML="LOADING.....";
    container.className="loader"
    container.innerHTML=""
    
    const url = `https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/${pageNumber}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9e4b6302b4msh3651ab1c405be36p1cff45jsn41dd32a20fdd',
            'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json()  
        console.log("data",pageNumber, data)
        localStorage.setItem("pageNumber",pageNumber)  
        sessionStorage.setItem("pageNumber",pageNumber)  
        renderContainer(data);
    } catch (error) {
        alert("Error",error)
    }
}

let renderContainer =(data)=>{
    container.innerHTML=""
    container.className=""
    data.restaurants.map((item,index,arr)=>{
        const containerItem= document.createElement("p");
        containerItem.innerHTML = item.restaurantName;
        container.className = "container-item"
        container.appendChild(containerItem);
    })

}

renderPageNumber(getTotalPageNumber(totalItems))