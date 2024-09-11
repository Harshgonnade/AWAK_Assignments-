
document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    // Clear all previous errors
    // If you enter a valid user id and password then it will clear all errors.
    document.getElementById('username-error').style.display = 'none';
    document.getElementById('password-error').style.display = 'none';
    document.getElementById('form-feedback').textContent = '';

    // Get input values
    // In this code i will take an input from user and
    // if user enter invalid then return false other wise true
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    // Validate username/email
    // If you enter in valid user id then it will shoes an error
    if (!username || !/\S+@\S+\.\S+/.test(username)) {
        document.getElementById('username-error').textContent = 'Please enter a valid email_ID.';
        document.getElementById('username-error').style.display = 'block';
        isValid = false;
    }

    // Validate password
    // Set limit of password is atleast six or less than 18 characters.
    // If you enter a password less than 6 or greater than 18 characters then it will shows an error.
    if (!password || password.length < 6 || password.length >18) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters.';
        document.getElementById('password-error').style.display = 'block';
        isValid = false;
    }

    if (!isValid) return;

    // Show spinner and disable the form
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'block';

    // Show loading feedback
    // If you enter a valid user id and password then it will shows a loading feedback.
    // After that it will shows a success or failure message.
    document.getElementById('form-feedback').textContent = 'Logging please wait...';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        spinner.style.display = 'none'; // Hide spinner

        if (response.ok) {
            document.getElementById('form-feedback').textContent = 'Login successful..........!';
        } else {
            document.getElementById('form-feedback').textContent = 'Login failed. Please try again.';
        }
    } catch (error) {
        document.getElementById('form-feedback').textContent = 'An error occurred. Please try again.';
    }
});

// Show/Hide Password functionality
document.getElementById('show-password').addEventListener('change', function () {
    const passwordInput = document.getElementById('password');
    passwordInput.type = this.checked ? 'text' : 'password';
});


