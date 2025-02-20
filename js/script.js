// Example:  Basic form validation (add to js/script.js)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    let email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
    }
});
