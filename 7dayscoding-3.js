function jogar(){
    let resp1 = prompt('Qual área deseja seguir? [1] FontEnd [2] BackEnd ');
    if(resp1 == 1){
        let resp21 = prompt('Deseja aprender [1] react ou [2] Vue ? ');
    }else{
        let resp22 = prompt('Deseja aprender [1] C# ou [2] Java ? ');
    }
    let resp3 = prompt('Deseja seguir se especializando na área escolhida? [S/N] ');
    if(resp3 == 'n' || resp3 == 'N'){
        resp3 = prompt('Deseja tornar-se desenvolvedor FullStack? [S/N]');
        if(resp3 == 's' || resp3 == 'S'){
            console.log('Bons estudos, você conseguirá alcançar seus objetivos.')
        }else{
            console.log('Pense mais um pouco, logo logo poderá decidir entre as áreas.')
        }
    }else{
        console.log('Parabéns, será um ótimo desenvolvedor FrontEnd.')
    }

    let tecnologias = [];
    while(true){
        let resp4 = prompt('Em quais tecnologias gostaria de se especializar? ');
        console.log('Essa linguagem de programação é muito boa');
        tecnologias.push(resp4);
        let resp5 = prompt('Deseja adicionar nova tecnologia? [S/N] ');
        if(resp5 == 'n' || resp5 == 'N'){
            break;
        }
    }
    console.log('Então você aprenderá: ');
    for(let i = 0; tecnologias.length; i++){
        console.log(tecnologias[i]);
    }
}