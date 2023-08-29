// objeto literal
let pessoa = {
    nome:'Caio Maqueise',
    idade:36
}

console.log(pessoa.nome)
console.log(pessoa.idade)

let pessoas = [
    {
        nome:"Carlos",
        idade:36
    },
    {
        nome:"Marcia",
        idade:26
    },
    {
        nome:"Pedro",
        idade:18
    },
    pessoa
]

console.log(pessoas[0])
console.log(pessoas[0].nome)

for(let p of pessoas){
    console.log(p.nome)
}

// notação de Classes 

class Pessoa{
    constructor(){
        this.nome,
        this.idade
    }
}

let p1 = new Pessoa()
p1.nome = "Maria"
p1.idade = 66
let p2 = new Pessoa()
p2.nome = "José"
p2.idade=44

let pessoas2 = new Array()
pessoas2.push(p1)
pessoas2.push(p2)

console.log(pessoas2)