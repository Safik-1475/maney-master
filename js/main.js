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
    // Error message food rent and clothes
    if (isNaN(foodCostValue) || foodCostValue < 0) {
        const foodCost = document.getElementById('food');
        foodCost.value = 'Please Valid Food Number'
    } else if (isNaN(houseRentValue) || houseRentValue < 0) {
        const houseRent = document.getElementById('rent');
        houseRent.value = 'Please Valid House Rent Number'
    } else if (isNaN(clothesCostValue) || clothesCostValue < 0) {
        const clothesCost = document.getElementById('clothes');
        clothesCost.value = 'Please Valid Clothes Number'
    }

    // Error Handle override montlyexpenses
    if (montlyExpensesCount > incomeValue) {
        alert('You have expenses over in this month')
    };
};
// Event handle calculate button

document.getElementById('calculate-btn').addEventListener('click', function () {
    montlyExpenses();
});

// Saving Amount event handler button
document.getElementById('saving-amount-btn').addEventListener('click', function () {
    savingAmount();
});
// saving amount 
function savingAmount() {
    const totalIncome = document.getElementById('income');
    const incomeValue = totalIncome.value;
    const balance = document.getElementById('balance');
    const balanceText = parseFloat(balance.innerText);

    const percentageField = document.getElementById('percentage-field');
    const percentageValue = parseFloat(percentageField.value);

    const percentage = incomeValue / 100 * percentageValue;
    document.getElementById('saving-amount').innerText = percentage;
    document.getElementById('remaining-balance').innerText = balanceText - percentage;

    //Error Handle
    if (percentage > balanceText) {
        alert("You haven't enough money for doing save")
    };

};
