




function guessNumber(){
    let computerNumber = Math.floor(Math.random() * 11); // 11 = ((máximo - mínimo +1) + mínimo) gera número entre 0 a 10
    let counter = 1;
    while(counter <= 3){
        let playerNumber = prompt('Digite um número');
        if(playerNumber == computerNumber){
            console.log(`Parabéns! Você acertou na ${counter}ª tentativa`);
            break;
        }else{
            console.log('Lamento, não foi dessa vez!');
        }
        counter++;
    } 
    console.log(`O número pensado foi ${computerNumber}.`)
}





