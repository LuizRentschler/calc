console.log("Bem vindo, sou uma calculadora básica, o que deseja? :)")
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
                return "erro na divisão por 0"
            }
            return numb1 / numb2;
        
        case '%':
            return (numb1 / 100) * numb2;
        default:
            return 'inexistente, utilize apenas números e o operador correto';
    }
}

let numb1 = parseFloat (prompt('Digite o primeiro número: '));
let operador = prompt('Digite o operador(+, -, *, / ou %): ');
let numb2 = parseFloat(prompt('Digite o segundo número: '));

let res = calcular(numb1, numb2, operador);

console.log("O resultado é: " + res);