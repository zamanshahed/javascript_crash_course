// alert('OK');

//simple app with form elements and operations

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const usersList = document.querySelector("#users");

myForm.addEventListener('submit', executeOnSubmit);

function executeOnSubmit(eventTwo){
    eventTwo.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all info!';
        setTimeout(()=> msg.remove(), 1500);
    }else{
        console.log(nameInput.value);
        console.log(emailInput.value);
        console.log('Success!')

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        usersList.appendChild(li);
        nameInput.value='';
        emailInput.value='';
    }
    
}