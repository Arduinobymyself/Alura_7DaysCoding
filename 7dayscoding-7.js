


function soma(n1, n2){
    return Number(n1) + Number(n2);
}

function subtracao(n1, n2){
    return Number(n1) - Number(n2);
}

function multiplicacao(n1, n2){
    return Number(n1) * Number(n2);
}

function divisao(n1, n2){
    return Number(n1) / Number(n2);
}

let n1;
let n2;
let operacao = "";

do {  //usando o 'do...while', já que a primeira vez sempre vamos entrar
	operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
	while (operacao != "soma" && operacao != "subtração" && operacao != "multiplicação" && operacao != "divisão" && operacao != "sair") {  //enquanto o texto lido for diferente de "soma", "subtração", "multiplicação", "divisão" e "sair", exibir que não foi reconhecido e perguntar novamente
		alert(`Operação não reconhecida!`);
        operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
	}
	
	if (operacao === "sair"){  //se o texto lido for "sair", sair do loop e da calculadora
			break;
	}
	
    n1 = prompt(`Insira o primeiro valor:`);
    n2 = prompt(`Insira o segundo valor:`);
    switch (operacao) {
        case 'soma':
          alert(`O resultado da ${operacao} é ${soma(n1, n2)}`);
          break;
        case 'subtração':
            alert(`O resultado da ${operacao} é ${subtracao(n1, n2)}`);
            break;
        case 'multiplicação':
            alert(`O resultado da ${operacao} é ${multiplicacao(n1, n2)}`);
            break;
        case 'divisão':
            alert(`O resultado da ${operacao} é ${divisao(n1, n2)}`);
            break;
    }
} while(operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão")
alert(`Até a próxima!`);