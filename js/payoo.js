// LogOut function 

document.getElementById('logout-btn').addEventListener('click', function () {
    // console.log('logout')
    window.location.href = '/index.html';
});




// add money to the account

/**
 * step1: add event handler
 * prevent page reload after form submit
 * step2: get money to be added to the account balance
 * get the pin number
 * step: verify the pin number
 */




// // step 1: add an event handler to the add money button inside the form...


// document.getElementById('add-money-button').addEventListener('click', function () {

//     // if using form tag then prevent page reload after form submit
//     // event.preventDefault();


//     console.log('add money button clicked');
//     const bankSelect = document.getElementById('input-select-bank').value;

//     const bankAccountNumber = document.getElementById('input-bank-account').value;

//     // step 2: get money to be added to the account

//     const ammountToAdd = document.getElementById('input-ammount-add').value;
//     const amountToAddNumber = parseFloat(ammountToAdd);
//     // console.log(amountToAddNumber)
//     // step 3: get the pin number provided
//     const inputPinNumber = document.getElementById('input-pin-number').value;


//     // step 4: get the current balance

//         const balance = document.getElementById('account-balance').innerText;
//         const balanceNumber = parseFloat(balance);
//         // console.log(balanceNumber);

//     // wrong way to verify 

//     if (inputPinNumber === '1234') {



//         // step 5: add addMoney input with balance

//         const newBalance = balanceNumber + amountToAddNumber;
//         // console.log(newBalance);
//         // console.log(typeof newBalance, typeof balanceNumber, typeof amountToAddNumber);

//         // step 6: update the balance in the UI/DOM

//         document.getElementById('account-balance').innerText =  newBalance;

//     }
//     else {
//         alert('Invalid Input, please try again later')
//     }
// })




