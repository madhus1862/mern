document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const errorMessages = [];
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!name) {
        errorMessages.push('Name is required.');
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email) {
        errorMessages.push('Email is required.');
    } else if (!email.match(emailPattern)) {
        errorMessages.push('Please enter a valid email address.');
    }

    const phonePattern = /^\d{10}$/;
    if (!phone) {
        errorMessages.push('Phone number is required.');
    } else if (!phone.match(phonePattern)) {
        errorMessages.push('Phone number must be 10 digits.');
    }

    if (!password) {
        errorMessages.push('Password is required.');
    } else if (password.length < 6) {
        errorMessages.push('Password must be at least 6 characters long.');
    }

    const errorDiv = document.getElementById('errorMessages');
    errorDiv.innerHTML = ''; 
    if (errorMessages.length > 0) {
        errorDiv.innerHTML = errorMessages.join('<br>');
    } else {
        alert('Form submitted successfully!');
        window.location.href = 'book.html'; 
    }
});
