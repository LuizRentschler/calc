console.log("Bem vindo a calculadora, que conta deseja fazer")
let prompt = require('prompt-sync')();

function calcular(numb1, numb2, operador){
    switch(operador){
        case '+':
            return numb1 + numb2;
        case '-':
            return numb1 - numb2;
        case '*':
            return numb1 * numb2;
        case '/':
            if(numb2 === 0){
                return "divisão dando erro"
            }
            return numb1 / numb2;
        
        case '%':
            return (numb1 / 100) * numb2;
        default:
            return 'utilize apenas numeros e digite o operador correto';
    }
}

let numb1 = parseFloat (prompt('Primeiro numero: '));
let operador = prompt('Digite o operador(+ ou  - ou * ou / ou %): ');
let numb2 = parseFloat(prompt('Segundo número: '));

let res = calcular(numb1, numb2, operador);

console.log("Resultado: " + res);