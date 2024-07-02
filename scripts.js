document.addEventListener("DOMContentLoaded", function () {
    // Handle sign-up form submission
    const signUpForm = document.getElementById('sign-up-form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Save user details to localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            // Redirect to sign-in page
            window.location.href = 'index.html';
        });
    }

    // Handle sign-in form submission
    const signInForm = document.getElementById('sign-in-form');
    if (signInForm) {
        signInForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Retrieve user details from localStorage
            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');

            // Check if user is signed up
            if (!storedEmail || !storedPassword) {
                alert('Please sign up before signing in.');
                return;
            }

            // Check if credentials match
            if (email === storedEmail && password === storedPassword) {
                // Redirect to welcome page
                window.location.href = 'welcome.html';
            } else {
                alert('Invalid email or password');
            }
        });
    }

    // Handle welcome page
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
        const username = localStorage.getItem('username');
        welcomeMessage.textContent = `Welcome, ${username}`;
    }

    // Handle forget password form submission
    const forgetPasswordForm = document.getElementById('forget-password-form');
    if (forgetPasswordForm) {
        forgetPasswordForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value;

            // Check if email exists in localStorage
            const storedEmail = localStorage.getItem('email');
            if (email === storedEmail) {
                alert('Password reset link sent to your email');
            } else {
                alert('Email not found');
            }
        });
    }
});
