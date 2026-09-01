const expressaoInput = document.getElementById('expressao');
const resultadoElement = document.getElementById('resultado');
const resultadoBox = document.querySelector('.resultado-box');

// 1. Filtro de Input: Bloqueia a digitação de caracteres não matemáticos
expressaoInput.addEventListener('beforeinput', (e) => {
    // Permite apenas números, +, -, *, /, %, (, ), ., , e espaço
    // Também permite ações de apagar ou colar (e.inputType)
    const caracterePermitido = /^[0-9+\-*/%().,\s]$/;

    if (e.data && !caracterePermitido.test(e.data)) {
        e.preventDefault(); // Impede o caractere de aparecer no input
    }
});

// Escuta a digitação direta no teclado para calcular em tempo real
expressaoInput.addEventListener('input', () => {
    // Normaliza vírgula para ponto caso o usuário digite vírgula
    expressaoInput.value = expressaoInput.value.replace(/,/g, '.');
    calcularAoVivo();
});

function adicionar(caractere) {
    expressaoInput.value += caractere;
    expressaoInput.focus();
    calcularAoVivo();
}

function limpar() {
    expressaoInput.value = '';
    resultadoElement.innerText = '0';
    resultadoElement.classList.remove('erro');
    expressaoInput.focus();
}

function apagar() {
    expressaoInput.value = expressaoInput.value.slice(0, -1);
    expressaoInput.focus();
    calcularAoVivo();
}

function calcularAoVivo() {
    const expr = expressaoInput.value.trim();

    if (!expr) {
        resultadoElement.innerText = '0';
        resultadoElement.classList.remove('erro');
        return;
    }

    try {
        // Normaliza operadores visuais para operadores válidos no JS
        const expressaoSanitizada = expr
            .replace(/×/g, '*')
            .replace(/÷/g, '/');

        // 2. Trava de segurança extra: rejeita a avaliação se houver qualquer coisa além da White-list matemática
        if (/[^0-9+\-*/().\s]/.test(expressaoSanitizada)) {
            return;
        }

        // Avaliação segura da expressão matemática
        const res = Function(`"use strict"; return (${expressaoSanitizada})`)();

        if (res !== undefined && !isNaN(res) && isFinite(res)) {
            resultadoElement.classList.remove('erro');
            const formatado = Number.isInteger(res) ? res : parseFloat(res.toFixed(4));
            resultadoElement.innerText = formatado;
        }
    } catch (e) {
        // Silencia erros de sintaxe enquanto o usuário ainda está digitando a fórmula
    }
}

function calcularFinal() {
    calcularAoVivo();
    resultadoBox.classList.remove('animar');
    void resultadoBox.offsetWidth;
    resultadoBox.classList.add('animar');
}