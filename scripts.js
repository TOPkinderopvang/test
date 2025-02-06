// You can add interactive features here
document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to the homepage!");
});

// Password protection script
document.getElementById("password-submit").addEventListener("click", function () {
    var password = document.getElementById("password-input").value;
    var correctPassword = "top"; // Set the correct password here

    if (password === correctPassword) {
        document.getElementById("password-overlay").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("password-error").style.display = "block";
    }
});

// JavaScript for accordion functionality
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
