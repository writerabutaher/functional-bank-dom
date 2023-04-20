document.getElementById("btn-deposit").addEventListener('click', function () {
    const depositField = document.getElementById("deopsit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    // console.log(typeof newDepositAmount);

    const depositTotalElement = document.getElementById("deposit-total")
    
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    // console.log(typeof previousDepositTotal);
    const currentDepopsitTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepopsitTotal

    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotalString = balanceTotalElement.innerText;
    const PreviousBalanceTotal = parseFloat(balanceTotalString);
    // console.log(typeof previousBalanceTotalString);
    
    const currentBalanceTotal = newDepositAmount + PreviousBalanceTotal;

    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = "";
})