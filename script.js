function checkEligibility() {
    const ageInput = document.getElementById("age");
    const age = parseInt(ageInput.value);
  
    const result = document.getElementById("result");
  
    if (ageInput.value == ""){
        result.textContent = "Please Input Age First";
    }
    else if (age >= 18 && age < 115) {
        result.textContent = "You are eligible to vote.";
        result.style.color = "#43A047";
    }
    else if (age >= 115) {
        result.textContent = "Wow! You're still going strong. You're eligible to vote in every galaxy!";
        result.style.color = "#FFD700"; // Set text color to gold
    }
    else {
        result.textContent = "You are not eligible to vote yet.";
        result.style.color = "#E53935";
    }
}
