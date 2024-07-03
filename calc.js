const prompt = require('prompt-sync')();
function adicao(n1, n2) {
    return n1 + n2;
}
function subtracao(n1, n2) {
    return n1 - n2;
}
function multiplicao(n1, n2) {
    return n1 * n2;
}
function divisao(n1, n2) {
    if (n2 === 0) {
        return "Divisão por zero!!!"
    } else {
        return n1 / n2;
    }
}
function porcentagem(num, percent) {
    return (num * percent) / 100;
}

function calculadora() { 
    let operacao = prompt("Escolha uma operação +(adicao) -(subtracao) *(multiplicao) /(divisão) %(porcentagem)")
}
let num1 = parseFloat(prompt("Digite o primeiro numero"));
let num2 = parseFloat(prompt("Digite o segundo numero"));

let resultado;

switch (operacao) {
    case '+':
        resultado = adicao(n1, n2);
        break;
        }
        switch (operacao) {
            case '-':
                resultado = subtracao(n1, n2);
                
                break;
}
switch (operacao) {
    case '*':
        resultado = multiplicao(n1, n2);
        
        break;
        }
        switch (operacao) {
            case '/':
                resultado = divisao(n1, n2);
                
                break;
                }
                switch (operacao) {
                    case '%':
                        resultado = porcentagem(n1, n2);
                        
                        break;
                        }