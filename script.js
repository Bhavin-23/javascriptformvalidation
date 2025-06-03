document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = validateForm();
  
    if (isValid) {
      document.getElementById("successMessage").textContent = "Form submitted successfully ✅";
      document.getElementById("successMessage").style.display = "block";
    }
  });
  
  function validateForm() {
    let isValid = true;
  
    // Reset previous error messages
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    document.getElementById("successMessage").style.display = "none";
  
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const city = document.getElementById("city").value.trim();
    const country = document.getElementById("country").value.trim();
  
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!nameRegex.test(fullName)) {
      document.getElementById("fullNameError").textContent = "Please enter a valid name (letters only)";
      isValid = false;
    }
  
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email";
      isValid = false;
    }
  
    if (!phoneRegex.test(contact)) {
      document.getElementById("contactError").textContent = "Enter a valid 10-digit contact number";
      isValid = false;
    }
  
    if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").textContent =
        "Min 8 characters, 1 uppercase, 1 number, 1 special character";
      isValid = false;
    }
  
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
      isValid = false;
    }
  
    if (!nameRegex.test(city)) {
      document.getElementById("cityError").textContent = "City name must contain letters only";
      isValid = false;
    }
  
    if (!nameRegex.test(country)) {
      document.getElementById("countryError").textContent = "Country name must contain letters only";
      isValid = false;
    }
  
    return isValid;
  }
  