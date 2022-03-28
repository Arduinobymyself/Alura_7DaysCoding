    


const hortifrut = [];
const laticinios = [];
const congelados = [];
const doces = [];
const carnes= [];
const bebidas = [];

    
        
function comprar(){
    let perguntaSimNao = prompt(
    "O que você desja fazer? (responda: 1 = adicionar item, 2 = remover item ou 3 = sair)"
    );

    if(perguntaSimNao === "1"){
        adicionarItem()
    }else if(perguntaSimNao === "2"){
        removerItem()
    }else{
        alert('Obrigado volte Sempre!');
    }
}


function adicionarItem(){
    while (true) {
        var alimento = prompt("Qual produto você deseja inserir?");

        var categoria = prompt(
            "Qual a categoria do produto? (responda: 1 = hortifrut, 2 = laticinios, 3 = congelados, 4 = doces, 5 = bebidas ou 6 = carnes)"
        );

        if (categoria === "1") {
            hortifrut.push(alimento);
        } else if (categoria === "2") {
            laticinios.push(alimento);
        } else if (categoria === "3") {
            congelados.push(alimento);
        } else if (categoria === "4") {
            doces.push(alimento);
        }else if (categoria === "5") {
            bebidas.push(alimento);
        }else if (categoria === "6") {
            carnes.push(alimento);
        }

        perguntaSimNao = prompt(
            "Continuar adicionando itens a sua lista de compras? (responda: 1 = sim ou 2 = não.)"
        );

        if (perguntaSimNao === "2") {
            alert('Obrigado volte sempre!')
            mostraLista();
            break;
        }
    }
}

function mostraLista(){
    document.getElementById(
        "lista"
    ).innerHTML = `<h1>Lista de Compras</h1> <h2>Hortifrut:</h2> <p>${hortifrut}</p> <h2>Laticínios:</h2> <p>${laticinios}</p> <h2>Congelados:</h2> <p>${congelados}</p> <h2>Doces:</h2> <p>${doces}</p><br> <h2>Bebidas:</h2> <p>${bebidas}</p> <h2>Carnes</h2> <p>${carnes}</p>`;
}

function removerItem(){
    while(true){
        let categoria = prompt('De qual categoria deseja remover um produto? (responda: 1 = hortifrut, 2 = laticinios, 3 = congelados, 4 = doces, 5 = bebidas, 6 = carnes)');
        
        let produto = prompt('Qual produto deseja remover da lista?');

        if(categoria === '1'){
            hortifrut.splice(hortifrut.indexOf(produto), 1);
        }
        if(categoria === '2'){
            laticinios.splice(laticinios.indexOf(produto), 1);
        }
        if(categoria === '3'){
            congelados.splice(congelados.indexOf(produto), 1);
        }
        if(categoria === '4'){
            doces.splice(doces.indexOf(produto), 1);
        }
        if(categoria === '5'){
            bebidas.splice(bebidas.indexOf(produto), 1);
        }
        if(categoria === '6'){
            carnes.splice(carnes.indexOf(produto), 1);
        }

        alert('Produto removido com sucesso!')

        let perguntaSimNao = prompt('Deseja remover outro item? 1 = sim, 2 = não');
        if(perguntaSimNao === "2" ){
            alert('Obrigado volte sempre!')
            mostraLista();
            break;
        }
    }

}
    

