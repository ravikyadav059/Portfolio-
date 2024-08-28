// Toggle between login and sign-up forms
document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
    this.classList.add('active');
    document.getElementById('signup-btn').classList.remove('active');
});

document.getElementById('signup-btn').addEventListener('click', function() {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    this.classList.add('active');
    document.getElementById('login-btn').classList.remove('active');
});

// Store data from the sign-up form
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // Save data to local storage
    localStorage.setItem('signupUsername', username);
    localStorage.setItem('signupEmail', email);
    localStorage.setItem('signupPassword', password);

    alert('Sign-up data saved to local storage');
});

// Validate login data
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;

    const storedUsername = localStorage.getItem('signupUsername');
    const storedPassword = localStorage.getItem('signupPassword');

    if (username === storedUsername && password === storedPassword) {
        // Redirect to Home Page if login data matches
        window.location.href = 'home.html'; // Replace 'home.html' with the actual home page URL
    } else {
        // Move the login button if the login data doesn't match
        const loginButton = document.querySelector('#login-form button[type="submit"]');
        loginButton.style.width = `50px`;
        loginButton.style.backgroundColor = `red`;
        loginButton.style.position = 'relative';
        loginButton.style.left = `${Math.random() * 200}px`;
        loginButton.style.top = `${Math.random() * 100}px`;
       /*  alert('Login data does not match. Please try again.'); */
    }
});
