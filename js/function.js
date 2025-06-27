
function getFieldValue (id){
    const fieldValue = document.getElementById(id).innerText;
    const fieldValueNumber = parseFloat(fieldValue);
    return fieldValueNumber;
}

function getInputFieldValue (id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

