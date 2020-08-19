const controller = {};
controller.register = (data) => {
    let checker = true;
    if (data.firstName === "") {
        document.getElementById("first-name-error").innerHTML = `Please enter first name`;
        checker = false;
    }
    if (data.lastName === "") {
        document.getElementById("last-name-error").innerHTML = `Please enter last name`;
        checker = false;
    }
    if (data.email === "") {
        document.getElementById("email-error").innerHTML = `Please enter your email`;
        checker = false;
    }
    if (data.password === "") {
        document.getElementById("password-error").innerHTML = `Please enter password`;
        checker = false;
    }
    if (data.confirmPassword !== data.password) {
        document.getElementById("confirm-password-error").innerHTML = `Password doesn't match`;
        checker = false;
    }
    if (checker) {
        document.getElementById("first-name-error").innerHTML = ``;
        document.getElementById("last-name-error").innerHTML = ``;
        document.getElementById("email-error").innerHTML = ``;
        document.getElementById("password-error").innerHTML = ``;
        document.getElementById("confirm-password-error").innerHTML = ``;
        model.saveData(data);
        view.setActiveScreen("loginPage");
    }
}
controller.validateLogin = (loginData) => {
    console.log(model.currentUser)
    console.log(loginData.email)
    console.log(loginData.password)
    console.log(loginData)

    if (loginData.email === "" && loginData.password === "" ) {
        document.querySelector("#email-error").innerHTML = `Please fill both fields`;
        document.querySelector("#password-error").innerHTML = `Please fill both fields`;
    }
    if(loginData.email !== model.currentUser.email) {
        document.querySelector("#email-error").innerHTML = `Please check your email address`;
        document.querySelector("#password-error").innerHTML = ``;
    }
    if (loginData.password !== model.currentUser.password) {
        document.querySelector("#password-error").innerHTML = `Please check your password`;
        document.querySelector("#email-error").innerHTML = ``;
    }

    if(loginData.email == model.currentUser.email && loginData.password == model.currentUser.password) {
        console.log("successfully logged in");
        document.querySelector("#email-error").innerHTML = ``;
        document.querySelector("#password-error").innerHTML = ``;
    }
}
