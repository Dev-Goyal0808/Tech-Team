function validateForm() {
    const genderMale = document.getElementById("male").checked;
    const genderFemale = document.getElementById("female").checked;
    const termsChecked = document.getElementById("terms").checked;

    if (!genderMale && !genderFemale) {
        alert("Please select your gender.");
        return false;
    }

    if (!termsChecked) {
        alert("You must accept the terms and conditions.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
