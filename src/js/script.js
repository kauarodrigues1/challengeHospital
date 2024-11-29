let imagens = [
    "src/assets/medico1.jpg",
    "src/assets/medico2.jpg",
    "src/assets/medico3.webp",
];
let i = 0;
let time = 5000;

function slideShow() {
    document.getElementById("image").src = imagens[i];
    i++;
    if (i === imagens.length) {
        i = 0;
    }
    setTimeout(slideShow, time); 
}
slideShow();

let elem = document.getElementById("menu");
console.log("Elem: ", elem);

let elemItens = document.getElementById("header");
console.log("elemItens: ", elemItens);

function toggleMenu() {
    console.log("Cliquei no menu");
    elemItens.classList.toggle("header-hidden"); 
}

elem.addEventListener("click", toggleMenu);
