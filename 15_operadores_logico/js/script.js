// AND
var idade = 16;
var nome = 'Marcelo';
var verificado = true;

if(idade == 16 && nome == 'Marcelo') {
    console.log('Por Marcelo ter 16 anos, ele pode entrar na aula de javascript');
} else {
    console.log('Este não é o Marcelo que tem 16 anos');
}

// OR

if(idade == 17 || nome == 'Marcelo') {
    console.log('Por Marcelo ter 16 anos, ele pode entrar na aula de javascript')
}

// NOT

if(verificado){
    console.log('Foi verificado!');
} else if(!verificado) {
    console.log('Não foi verificado');
}