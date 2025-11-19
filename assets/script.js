const rates = {
    USD: 1,
    EUR: 0.92,
    BRL: 5.55
};

const currencyNames = {
    USD: "Dólar Americano (USD)",
    EUR: "Euro (EUR)",
    BRL: "Real Brasileiro (BRL)"
};

const fromSelect = document.getElementById("from-currency");
const toSelect = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const resultText = document.getElementById("result");
const convertBtn = document.getElementById("convert-btn");

function loadCurrencies() {
    for (let curr in currencyNames) {
        const option1 = document.createElement("option");
        option1.value = curr;
        option1.textContent = currencyNames[curr];

        const option2 = option1.cloneNode(true);

        fromSelect.appendChild(option1);
        toSelect.appendChild(option2);
    }

    fromSelect.value = "USD";
    toSelect.value = "BRL";
}

loadCurrencies();

convertBtn.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;

    if (!amount || amount <= 0) {
        resultText.textContent = "Insira um valor válido!";
        return;
    }

    const converted = (amount / rates[from]) * rates[to];

    resultText.textContent = `${amount.toFixed(2)} ${from} = ${converted.toFixed(2)} ${to}`;
});