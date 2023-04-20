document.getElementById("btn-deposit").addEventListener('click', function () {

    // * step 1
    const depositField = document.getElementById("deposit-field");
    const depositAmountString = depositField.value;

    // * extra
    depositField.value = "";

    // * step 2
    const depositAmount = parseFloat(depositAmountString);

    // * step 3
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;

    // * step 4
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // * step 5
    const currentDepopsitTotal = previousDepositTotal + depositAmount;

    // * step 6
    depositTotalElement.innerText = currentDepopsitTotal; 

    // * step 7
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;

    // * step 8
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // * step 9
    const currentBalanceTotal = depositAmount + previousBalanceTotal;
    balanceTotalElement.innerText = currentBalanceTotal;
})

document.getElementById("btn-withdraw").addEventListener('click', function () {
    
    // * step 1
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawAmountString = withdrawField.value;

    // * extra
    withdrawField.value = "";

    // * step 2
    const withdrawAmount = parseFloat(withdrawAmountString);

    // * step 3
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const withdrawTotalString = withdrawTotalElement.innerText;

    // * step 4
    const withdrawTotal = parseFloat(withdrawTotalString);

    // * step 6
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;

    // * step 7
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // * extra alert
    if (withdrawAmount > previousBalanceTotal) {
        alert("This Bank is Not Your Father's Bank")
        return
    }

    // * step 5
    const withdrawTotalAmount = withdrawTotal + withdrawAmount;
    withdrawTotalElement.innerText = withdrawTotalAmount;


    // * step 8
    const currentBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})

console.log("connected");