document.getElementById('add-money-button').addEventListener('click', function () {
    const addMoney = getInputFieldValue('input-ammount-add');
    // console.log(addMoney);

    const addMoneyPin = getInputFieldValue('input-pin-number');
    // console.log(addMoneyPin);


    if (isNaN(addMoney) || isNaN(addMoneyPin)) {
        alert('Invalid Input Failed');
        return;
    }

    if (addMoneyPin === 1234) {
        const balance = getFieldValue('account-balance');
        const newBalance = balance + addMoney;
        // console.log(newBalance)
        document.getElementById('account-balance').innerText = newBalance;
        //  addMoney = '';
        //  addMoneyPin = '';


        // add to transaction history...

        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} TK. New Balance: ${newBalance}`;

        document.getElementById('transaction-container').appendChild(p);

    }
    else {
        alert('Invalid Input, please try again later');
    }
});








// CashOut or withdraw money section ...........


// document.getElementById('cashout-button').addEventListener('click', function(){
//     // console.log('withdraw money');

//     const agentNumber = document.getElementById('input-cashout-agent-number').value;
//     // console.log(agentNumber);
//     // agentNumber.value = '';
//     const cashOutAmount = document.getElementById('input-cashout-amount').value;
//     const cashOutAmountNumber = parseFloat(cashOutAmount);
//     // console.log(cashOutAmount);
//     // cashOutAmount.value = '';
//     const cashOutPinNumber = document.getElementById('input-cashout-pin-number').value;
//     // console.log(cashOutPinNumber);
//     // cashOutPinNumber.value = '';

//     if(cashOutPinNumber === '1234'){
//         // console.log('you can withdraw money');
//         const accontBalance = document.getElementById('account-balance').innerText;
//         const accontBalanceNumber = parseFloat(accontBalance);
//         const newBalance = accontBalanceNumber - cashOutAmountNumber;
//         // console.log(newBalance);

//         document.getElementById('account-balance').innerText = newBalance;

//     }
//     else{
//         alert('Invalid Input, please try again later')
//     }
// });





document.getElementById('cashout-button').addEventListener('click', function () {
    // console.log('cashout')

    const cashoutAgentNumber = getInputFieldValue('input-cashout-agent-number');
    // console.log(cashoutAgentNumber);
    const cashoutAmount = getInputFieldValue('input-cashout-amount');
    // console.log(cashoutAmount);
    const cashoutPinNumber = getInputFieldValue('input-cashout-pin-number');
    // console.log(cashoutPinNumber);

    // input number validation .....
    if (isNaN(cashoutAgentNumber) || isNaN(cashoutAmount) || isNaN(cashoutPinNumber)) {
        alert('Invalid Input Failed');
        return;
    }

    // wrong way to pin number validation ....

    if (cashoutPinNumber === 1234) {
        // console.log('you can withdraw money');
        const balance = getFieldValue('account-balance');
        if (cashoutAmount > balance) {
            alert("You don't have sufficient Balance in your Account.");
            return;
        }
        const newBalance = balance - cashoutAmount;
        document.getElementById('account-balance').innerText = newBalance;

        // transaction history....


        const division = document.createElement('div');
        division.innerHTML = `
            <div class ="bg-red-400 rounded-xl p-4 space-y-2">
                <h2 class = "text-2xl font-medium">Withdraw Money</h2>
                <p class="text-base text-yellow-400 " >${cashoutAmount} TK CashOut. New Balance Available = ${newBalance} TK</p>
            </div>
        `

        document.getElementById('transaction-container').appendChild(division);
    }
    else {
        alert('Invalid Input, Please try again later')
    }

})



// transfer money section ...........

document.getElementById('transfer-money-button').addEventListener('click', function () {
    // console.log('transfer money successfull');
    const userAccountNumber = getInputFieldValue('input-user-account-number');
    // console.log(userAccountNumber);

    const transferAmount = getInputFieldValue('input-transfer-amount');
    // console.log(transferAmount);

    const transferPinNumber = getInputFieldValue('input-transfer-pin-number');
    // console.log(transferPinNumber);

    // input number validation...
    if (isNaN(userAccountNumber) || isNaN(transferAmount) || isNaN(transferPinNumber)) {
        alert('Incorrect Input field');
        return;
    };

    // pin number validation This is wrong way to validate...

    if (transferPinNumber === 1020) {
        const balance = getFieldValue('account-balance');
        if (transferAmount > balance) {
            alert("You don't have sufficient Balance to transfer, Please Add Money in your account");
            return;
        }
        const newBalance = balance - transferAmount;

        document.getElementById('account-balance').innerText = newBalance;

        // transaction History...

        const div = document.createElement('div');
        div.innerHTML =
            `
               <div class="bg-pink-200 rounded-2xl space-y-3 p-5">
                <h2 class="text-2xl font-semibold text-blue-700" > Transfer Money </h2>
                <p class="text-base text-slate-700 font-medium" > ${transferAmount} TK transfer successful. New Balance Remaining: ${newBalance} TK </P>
                </div>
        `;

        document.getElementById('transaction-container').appendChild(div)
    }
    else {
        alert('Invalid Input, please try again later')
    }

})



// Pay Bill section ...........

document.getElementById('pay-bill-button').addEventListener('click', function () {
    // console.log('pay bill done')

    const billerAccontNumber = getInputFieldValue('input-biller-account-number');
    // console.log(billerAccontNumber);

    const payAmount = getInputFieldValue('input-pay-amount');
    // console.log(payAmount);

    const payPinNumber = getInputFieldValue('input-pay-pin-number');
    console.log(payPinNumber);

    // input number validation...

    if (isNaN(billerAccontNumber) || isNaN(payAmount) || isNaN(payPinNumber)) {
        alert('Invalid Input');
        return;
    };

    // pin number validation wrong way

    if (payPinNumber === 1212) {
        const balance = getFieldValue('account-balance');


        if (payAmount > balance) {
            alert('Insaficient balance');
            return;
        };

        const newBalance = balance - payAmount;
        // console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;

        // transaction History...

        const div = document.createElement('div');
        div.innerHTML =
            `
               <div class="bg-yellow-100 rounded-2xl space-y-3 p-5">
                <h2 class="text-2xl font-semibold text-pink-900" > Pay Bill </h2>
                <p class="text-base text-orange-700 font-medium" > ${payAmount} TK Pay-Bill successful. New Balance Remaining: ${newBalance} TK </P>
                </div>
        `;

        document.getElementById('transaction-container').appendChild(div)

    } 

    else {
        alert('Invalid input,please try again later');
    };



});