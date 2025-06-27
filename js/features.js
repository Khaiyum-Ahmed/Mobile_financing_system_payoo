// features all button section start.....

// add money form

document.getElementById('add-money-btn').addEventListener('click',function(){
    // console.log('add money clicked')

    // show add money form
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.add('hidden');
    document.getElementById('get-bonus-form').classList.add('hidden');
    document.getElementById('pay-bill-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');

})

// cashout form

document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById('cashout-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.add('hidden');
    document.getElementById('get-bonus-form').classList.add('hidden');
    document.getElementById('pay-bill-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
})

// transfer money form

document.getElementById('transfer-money-btn').addEventListener('click', function(){
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.remove('hidden');
    document.getElementById('get-bonus-form').classList.add('hidden');
    document.getElementById('pay-bill-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
})
// get bonus form

document.getElementById('get-bonus-btn').addEventListener('click', function(){
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.add('hidden');
    document.getElementById('get-bonus-form').classList.remove('hidden');
    document.getElementById('pay-bill-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
})
// pay bill form

document.getElementById('pay-bill-btn').addEventListener('click', function(){
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.add('hidden');
    document.getElementById('get-bonus-form').classList.add('hidden');
    document.getElementById('pay-bill-form').classList.remove('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
})
// transaction history.....

document.getElementById('transaction-btn').addEventListener('click', function(){
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.add('hidden');
    document.getElementById('get-bonus-form').classList.add('hidden');
    document.getElementById('pay-bill-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.remove('hidden');
})