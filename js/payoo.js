// add money to the account

/**
 * step1: add event handler
 * prevent page reload after form submit
 * step2: get money to be added to the account balance
 * get the pin number
 * step: verify the pin number
 */




// step 1: add an event handler to the add money button inside the form...
document.getElementById('add-money-button').addEventListener('click', function () {

    // if using form tag then prevent page reload after form submit
    // event.preventDefault();

    
    console.log('add money button clicked');
    const bankSelect = document.getElementById('input-select-bank').value;

    const bankAccountNumber = document.getElementById('input-bank-account').value;

    // step 2: get money to be added to the account

    const ammountToAdd = document.getElementById('input-ammount-add').value;
    const amountToAddNumber = parseFloat(ammountToAdd);
    // console.log(amountToAddNumber)
    // step 3: get the pin number provided
    const inputPinNumber = document.getElementById('input-pin-number').value;


    // step 4: get the current balance

        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        // console.log(balanceNumber);

    // wrong way to verify 

    if (inputPinNumber === '1234') {

        

        // step 5: add addMoney input with balance

        const newBalance = balanceNumber + amountToAddNumber;
        // console.log(newBalance);
        // console.log(typeof newBalance, typeof balanceNumber, typeof amountToAddNumber);

        // step 6: update the balance in the UI/DOM

        document.getElementById('account-balance').innerText =  newBalance;

    }
    else {
        alert('Invalid Input, please try again later')
    }
})










// CashOut or withdraw money section ...........


document.getElementById('cashout-button').addEventListener('click', function(){
    // console.log('withdraw money');

    const agentNumber = document.getElementById('input-cashout-agent-number').value;
    // console.log(agentNumber);
    // agentNumber.value = '';
    const cashOutAmount = document.getElementById('input-cashout-amount').value;
    const cashOutAmountNumber = parseFloat(cashOutAmount);
    // console.log(cashOutAmount);
    // cashOutAmount.value = '';
    const cashOutPinNumber = document.getElementById('input-cashout-pin-number').value;
    // console.log(cashOutPinNumber);
    // cashOutPinNumber.value = '';

    if(cashOutPinNumber === '1234'){
        // console.log('you can withdraw money');
        const accontBalance = document.getElementById('account-balance').innerText;
        const accontBalanceNumber = parseFloat(accontBalance);
        const newBalance = accontBalanceNumber - cashOutAmountNumber;
        // console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Invalid Input, please try again later')
    }
})



// transfer money section ...........

