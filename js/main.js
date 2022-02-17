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
    const clothesCost = document.getElementById('clothes');
    const clothesCostValue = parseFloat(clothesCost.value);
    // montly expensive total
    const montlyExpenses = document.getElementById('total-expenses');
    const montlyExpensesCount = foodCostValue + houseRentValue + clothesCostValue;
    montlyExpenses.innerText = montlyExpensesCount;

    const balance = document.getElementById('balance');
    const balanceTotal = parseFloat(incomeValue - montlyExpensesCount);
    balance.innerText = balanceTotal;




}

// Event handle calculate button

document.getElementById('calculate-btn').addEventListener('click', function () {
    montlyExpenses()
});

// Saving Amount event handler button
document.getElementById('saving-amount-btn').addEventListener('click', function () {
    savingAmount();
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

}