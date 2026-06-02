const form = document.getElementById("eventRegistrationForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const fullName = document.getElementById("fullName");
	const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const occupants = document.getElementById("occupants");
    const sin = document.getElementById("sin");
    const language = document.querySelector('input[name="language"]:checked');

    console.log("Form is submitted");
    console.log("Full Name:", fullName.value);
    console.log("Email:", email.value);
    console.log("Occupants:", occupants.value);
    console.log("Sin Number:", sin.value);
    console.log("Language spoken:", language.value);
    

    if (fullName.value.trim().length < 3) {
        errorMessage.textContent = "Full name must be at least 3 characters.";
        isValid = false;
    }

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (emailPattern.test(email.value)) {
    } else {
        showError(email, "Please enter valid format")
        console.log("invalid email")
    }

    const phonePattern = /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/
    if (phonePattern.test(phone.value)) {
    } else {
        showError(phone, "Please enter a valid phone number")
    }

});

function showError(element, message) {
    const mess = document.createElement("p")
    mess.style.margin = 0
    mess.textContent = message
    mess.style.color = "red";
    element.before(mess)
}
