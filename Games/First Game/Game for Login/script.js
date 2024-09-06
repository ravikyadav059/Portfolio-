// Toggle between login and sign-up forms
document.getElementById('login-btn').addEventListener('click', function () {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
    this.classList.add('active');
    document.getElementById('signup-btn').classList.remove('active');
});

document.getElementById('signup-btn').addEventListener('click', function () {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    this.classList.add('active');
    document.getElementById('login-btn').classList.remove('active');
});


let signu, signp; // Declare global variables  
// Store data from the sign-up form
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // Save data to local storage
    /* localStorage.setItem('signupUsername', username);
    localStorage.setItem('signupEmail', email);
    localStorage.setItem('signupPassword', password); */

    // Update the UI with signup data
    signu =  username;
    signp =  password;

    document.querySelector('.signup1').innerHTML = signu;
    /* document.querySelector('.signup2').innerHTML = signe; */
    document.querySelector('.signup3').innerHTML = signp;

    alert('Sign-up Succesfull Now Try To Login');
});

// Validate login data
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;

    /*  const storedUsername = localStorage.getItem('signupUsername');
     const storedPassword = localStorage.getItem('signupPassword'); */

    if (username === signu && password === signp) {
        // Redirect to Home Page if login data matches
        window.location.href = 'home.html'; // Replace 'home.html' with the actual home page URL
    } else {
        // Move the login button if the login data doesn't match
        const loginButton = document.querySelector('#login-form button[type="submit"]');
        loginButton.style.width = `120px`;
        loginButton.style.backgroundColor = `red`;
        loginButton.style.position = 'relative';
        loginButton.style.left = `${Math.random() * 200}px`;
        loginButton.style.top = `${Math.random() * 100}px`;
        /*  alert('Login data does not match. Please try again.'); */
    }
});
