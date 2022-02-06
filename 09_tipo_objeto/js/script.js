var obj = {
    nome: "Marcelo",
    idade: 23,
    profissao: "Anapropégua"
};

console.log(obj);
console.log(typeof obj);
console.log(obj.nome);
console.log("O meu nome é " + obj.nome);
console.log(obj.nome, obj.idade, obj.profissao);

obj.nome = "Zeus";

console.log(obj.nome);

obj.graduado = true;

console.log(obj);