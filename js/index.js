
// SIGNUP FORM
const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // INPUT VALUES

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const city = document.getElementById("city").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        // ERROR ELEMENTS

        document.getElementById("nameError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("phoneError").innerHTML = "";
        document.getElementById("cityError").innerHTML = "";
        document.getElementById("passwordError").innerHTML = "";
        document.getElementById("confirmPasswordError").innerHTML = "";

        let isValid = true;

        // REGEX

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/;
        const cityPattern = /^[A-Za-z\s]+$/;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

        // FULL NAME

        if (fullname === "") {

            document.getElementById("nameError").innerHTML =
                "Full Name is required";

            isValid = false;
        }

        // EMAIL

        if (email === "") {

            document.getElementById("emailError").innerHTML =
                "Email is required";

            isValid = false;

        } else if (!emailPattern.test(email)) {

            document.getElementById("emailError").innerHTML =
                "Enter a valid email address";

            isValid = false;
        }

        // PHONE

        if (phone === "") {

            document.getElementById("phoneError").innerHTML =
                "Phone Number is required";

            isValid = false;

        } else if (!phonePattern.test(phone)) {

            document.getElementById("phoneError").innerHTML =
                "Phone Number must be 10 digits";

            isValid = false;
        }

        // CITY

        if (city === "") {

            document.getElementById("cityError").innerHTML =
                "Location/City is required";

            isValid = false;

        } else if (!cityPattern.test(city)) {

            document.getElementById("cityError").innerHTML =
                "Only alphabets are allowed";

            isValid = false;
        }

        // PASSWORD

        if (password === "") {

            document.getElementById("passwordError").innerHTML =
                "Password is required";

            isValid = false;

        } else if (!passwordPattern.test(password)) {

            document.getElementById("passwordError").innerHTML =
                "Password must be 8+ characters with letters and numbers";

            isValid = false;
        }

        // CONFIRM PASSWORD

        if (confirmPassword === "") {

            document.getElementById("confirmPasswordError").innerHTML =
                "Confirm Password is required";

            isValid = false;

        } else if (password !== confirmPassword) {

            document.getElementById("confirmPasswordError").innerHTML =
                "Passwords do not match";

            isValid = false;
        }

        // SUCCESS

        if (isValid) {

            localStorage.setItem("userName", fullname);
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPhone", phone);
            localStorage.setItem("userCity", city);
            localStorage.setItem("userPassword", password);

            alert("Signup Successful!");

            window.location.href = "signin.html";
        }

    });

}

// SIGNIN FORM


const signinForm = document.getElementById("signinForm");

if (signinForm) {

    signinForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("signinEmail").value.trim();
        const password = document.getElementById("signinPassword").value.trim();

        document.getElementById("emailError").innerHTML = "";
        document.getElementById("passwordError").innerHTML = "";

        let isValid = true;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // EMAIL

        if (email === "") {

            document.getElementById("emailError").innerHTML =
                "Email is required";

            isValid = false;

        } else if (!emailPattern.test(email)) {

            document.getElementById("emailError").innerHTML =
                "Enter valid email";

            isValid = false;
        }

        // PASSWORD

        if (password === "") {

            document.getElementById("passwordError").innerHTML =
                "Password is required";

            isValid = false;
        }

        // LOGIN CHECK

        if (isValid) {

            const savedEmail = localStorage.getItem("userEmail");
            const savedPassword = localStorage.getItem("userPassword");

            if (email === savedEmail && password === savedPassword) {

                alert("Login Successful!");

                window.location.href = "travelapp.html";

            } else {

                alert("Invalid Email or Password");
            }
        }

    });

}

// ====================
// SHOW / HIDE PASSWORD
// ====================

function togglePassword(id) {

    const passwordField = document.getElementById(id);

    if (passwordField.type === "password") {

        passwordField.type = "text";

    } else {

        passwordField.type = "password";
    }

}