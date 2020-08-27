const controller = {};
controller.register = (data) => {


    view.setErrorMessage('first-name-error', data.firstName === "" ? 'Please enter your first name' : '');
    view.setErrorMessage('last-name-error', data.lastName === "" ? 'Please enter your last name' : '');
    view.setErrorMessage('email-error', data.email === "" ? 'Please enter your email' : '');
    view.setErrorMessage('password-error', data.password === "" ? 'Please enter your password' : '');
    view.setErrorMessage('confirm-password-error', data.confirmPassword === "" ? 'Please enter your password' : '');
    view.setErrorMessage('confirm-password-error', data.confirmPassword !== data.password ? 'Password doesnt match' : '');

    if (data.firstName !== "" && data.lastName !== "" && data.email !== "" && data.password !== "" && data.confirmPassword !== "" && data.confirmPassword === data.confirmPassword) {
        model.register(data);
        view.setActiveScreen("loginPage");
    }
}

