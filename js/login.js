
// console.log('login form')


// step: 1 set event handler
// document.getElementById('login-button').addEventListener('click', function(){
//     // step: 2 prevent default behavior (prevent reloading browser)
//     // event.preventDefault(); // <----- vejal to beginners


//     // console.log('login button clicked')

//     // step: 3 get the phone number
//     const phoneNumber = document.getElementById('phone-number').value;

//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber ,pinNumber);


//     // step: 4 validate Phone number and pin....

//     if(phoneNumber === '01782666281' && pinNumber === '1234'){
//         console.log('you are loged in')
//         // set:5 allow user to use the website...
        // window.location.href = '/payoo.html'
//     }
//     else{
//         alert('Invalid Input, Please try again')
//     }
// })











// practice again

document.getElementById('login-button').addEventListener('click', function(){
    console.log('login button clicked')

    const mobileNumber = document.getElementById('phone-number').value;
    
    const fourDigitPin = document.getElementById('pin-number').value;
    console.log(mobileNumber, fourDigitPin);

    if(mobileNumber === '017' && fourDigitPin === '1234'){
        // console.log('you are logged in successfully')
        window.location.href= '/payoo.html'
    }
    else{
        alert('Invalid Input, please try again later')
    }
   
})