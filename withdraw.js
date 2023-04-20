document.getElementById("btn-withdraw").addEventListener('click', function () {
    const withdrawField = document.getElementById("withdraw-field");
    withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);


    const withdrawTotalElement = document.getElementById("withdraw-total");
    witdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawAmountString);

    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotalString = balanceTotalElement.innerText;
    const PreviousBalanceTotal = parseFloat(balanceTotalString);

    withdrawField.value = "";

    if (withdrawAmount > PreviousBalanceTotal) {
        alert("This Bank is Not Your Father's Bank");
        return
    }

    const withdrawTotalAmount = withdrawAmount + withdrawTotal;
    withdrawTotalElement.innerText = withdrawTotalAmount;


    const newBalanceTotal = PreviousBalanceTotal - withdrawAmount;

    balanceTotalElement.innerText = newBalanceTotal;

})