
function start(){
    const nome = prompt('Qual o seu nome? ');
    const idade = prompt('Quantos anos você tem? ');
    const linguagem = prompt('Qual linguagem você estuda? ');

    const mensagem = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}.`

 
    alert(mensagem);

    const resposta = prompt(`Voc^gosta de estudar ${linguagem}? 1:[sim] ou 2 [não]`);

    if (resposta == 1){
        alert('Muito bom! Continue estudado e você terá muito sucesso.');
    }else{
        alert('Ahh que pena... Já tentou aprender outras linguagens?');
    }
}
