
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Input elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Success message element
    const successMessage = document.getElementById("successMessage");

    // Reset error messages and success message
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";
    successMessage.textContent = "";

    // Validation flags
    let isValid = true;

    // Validate name
    if (name.value.trim().length < 3) {
        nameError.style.display = "block";
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.style.display = "block";
        isValid = false;
    }

    // Validate message
    if (message.value.trim().length < 10) {
        messageError.style.display = "block";
        isValid = false;
    }

    // Display success message if the form is valid
    if (isValid) {
        successMessage.textContent = "Thank you for contacting me! I will get back to you soon.";
        
        // Optionally clear the form after successful submission
        name.value = "";
        email.value = "";
        message.value = "";
    }
});
