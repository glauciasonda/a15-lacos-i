//Exercicio 2)
const lista = [1,2,3,4,5,6,7,8,9,10];
let num = Number(prompt("Informe um número"));

for(let i = 0; i < lista.length; i++){
    console.log(`\n ${num} x ${lista[i]}  = ${lista[i] * num}`);

}