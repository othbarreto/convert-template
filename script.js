// Cotação de moedas.
const USD = 4.50;
const EUR = 6.07;
const GBP = 8.09;


// Obtendo elementos do HTML
const form = document.querySelector('form');
const footer = document.querySelector('main footer');
const amount = document.querySelector('#amount');
const currency = document.getElementById('currency');
const description = document.getElementById('description');
const result = document.getElementById('result');

// Manipulando o input amount, para aceitar apenas números.
amount.addEventListener("input", () => {

    const hasWordsRegex = /\D+/g;
    amount.value = amount.value.replace(hasWordsRegex, '');

});

// Capturando o evento de submit
form.onsubmit = (event) => {
    event.preventDefault();

    switch(currency.value){
        case 'USD':
            convertCurrency(amount.value, USD, "$");
            break;
        case 'EUR':
            convertCurrency(amount.value, EUR, "€");
            break;
        case 'GBP':
            convertCurrency(amount.value, GBP, "£");
            break;    
    }
}

//Convertendo Moeda selecionada
function convertCurrency(amount, price, symbol){
    try{

        //Cotação da moeda selecionada para real.
        description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`

        //Calculo para conversão da moeda selecionada para real.
        let total = amount * price
        result.textContent = `${formatCurrencyBRL(total).replace('R$', '')} Reais`

        // Aplica a classe que exibe o footer oculto.
        footer.classList.add('show-result');

    } catch (err) {
        console.log(err);
        footer.classList.remove('show-result');
        alert("Não foi possível converter.");
    }
}

//Formata a moeda em REAL brasileiro.
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
            style: 'currency', 
            currency: 'BRL'
        })
}


