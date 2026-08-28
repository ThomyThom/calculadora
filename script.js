function somar() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let resultado = numero1 + numero2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function subtrair() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let resultado = numero1 - numero2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function multiplicar() {
    const num1 = Number(document.getElementById('numero1').value);
    const num2 = Number(document.getElementById('numero2').value);
    document.getElementById('resultado').innerText = `Resultado: ${num1 * num2}`;
}

function dividir() {
    const num1 = Number(document.getElementById('numero1').value);
    const num2 = Number(document.getElementById('numero2').value);
    
    if (num2 === 0) {
        document.getElementById('resultado').innerText = "Erro: Divisão por zero!";
        return;
    }
    
    document.getElementById('resultado').innerText = `Resultado: ${num1 / num2}`;
}