const form = document.getElementById('contact-form');
const output = document.getElementById('output');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const setOutput = (content, isError = false) => {
  output.innerHTML = content;
  output.classList.add(isError ? 'error' : 'success');
  /*
  output.style.backgroundColor = isError ? '#dc2626' : '#16a34a';
  output.style.color = '#fff';
  output.style.border = isError ? '1px solid #b91c1c' : '1px solid #15803d';
  */
};

const clearOutput = () => {
  output.innerHTML = '';
  output.classList.remove('error', 'success');
};

const clearForm = () => {
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  if (name == '' || email == '' || message == '') {
    setOutput('Please fill in all fields before submitting the form.', true);
    return;
  }

  const formData = {
    name,
    email,
    message,
  };

  console.log('Form submitted:', formData);

  setOutput(`
    <strong>Submitted data:</strong>
    <ul class="list-disc pl-5 mt-2">
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Message:</strong> ${message}</li>
    </ul>
  `);

  clearForm();
});
