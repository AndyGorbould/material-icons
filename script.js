let arr = ["fajita", "enchilada", "beans", "chilli", "jalapeno", "pikante!", "nachos", "huevos rancheros", "tacos", "burritos", "quesadilla", "salsa", "guacamole", "carnitas", "tostadas"];

// all Material-Icons           ***** Why does the array have a max input??
let hexArray = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];


let body = document.body;
body.style.backgroundColor = "#fff"
let row = document.getElementById("row")


let div = document.createElement("div");

let button = document.getElementById("button")
button.style.borderRadius = "15px"

body.append(button);

button.addEventListener("click", newHexGenerate);

function newDivParent() {
    div.className = "parent col s12";
    div.setAttribute("id", "parent");
    row.append(div);
};

newDivParent();


function newHexGenerate() {
    i = Math.floor(Math.random() * hexArray.length);
    j = Math.floor(Math.random() * hexArray.length);
    k = Math.floor(Math.random() * hexArray.length);
    l = Math.floor(Math.random() * hexArray.length);
    m = Math.floor(Math.random() * hexArray.length);
    n = Math.floor(Math.random() * hexArray.length);
    rdmHex = `#${hexArray[i]}${hexArray[j]}${hexArray[k]}${hexArray[l]}${hexArray[m]}${hexArray[n]}`
    console.log(rdmHex);
    newHexPrint()
};


function newHexPrint() {
    hexDisplay.innerText = `${rdmHex}`
    hexDisplay.style.backgroundColor = `${rdmHex}`
    hexDisplay.style.fontSize = "6rem"
};