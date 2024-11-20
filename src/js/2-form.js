


let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const StorageKey = 'feedback-form-state';


function saveToLocalStorage() {
  localStorage.setItem(StorageKey, JSON.stringify(formData));
}


function handleInput(event) {
  const name = event.target.name;
  const value = event.target.value;
  formData[name] = value.trim(); 
  saveToLocalStorage();
}


function populateForm() {
  const savedData = localStorage.getItem(StorageKey);
  if (savedData) {
    formData = JSON.parse(savedData);
  
    emailInput.value = formData.email.trim();
    messageInput.value = formData.message.trim();
  }
}


function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form submitted:', formData);

 
  form.reset();
  localStorage.removeItem(StorageKey);
  formData = { email: '', message: '' };
}


