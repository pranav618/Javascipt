
let apiCall = async ()=>{
    let input= document.getElementById("auto-complete");
    let apiResult = await (autoCompleteApi());
    autoCompleteLogic(apiResult,input.value)

    // console.log(res);

}


//in case the previous api call is giving the response after the current api call response, our data will show the previous result, in that case
// we use Abort Controller to kill the previous request(inflight request)

const response = ['Abiu', 'Açaí', 'Acerola', 'Akebi', 'Ackee', 'African Cherry Orange', 'American Mayapple', 'Apple', 'Apricot', 'Araza', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Black sapote', 'Blueberry', 'Boysenberry', 'Breadfruit', 'Buddhas hand (fingered citron)', 'Cactus pear', 'Canistel', 'Cashew', 'Cempedak', 'Cherimoya (Custard Apple)', 'Cherry', 'Chico fruit', 'Cloudberry', 'Coco De Mer', 'Coconut', 'Crab apple', 'Cranberry', 'Currant', 'Damson', 'Date', 'Dragonfruit (or Pitaya)', 'Durian', 'Egg Fruit', 'Elderberry', 'Feijoa', 'Fig', 'Finger Lime (or Caviar Lime)', 'Goji berry', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Grewia asiatica (phalsa or falsa)', 'Guava', 'Hala Fruit', 'Honeyberry', 'Huckleberry', 'Jabuticaba (Plinia)', 'Jackfruit', 'Jambul', 'Japanese plum', 'Jostaberry', 'Jujube', 'Juniper berry', 'Kaffir Lime', 'Kiwano (horned melon)', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loganberry', 'Longan', 'Loquat', 'Lulo', 'Lychee', 'Magellan Barberry', 'Mamey Apple', 'Mamey Sapote', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Galia melon', 'Honeydew', 'Mouse melon', 'Musk melon', 'Watermelon', 'Miracle fruit', 'Momordica fruit', 'Monstera deliciosa', 'Mulberry', 'Nance', 'Nectarine', 'Orange', 'Blood orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Pawpaw', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Prune (dried plum)', 'Pineapple', 'Pineberry', 'Plumcot (or Pluot)', 'Pomegranate', 'Pomelo', 'Purple mangosteen', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan (or Mamin Chino)', 'Redcurrant', 'Rose apple', 'Salal berry', 'Salak', 'Sapodilla', 'Sapote', 'Satsuma', 'Shine Muscat or Vitis Vinifera', 'Sloe or Hawthorn Berry', 'Soursop', 'Star apple', 'Star fruit', 'Strawberry', 'Surinam cherry', 'Tamarillo', 'Tamarind', 'Tangelo', 'Tayberry', 'Ugli fruit', 'White currant', 'White sapote', 'Ximenia', 'Yuzu'];
// const response =["Pranav", "Nath"]

let autoCompleteApi=()=>{
    const promise= new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve(response);

        },1000)
    })
    return promise;
}

let autoCompleteLogic=(res, input)=>{
    let suggestions= document.getElementById("suggestions");
    if(input === ""){
        suggestions.innerHTML="";
        return;
    }

    suggestions.innerHTML= "";
    const filteredData = res.filter((value, index, arr)=>{
            return value.toLowerCase().startsWith(input.toLowerCase())
        })

    filteredData.forEach(element => {
        let item = document.createElement("div");
        item.innerHTML=element;
        suggestions.appendChild(item);
    });

}



let debounceHandleSearch = function(apiCall, delay){
    let timer;
    return function(...args){
    let context = this;
        clearTimeout(timer)
        timer= setTimeout(()=>{
             apiCall.apply(context,args)
        }, delay)
    }

}


let handleSearch = debounceHandleSearch(apiCall, 500)

