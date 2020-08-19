const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case "registerPage":
            document.getElementById('app').innerHTML = component.registerPage;
            const registerForm = document.getElementById("register_form");
            document.querySelector(".form-action span").addEventListener('click', () => {
                view.setActiveScreen('loginPage');
            })
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                let data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                controller.register(data);
            })
            break;

        case "loginPage":
            document.getElementById('app').innerHTML = component.loginPage;
            document.querySelector(".form-action span").addEventListener('click', () => {
                view.setActiveScreen('registerPage');
            })
            const loginForm = document.querySelector('#login_form');
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                let loginData = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                controller.validateLogin(loginData);
            })
            break;

        default:
            break;
    }
}
