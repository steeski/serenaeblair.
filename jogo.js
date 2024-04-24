let numeroSecreto = Math.floor(Math.random() * 8);
console.log(numeroSecreto);

let chute = prompt('Escolha um numero entre 0 a 10.');




while(chute == null){
    alert('tente novamente :)')
    chute = prompt('escolha um numero entre 0 a 20.');
}

if(numeroSecreto == chute){
    alert('Parabéns!!!!! Você acertou :)');
    console.log('Parabéns, acertou');
} else{
    alert('Que pena, você não acertouu :(');
    console.log('Infelizmente, errou:(');
}
