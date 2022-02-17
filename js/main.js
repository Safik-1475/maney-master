function montlyExpenses() {
    // total income
    const totalIncome = document.getElementById('income');
    const incomeValue = totalIncome.value;
    // food cost 
    const foodCost = document.getElementById('food');
    const foodCostValue = parseFloat(foodCost.value);
    // house rent
    const houseRent = document.getElementById('rent');
    const houseRentValue = parseFloat(houseRent.value);
    // clothes cost
    const clothesCost = document.getElementById('clothes');
    const clothesCostValue = parseFloat(clothesCost.value);
    // montly expensive total
    const montlyExpenses = document.getElementById('total-expenses');
    const montlyExpensesCount = foodCostValue + houseRentValue + clothesCostValue;
    montlyExpenses.innerText = montlyExpensesCount;

    const currency = document.getElementById('balance');
    const bdCurrency = parseFloat(incomeValue - montlyExpensesCount);
    currency.innerText = bdCurrency;
    // Error Handle
    if (foodCostValue < 0 && foodCostValue < incomeValue) {

    }
}

// Event handle calculate button

document.getElementById('calculate-btn').addEventListener('click', function () {
    montlyExpenses()
});

// Saving Amount event handler button
document.getElementById('saving-amount-btn').addEventListener('click', function () {
    // montlyExpenses('balance')
    savingAmount()
});
// saving amount 
function savingAmount() {
    const balance = document.getElementById('balance');
    const balanceText = parseFloat(balance.innerText);

    const percentageField = document.getElementById('percentage-field');
    const percentageValue = parseFloat(percentageField.value);

    const percentage = balanceText / 100 * percentageValue;
    document.getElementById('saving-amount').innerText = percentage;
    document.getElementById('remaining-balance').innerText = balanceText - percentage;

    //Error Handle
    if (percentage > balanceText) {
        alert("You haven't enough money for doing save")
    }

};
