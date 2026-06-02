const form = document.getElementById("eventRegistrationForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const fullName = document.getElementById("fullName");
	const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const occupants = document.getElementById("occupants");
    const sin = document.getElementById("sin");
    const language = document.querySelector('input[name="language"]:checked');
    const langSection = document.getElementById("language-section")


    
    // console.log("Sin Number:", sin.value);
    // console.log("Language spoken:", language.value);
    


    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (emailPattern.test(email.value)) {
        console.log(`Email: ${email.value}`);
    } else {
        showError(email, "Please enter valid format")
    }

    const phonePattern = /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/
    if (phonePattern.test(phone.value)) {
        console.log("Phone Number:", phone.value)
    } else {
        showError(phone, "Please enter a valid phone number")
    
    }

    if (occupants.value < 1) {
        showError(occupants, "Please enter a valid occupant number.")
        console.log(occupants.value)
    } else {
        console.log(`Number of Occupants: ${occupants.value}`)
    }

    if (language === null) {
        showError(langSection, "Please choose a language.")
    } else {
        console.log("Language spoken at home:", language.value)
    }
    
});

function showError(element, message) {
    const mess = document.createElement("p")
    mess.style.margin = 0
    mess.textContent = message
    mess.style.color = "red";
    element.before(mess)
}
