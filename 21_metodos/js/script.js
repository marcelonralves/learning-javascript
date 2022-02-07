var pessoa = {
    nome: "Marcelo",
    idade: 23,
    profissao: "Anapropégua",
    frase: function() {
        return "Meu nome é " + this.nome + ", tenho " + this.idade + " anos e trabalho de " + this.profissao;
    }
}

console.log(pessoa.frase());
