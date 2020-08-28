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
                model.login(loginData);
            })
            break;
        case "chatPage":
            document.getElementById('app').innerHTML = component.chatPage;
            const sendMessageForm = document.getElementById('send-message-form');
            sendMessageForm.addEventListener('submit', (event) => {
                event.preventDefault();
                if (sendMessageForm.message.value != "" && sendMessageForm.message.value.trim().length) {
                    const message = {
                        content: sendMessageForm.message.value,
                        owner: model.currentUser.email
                    }
                    const messageFromBot = {
                        content: sendMessageForm.message.value.split('').reverse().join(''),
                        owner: "khuatvantho@hotmail.com"
                    }
                    controller.addMessageToFirebase(message, messageFromBot);
                    view.addMessage(message, messageFromBot);
                }
            })
            break;
        default:
            break;
    }
}
view.setErrorMessage = (ElementID, content) => {
    document.getElementById(ElementID).innerHTML = content;
}
view.addMessage = (message) => {
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('message')
    if (message.owner === model.currentUser.email) {
        messageWrapper.classList.add('mine');
        messageWrapper.innerHTML = `
            <div class="content">${message.content}</div>
        `;
    } else {
        messageWrapper.classList.add('their');
        messageWrapper.innerHTML = `
        <div class="owner">${message.owner}</div>
        <div class="content">${message.content}</div>
        `;
    }
    document.querySelector('.input-wrapper input').value = "";
    document.querySelector('.list-messages').appendChild(messageWrapper);
}