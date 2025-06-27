// features all button section start.....

// add money form

document.getElementById('add-money-btn').addEventListener('click',function(){
    // console.log('add money clicked')

    // show add money form
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden')
})

// cashout form

document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById('cashout-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})