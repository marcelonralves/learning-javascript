// length - comprimento da string
var nome = "Marcelo";
console.log(nome.length);

//indexOf - indice do texto
console.log(nome[2]);
var frase = "O pinto pia debaixo da pia";
console.log(frase.indexOf("pia"));

//slice - remover algo da frase
var pia = frase.slice(8, 11);
console.log(pia);

//replace
var novaFrase = frase.replace("debaixo", "em cima");
console.log(novaFrase)

//toLowerCase e toUpperCase
var fraseManipular = "Hoje cedo quando acordei";
console.log(fraseManipular.toLowerCase());
console.log(fraseManipular.toUpperCase());

//trim
var nome = "          Marcelo              ";
console.log("Sem trim " + nome);
console.log("Com trim " +nome.trim(nome));

//split
console.log(novaFrase.split(" "));

var fraseDois = "Eu quero a última palavra teste dessa frase de teste";
console.log(fraseDois.lastIndexOf("teste"))