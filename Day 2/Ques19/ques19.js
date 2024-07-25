function checkPasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) {
      strength++;
    }

    if (/[A-Z]/.test(password)) {
      strength++;
    }

    if (/[a-z]/.test(password)) {
      strength++;
    }

    if (/\d/.test(password)) {
      strength++;
    }
  
    if (/[!@#$%^&*()_+\-={};':"\\|,.<>?]/.test(password)) {
      strength++;
    }
  
    switch (strength) {
      case 1:
      case 2:
        console.log("Password is weak");
        break;
      case 3:
      case 4:
        console.log("Password is medium");
        break;
      case 5:
        console.log("Password is strong");
        break;
        }
      }
      
      let password = prompt("Enter a password:");
      checkPasswordStrength(password);
      