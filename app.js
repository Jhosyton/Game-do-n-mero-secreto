let listaDeNumeroSorteados =[];
let numeroLimite = 10
let numerosecreto = gerarnumeroaleatório();
let tentativas = 1


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirmensageminicial(){

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirmensageminicial();
function verificarChute(){
    let chute = document.querySelector('input').value;   

    if (chute == numerosecreto){
        exibirTextoNaTela('h1', 'Meczera, paizão!');
        let palavratentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!';
        let mensagemtentativas = `Parabéns! Você descobriu o número secreto com ${tentativas} ${palavratentativa}`;
        exibirTextoNaTela('p', mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numerosecreto){
            exibirTextoNaTela('P', 'O número Secreto é menor!')
        } else{
            exibirTextoNaTela ('p', 'O número secreto é maior')
        }
        //tentativas = tentativas + realiza  a contagem de tentativas.
        tentativas++
        limparCampo();
    }
}

function gerarnumeroaleatório() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosEscolhidosNaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeElementosEscolhidosNaLista == 3){
        listaDeNumeroSorteados = [];
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarnumeroaleatório();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarjogo(){
    numerosecreto = gerarnumeroaleatório();
    limparCampo();
    tentativas = 1;
    exibirmensageminicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
