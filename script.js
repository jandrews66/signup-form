let passwordField = document.getElementById("password");
let confirmField = document.getElementById("check_password");


let passCheck = function() {
    if (passwordField.value == confirmField.value) {
        document.getElementById("matchMsg").style.color = "green";
        document.getElementById("matchMsg").innerHTML = "Your passwords match";
    } else {
            document.getElementById("matchMsg").style.color = "red";
            document.getElementById("matchMsg").innerHTML = "Your passwords do not match";
    }
}

passwordField.addEventListener("keyup", passCheck);
confirmField.addEventListener("keyup", passCheck);

let passLength = function() {
    let value = document.getElementById("password").value
    if (value.length <= 7) { 
        document.getElementById("lengthMsg").style.color = "red";
        document.getElementById("lengthMsg").innerHTML = "Password must be 7 characters <br> or more";
        passwordField.style.border.color = "red";


    } else {
        document.getElementById("lengthMsg").innerHTML = "";

    }
}

passwordField.addEventListener("keyup", passLength);
