//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigosSorteados = [];
limparLista();

function limparLista() {
    document.getElementById("listaAmigos").innerHTML = "";
}
function AoPressionarEnter(event) {
    if (event.key !== "Enter")
        return;

    event.preventDefault();
    adicionarAmigo();
}
function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nomeAmigo);
    document.getElementById("amigo").value = "";

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    limparLista();
    const lista = document.getElementById("listaAmigos");
    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    })
}

function sortearAmigo() {
    //verificar se a lista de amigos nao está vazio
    const listaEhValida = verificarSelistaDeAmigosEhValida(amigos.length);
    if (!listaEhValida) return;

    //realizar sorteio
    const amigosAindaNaoSorteados = amigos.filter(amigo => !amigosSorteados.includes(amigo));
    console.log('amigos nao sorteados', amigosAindaNaoSorteados);

    const amigoSecretoEscolhidoFoiIndice = Math.floor(Math.random() * amigosAindaNaoSorteados.length);
    console.log(amigoSecretoEscolhidoFoiIndice);

    const amigoSecretoEscolhidoFoi = amigosAindaNaoSorteados[amigoSecretoEscolhidoFoiIndice];
    console.log(amigoSecretoEscolhidoFoi);

    adicionarNomeSorteadoNoResultado(amigoSecretoEscolhidoFoi)
}

function adicionarNomeSorteadoNoResultado(nomeSorteado) {
    amigosSorteados.push(nomeSorteado);

    const resultado = document.getElementById("resultado");
    let item = document.createElement("li");
    item.textContent = nomeSorteado;
    resultado.appendChild(item);
}

function verificarSelistaDeAmigosEhValida(quantidadeDeAmigosInformados) {
    if (amigos.length === amigosSorteados.length) {
        alert("Todos os amigos ja foram sorteados!");
    }
    if (quantidadeDeAmigosInformados === 0) {
        alert("A lista de amigos está vazia !");
        return false;
    } else if (quantidadeDeAmigosInformados < 4) {
        alert("Para realizar o sorteio do amigo secreto, é necessário pelo menos 4 amigos !");
        return false;
    }
    return true;
}

function sortearAmigosAindaNaoSorteados() {

}