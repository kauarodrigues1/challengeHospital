let elem = document.getElementById("menu");
console.log("Elem: ", elem);

let elemItens = document.getElementById("header");
console.log("elemItens: ", elemItens);

function toggleMenu() {
    console.log("Cliquei no menu");
    elemItens.classList.toggle("header-hidden"); 
}

elem.addEventListener("click", toggleMenu);
