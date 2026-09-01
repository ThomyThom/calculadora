# Calculadora Multifuncional

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Uma pequena calculadora web em HTML, CSS e JavaScript para realizar operações básicas: soma, subtração, multiplicação e divisão (com tratamento de divisão por zero).

## Tecnologias
- JavaScript
- HTML
- CSS

## Funcionalidades
- Somar, subtrair, multiplicar e dividir dois números
- Tratamento de divisão por zero (mensagem de erro)
- Interface simples e responsiva

## Estrutura do repositório
- `index.html` – interface da calculadora (campos de entrada e botões)
- `script.js` – funções JavaScript: `somar()`, `subtrair()`, `multiplicar()`, `dividir()`
- `style.css` – estilos da interface

## Como usar (modo rápido)
1. Clone o repositório:

```bash
git clone https://github.com/ThomyThom/calculadora.git
cd calculadora
```

2. Abra `index.html` no seu navegador (duplo clique) ou rode um servidor local simples:

```bash
# com Python 3
python -m http.server 8000
# ou com Node (se você tiver 'serve' instalado)
# npx serve .
```

Em seguida, acesse http://localhost:8000 no navegador (se usar servidor).

## Uso
- Insira os valores nos campos "Número 1" e "Número 2".
- Clique no botão da operação desejada.
- O resultado aparecerá abaixo em "Resultado:".
- Se tentar dividir por zero, a calculadora exibirá "Erro: Divisão por zero!".

## Exemplos de funções (em `script.js`)
- somar()
- subtrair()
- multiplicar()
- dividir()

## Contribuição
Pull requests são bem-vindos. Abra uma issue antes de alterações maiores.

## Licença
Este projeto está licenciado sob a Licença MIT — veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

Copyright (c) 2026 ThomyThom
