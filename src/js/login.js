const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const temErro = checarCampos();
    if (!temErro) {
        window.location = "logado.html";
    }
});

function checarCampos() {
    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const senhaValor = senha.value.trim();

    let temErro = false;

    if (nomeValor === "") {
        validarErro(nome, "Preencha o campo nome");
        temErro = true;
    } else {
        validarSucesso(nome);
    }

    if (emailValor === "") {
        validarErro(email, "Preencha o campo email");
        temErro = true;
    } else {
        validarSucesso(email);
    }

    if (senhaValor === "") {
        validarErro(senha, "Preencha o campo senha");
        temErro = true;
    } else if (senhaValor.length < 8) {
        validarErro(senha, "A senha deve ter mais que 8 caracteres");
        temErro = true;
    } else {
        validarSucesso(senha);
    }

    return temErro;
}

function validarErro(input, message) {
    const controle = input.parentElement;
    const small = controle.querySelector('small');
    small.innerText = message;
    controle.className = "controle error";
}

function validarSucesso(input) {
    const controle = input.parentElement;
    controle.className = "controle sucesso";
}


function myFunction() {
    var x = document.getElementById("senha");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

let elem = document.getElementById("menu");
console.log("Elem: ", elem);

let elemItens = document.getElementById("header");
console.log("elemItens: ", elemItens);

function toggleMenu() {
    console.log("Cliquei no menu");
    elemItens.classList.toggle("header-hidden"); 
}

elem.addEventListener("click", toggleMenu);
