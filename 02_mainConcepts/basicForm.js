function validateForm(email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        return "Invalid email format.";
    }

    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }

    return "Form is valid!";
}

