const url = new URL(document.URL); 
const params = new URLSearchParams(url.search); // para conseguir os numeros 1 e 2

function mostrar(soma) {
    document.getElementById('result').innerHTML = soma //escreve o valor de 'soma' no elemento #result
}

function somar(num1, num2) {
    let sum = num1 + num2
    mostrar(sum)
}

somar(parseFloat(params.get('num1')), parseFloat(params.get('num2')))