// Function to generate a random password
function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
    let password = "";
    const passwordLength = 12; // Set the length of the password
    
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    
    // Display the generated password in the input box
    document.getElementById("password").value = password;
}

// Attach event listener to the generate password button
document.getElementById("generate-btn").addEventListener("click", generatePassword);

// Theme toggle function
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
    // Toggle icon between moon and sun
    const icon = document.getElementById("theme-toggle").querySelector('i');
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Set current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
