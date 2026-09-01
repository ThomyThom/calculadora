function obterValores() {
    const n1 = document.getElementById('numero1').value;
    const n2 = document.getElementById('numero2').value;
    return {
        num1: Number(n1),
        num2: Number(n2),
        valido: n1 !== '' && n2 !== ''
    };
}

function dispararAnimacao() {
    const box = document.querySelector('.resultado-box');
    // Remove a classe para reiniciar a animação se clicar consecutivamente
    box.classList.remove('animar');
    // Força o reflow do navegador
    void box.offsetWidth;
    // Adiciona a classe de animação
    box.classList.add('animar');
}

function exibirResultado(valor, eErro = false) {
    const resElement = document.getElementById('resultado');
    
    if (eErro) {
        resElement.classList.add('erro');
        resElement.innerText = valor;
    } else {
        resElement.classList.remove('erro');
        // Formata números decimais longos para não quebrar a tela
        const resultadoFormatado = Number.isInteger(valor) ? valor : parseFloat(valor.toFixed(4));
        resElement.innerText = resultadoFormatado;
    }

    // Dispara o efeito visual na caixa
    dispararAnimacao();
}

function somar() {
    const { num1, num2, valido } = obterValores();
    if (!valido) return exibirResultado('Preencha os campos', true);
    exibirResultado(num1 + num2);
}

function subtrair() {
    const { num1, num2, valido } = obterValores();
    if (!valido) return exibirResultado('Preencha os campos', true);
    exibirResultado(num1 - num2);
}

function multiplicar() {
    const { num1, num2, valido } = obterValores();
    if (!valido) return exibirResultado('Preencha os campos', true);
    exibirResultado(num1 * num2);
}

function dividir() {
    const { num1, num2, valido } = obterValores();
    if (!valido) return exibirResultado('Preencha os campos', true);
    
    if (num2 === 0) {
        exibirResultado('Divisão por zero!', true);
        return;
    }
    
    exibirResultado(num1 / num2);
}