'use strict'

//Criando as variaveis dos elementos
const botaoTrocarCor = document.getElementById('botao-trocar-cor');
const botaoTrocarCorVerde = document.getElementById('botao-verde');
const botaoTrocarCorVermelho = document.getElementById('botao-vermelho');

function arcoIris() {
        document.documentElement.style.setProperty('--background-color', 'green');


    setTimeout(()=>{
        document.documentElement.style.setProperty('--background-color', 'blue');

        setTimeout(()=>{
            document.documentElement.style.setProperty('--background-color', 'yellow');
        }, 2000);
    }, 2000);
}

//Criando uma função que obtem o valor do campo e muda a variavel --background-color para esse valor
function trocarCor() {
    const corUsuario = document.getElementById('cor-usuario').value;

    if (corUsuario == 'verde') {
        document.documentElement.style.setProperty('--background-color', 'green');
    } else if (corUsuario == 'azul') {
        document.documentElement.style.setProperty('--background-color', 'blue');
    } else if (corUsuario == 'rosa') {
        document.documentElement.style.setProperty('--background-color', 'pink');
    } else if (corUsuario == 'marrom') {
        document.documentElement.style.setProperty('--background-color', 'brown');
    } else if(corUsuario == 'arco-iris') {
        arcoIris();
    } else {
        document.documentElement.style.setProperty('--background-color', corUsuario);
    }
}

function trocaCorVerde() {
    document.documentElement.style.setProperty('--background-color', 'green');
}

function trocaCorVermelho() {
    document.documentElement.style.setProperty('--background-color', 'red');
}

//Caso o botão seja pressionado ele chama a função troca cor
botaoTrocarCor.addEventListener('click', trocarCor);
botaoTrocarCorVerde.addEventListener('click', trocaCorVerde);
botaoTrocarCorVermelho.addEventListener('click', trocaCorVermelho);