"use strict";
// string  (tipo implícito)
var nome = 'João';
//console.log(nome)
// number  (tipo implícito)
var idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
/*
// boolean (tipo implícito)
let possuiHobbies = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'
console.log(typeof minhaIdade)

// array
// tipo implícito
let hobbies = ["A", "B", "C"]
console.log(hobbies[0])


// tipo explícito para aceitar qualquer tipo
let hobbies_2: any[] = ["A", "B", "C"]
console.log(hobbies_2)
hobbies_2 = [100]

// tuplas
// forma implícita
let endereco = ["A", 2, "B"]
console.log(endereco)

// forma explícita
let endereco_v2: [string, number] = ["A", 2]
console.log(endereco_v2)

// enums
enum Cor {
    cinza,
    verde = 100,
    azul
}
let minhaCor: Cor = Cor.verde

console.log(minhaCor) //100
console.log(Cor.azul) //101

// any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: 2019}
console.log(carro)
*/
// funções
function retornaMeuNome() {
    return nome;
}
// function retornaMeuNome_teste() : string {
//     return idade
// }
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    //Gera erro porque esta funão não retorna nada
    //return idade
}
digaOi();
// função com parâmetro
function multiplicar(numA, numB) {
    return numA * numB;
}
//console.log(multiplicar(2, 'Teste'))
console.log(multiplicar(4, 9));
