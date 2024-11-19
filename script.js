// SEARCH
document.getElementById('search').addEventListener('click', function() {
    const searchBox = document.getElementById('search-box');
    searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('search-close-btn').addEventListener('click', function() {
    document.getElementById('search-box').style.display = 'none';
});

// MENU
document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
});

// LOGIN 
const loginForm = document.getElementById('login-form');
const userIcon = document.getElementById('user-icon');

userIcon.addEventListener('click', function() {
    if (loginForm.style.display === 'block') {
        loginForm.style.display = 'none'; // Close the login form if it's already open
    } else {
        loginForm.style.display = 'block'; // Open the login form if it's closed
    }
});

// Close the login form when clicking on the close button
document.getElementById('close-btn').addEventListener('click', function() {
    loginForm.style.display = 'none';
});

// Close the login form when clicking on other icons (e.g., menu icon, search icon)
document.getElementById('menu-icon').addEventListener('click', function() {
    loginForm.style.display = 'none'; // Close the login form
    // Your existing menu toggle code here
});