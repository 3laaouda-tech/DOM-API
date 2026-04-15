const form = document.getElementById('contact-form');
const output = document.getElementById('output');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

function setOutput(content, isError) {
    output.innerHTML = '';
    output.classList.remove('error', 'success');
    output.innerHTML = content;
    output.classList.add(isError ? 'error' : 'success');
};

function clearForm() {
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

    } else {
        setOutput('Form submitted successfully!', false);
    }


    clearForm();
});
