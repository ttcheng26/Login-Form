document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('input[type="submit"]').closest('.login_box');
    const submitBtn = document.querySelector('.input-submit');

    // Add submit event listener if a form tag existed, but here we just have inputs in a div.
    // So we'll attach listener to the submit button.

    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default form submission if it was a form

            const user = document.getElementById('user').value;
            const pass = document.getElementById('pass').value;

            if (user && pass) {
                console.log('Login attempt:', { username: user });
                alert(`Login attempt for user: ${user}`);
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    console.log('Script loaded successfully.');
});
