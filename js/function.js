
function getFieldValue (id){
    const fieldValue = document.getElementById(id).innerText;
    const fieldValueNumber = parseFloat(fieldValue);
    return fieldValueNumber;
};

function getInputFieldValue (id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
};

// reset input field

function resetInputField(){
    document.getElementById('input-ammount-add').value = '';
    document.getElementById('input-pin-number').value = '';
    document.getElementById('input-bank-account').value = '';
    // document.getElementById('input-select-bank').value = '';
    
}