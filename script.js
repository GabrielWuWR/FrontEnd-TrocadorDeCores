'use strict'

//Criando as variaveis dos elementos
const botaoTrocarCor = document.getElementById('botao-trocar-cor');
const botaoTrocarCorVerde = document.getElementById('botao-verde');
const botaoTrocarCorVermelho = document.getElementById('botao-vermelho');


//Array com as cores do modo arco iris
const cores = [
    '#ffadad',
    '#ffd6a5',
    '#fdffb6',
    '#caffbf',
    '#9bf6ff',
    '#a0c4ff',
    '#bdb2ff'
];

let i = 0; //Variavel que guarda o indice (cor) do array
let intervalo = null; //variavel que guarda o tempo da troca de cor e interrompe o modo arco iris

//Função que faz as o loop de troca de cores, ela aumenta a 
// variavel i e depois usamos ela pra definir a cor atual
function mudarCor() {
    document.documentElement.style.setProperty('--background-color', cores[i]);
    i++;

    if (i >= cores.length) {
        i = 0;
    }
}

//Função que para o modo arco iris ela usa o clear interval para parar
//o set interval e depois volta a variavel para null
function pararArcoIris() {
    clearInterval(intervalo);
    intervalo = null;
}

//Função que começa o modo arcoIris ela chama a função mudar cor a cada 500ms
function arcoIris() {
    intervalo = setInterval(mudarCor, 500);
}

//Criando uma função que obtem o valor do campo e muda a variavel --background-color para esse valor
function trocarCor() {
    pararArcoIris(); //Parando o modo arco iris
    const corUsuario = document.getElementById('cor-usuario').value;

    if (corUsuario == 'verde') {
        document.documentElement.style.setProperty('--background-color', 'green');
    } else if (corUsuario == 'azul') {
        document.documentElement.style.setProperty('--background-color', 'blue');
    } else if (corUsuario == 'rosa') {
        document.documentElement.style.setProperty('--background-color', 'pink');
    } else if (corUsuario == 'marrom') {
        document.documentElement.style.setProperty('--background-color', 'brown');
    } else if (corUsuario == 'arco iris') {
        arcoIris();
    } else {
        document.documentElement.style.setProperty('--background-color', corUsuario);
    }
}

function trocaCorVerde() {
    pararArcoIris(); //Parando o modo arco iris
    document.documentElement.style.setProperty('--background-color', 'green');
}

function trocaCorVermelho() {
    pararArcoIris(); //Parando o modo arco iris
    document.documentElement.style.setProperty('--background-color', 'red');
}

//Caso o botão seja pressionado ele chama a função troca cor
botaoTrocarCor.addEventListener('click', trocarCor);
botaoTrocarCorVerde.addEventListener('click', trocaCorVerde);
botaoTrocarCorVermelho.addEventListener('click', trocaCorVermelho);