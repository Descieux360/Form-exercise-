
const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const names1 = document.querySelector('.firstName');
const names2 = document.querySelector('.secondName')
const email1 = document.querySelector('.email');
const query = document.querySelector('.query-type');
const message1 = document.querySelector('.message');
const checkBox1 = document.querySelector('.checkbox')


const firstName = document.querySelector('#firstName');
const secondName = document.querySelector('#secondName');
const email = document.querySelector('#email');
const query1 =document.querySelector('#query1');
const query2 =document.querySelector('#query2');
const message = document.querySelector('#message');
const checkBox = document.querySelector('#checkbox');

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidator();
});

function showError(container, input, message) {
  const err = document.createElement('div');
  err.className = 'text-sm text-light';
  err.style.color = 'hsl(0, 66%, 54%)';
  err.innerHTML = `<em>${message}</em>`;
  container.append(err);
  input.style.borderColor = "hsl(0, 66%, 54%)";
}

function clearErrors() {
  document.querySelectorAll('.text-sm.text-light').forEach(e => e.remove());
  document.querySelectorAll('input, textarea').forEach(i => {
    i.style.borderColor = "hsl(148, 38%, 91%)";
  });
}

function clearInput(){
  firstName.value = "";
  secondName.value = "";
  email.value = "";
  query1.checked = false;
  query2.checked = false; 
  message.value = "";
  checkBox.checked = false;
}

function formValidator() {
  clearErrors();

  let isValid = true;

  if (firstName.value.trim() === '') {
    showError(names1, firstName, 'This field is required');
    isValid = false;
  }

  if (secondName.value.trim() === '') {
    showError(names2, secondName, 'This field is required');
    isValid = false;
  }

  if (email.value.trim() === '') {
    showError(email1, email, 'This field is required');
    isValid = false;
  } else if (!pattern.test(email.value)) {
    showError(email1, email, 'Invalid Email');
    isValid = false;
  }

  if (!(query1.checked || query2.checked)) {
    showError(query, query1, 'This field is required');
    isValid = false;
  }

  if (message.value.trim() === '') {
    showError(message1, message, 'This field is required');
    isValid = false;
  }

  if (!checkBox.checked) {
    showError(checkBox1, checkBox, 'Need your consentment');
    isValid = false;
  }

  if (isValid) {
    const notify = document.querySelector('#notify');
    notify.classList.remove('hidden');
    notify.classList.add('flex');
    clearInput();
    setTimeout(()=>{
      notify.classList.add("hidden");
    },5000);
  }
}