document.addEventListener('DOMContentLoaded', function () {
    const formTitle = document.getElementById('formTitle');
    const actionBtn = document.getElementById('actionBtn');
    const toggleText = document.getElementById('toggleText');
    const toggleBtn = document.getElementById('toggleBtn');

    let isLogin = true;

    // Function to toggle between login and registration forms
    const toggleForm = () => {
        isLogin = !isLogin;
        if (isLogin) {
            formTitle.textContent = 'Login';
            actionBtn.textContent = 'Login';
            toggleText.innerHTML = "Don't have an account? <span id='toggleBtn'>Sign up</span>";
        } else {
            formTitle.textContent = 'Register';
            actionBtn.textContent = 'Register';
            toggleText.innerHTML = 'Already have an account? <span id="toggleBtn">Login</span>';
        }
    };

    toggleBtn.addEventListener('click', toggleForm);

    // Function to handle registration or login
    actionBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (isLogin) {
            // Send a login request to your backend API
            // For demonstration purposes, you can simply console.log a message
            console.log('Logging in with username:', username, 'and password:', password);
        } else {
            // Send a registration request to your backend API
            // For demonstration purposes, you can simply console.log a message
            console.log('Registering with username:', username, 'and password:', password);
        }
    });
});
const token = 'your-jwt-token-here';

fetch('/protected-route', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
