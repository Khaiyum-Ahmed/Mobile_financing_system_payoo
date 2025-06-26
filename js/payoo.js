console.log('home js connected');

// add money to the account

/**
 * step1: add event handler
 * prevent page reload after form submit
 * step2: get money to be added to the account balance
 * 
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

    // step 3: get the pin number provided
    const inputPinNumber = document.getElementById('input-pin-number').value;


    // wrong way to verify 

    if (inputPinNumber === '1234') {
        console.log('money added')
        console.log(bankSelect);
        console.log(bankAccountNumber)
        console.log(ammountToAdd);
        console.log(inputPinNumber);



    }
    else {
        alert('Invalid Input, please try again later')
    }
})