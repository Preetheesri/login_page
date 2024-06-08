document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Input validation
    if (!username || !password) {
        displayMessage('Please fill in all fields', 'red');
        return;
    }
    
    // Simulate password hashing and verification
    // Note: In a real-world scenario, password hashing and verification should be done on the server-side
    const hashedPassword = hashPassword(password);
    
    // Mock server response (this would be replaced with an actual server call)
    if (username === 'user' && hashedPassword === 'hashed_password') {
        displayMessage('Login successful', 'green');
    } else {
        displayMessage('Invalid username or password', 'red');
    }
});

function displayMessage(message, color) {
    const loginMessage = document.getElementById('loginMessage');
    loginMessage.textContent = message;
    loginMessage.style.color = color;
}

// Mock hash function (use a proper hash function like bcrypt on the server-side)
function hashPassword(password) {
    return 'hashed_password'; // Simulate a hashed password
}
