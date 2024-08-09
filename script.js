
const form = document.querySelector('form');

const names1 = document.querySelector('.firstName');
const names2 = document.querySelector('.secondName')
const email1 = document.querySelector('.email');
const query = document.querySelector('.query-type');
const message1 = document.querySelector('.message');
const checkBox1 = document.querySelector('.checkbox')

const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const submit = document.querySelector('#btn');
const firstName = document.querySelector('#firstName');
const secondName = document.querySelector('#secondName');
const email = document.querySelector('#email');
const query1 =document.querySelector('#query1');
const query2 =document.querySelector('#query2');
const message = document.querySelector('#message');
var checkBox = document.querySelector('#checkbox');
let errorMessage = document.createElement('div');
errorMessage.style.color = 'hsl(0, 66%, 54%)';
errorMessage.style.paddingTop = '3px';
errorMessage.classList.add('text-sm')
errorMessage.classList.add('text-light')

let isNotSend = false;

console.log(submit);
submit.addEventListener('click',(e)=>{
  e.preventDefault();
  formValidator();
})

function formValidator () {
  if(firstName.value === '' || firstName.value == null){
    errorMessage.innerHTML = '<em>This field is required</em>';
    names1.append(errorMessage);
    firstName.style.borderColor = "hsl(0, 66%, 54%)" ;
    firstName.addEventListener('click',()=>{
      firstName.style.borderColor = "hsl(148, 38%, 91%)" ;
    });
  } 
  else if(secondName.value === '' || secondName.value == null){
    errorMessage.innerHTML = '<em>This field is required</em>';
    names2.append(errorMessage);
    secondName.style.borderColor = "hsl(0, 66%, 54%)";
    secondName.addEventListener('click',()=>{
      secondName.style.borderColor = "hsl(148, 38%, 91%)" ;
    });
  } 
  else if(email.value === '' || email.value == null){
      errorMessage.innerHTML = '<em>This field is required</em>';
      email1.append(errorMessage);
      email.style.borderColor = "hsl(0, 66%, 54%)" ;
      email.classList.remove("outline-none");
      email.addEventListener('click',()=>{
        email.style.borderColor = "hsl(148, 38%, 91%)" ;
      });
  }
  else if(!(query1.checked || query2.checked)){
    errorMessage.innerHTML = '<em>This field is required</em>';
    query.append(errorMessage);
  }
  else if(message.value === '' || message.value == null){
    errorMessage.innerHTML = '<em>This field is required</em>';
    message1.append(errorMessage)
    message.style.borderColor = "hsl(0, 66%, 54%)" ;
    message.classList.remove("outline-none");
    message.addEventListener('click',()=>{
      message.style.borderColor = "hsl(148, 38%, 91%)" ;
    });
  }
  else if(!(checkBox.checked)){
    errorMessage.innerHTML = '<em>Need your consentment</em>';   
    checkBox1.append(errorMessage);
  }
  else if(!(email.value.match(pattern))){
    errorMessage.innerHTML = '<em>Invalid Email</em>';
    email1.append(errorMessage);
  }
  else {
        const notify = document.querySelector('#notify');
        notify.classList.remove('hidden');
        notify.classList.add('flex');
        errorMessage.classList.add('hidden');
     }
}

