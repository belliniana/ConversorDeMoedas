Conversor de Moedas

Este projeto é um conversor de moedas interativo, desenvolvido com HTML, CSS e JavaScript. Ele permite converter valores entre três moedas principais: Dólar (USD), Euro (EUR) e Real (BRL). O design é simples, responsivo e focado na experiência do usuário.

✨ Funcionalidades

Conversão entre USD, EUR e BRL

Interface limpa e amigável

Layout responsivo

Preenchimento automático das opções de moedas

Validação simples do valor inserido

Feedback instantâneo do resultado

🛠 Tecnologias Utilizadas

HTML5

CSS3

JavaScript

Flexbox

Responsividade

📁 Estrutura do Projeto
/
├── index.html
└── assets/
    ├── style.css
    └── script.js

▶️ Como Executar

Baixe ou clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git


Abra o arquivo index.html em qualquer navegador.

Pronto! O conversor já estará funcionando.

📊 Lógica de Conversão

A conversão utiliza taxas fixas pré-definidas no código:

const rates = {
    USD: 1,
    EUR: 0.92,
    BRL: 5.55
};


Isso significa que:

O USD é usado como base

EUR e BRL são calculados proporcionalmente
