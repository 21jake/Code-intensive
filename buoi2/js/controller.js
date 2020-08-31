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
controller.addMessageToFirebase = async (message, messageFromBot) => {
    const firebase_convo_db = firebase.firestore().collection('conversation');

    const firstconvo_id = "Ebjhcvl5ffNTxl8r7C6d";
    let new_messages = {
        messages: firebase.firestore.FieldValue.arrayUnion(message, messageFromBot),
    }
    firebase_convo_db.doc(firstconvo_id).update(new_messages);
}
controller.retrieveConvoFromFireBase = async () => {
    // const response = await firebase.firestore().collection('conversation').where('users','array-contains',model.currentUser.email).get();
    // console.log(model.currentUser);
    // console.log(response);

    const firebase_convo_db = firebase.firestore().collection('conversation');
    const convo_id = "Ebjhcvl5ffNTxl8r7C6d";
    let convo = await firebase_convo_db.doc(convo_id).get();
    const convoTitle = convo.data().title;
    const convoUsers = convo.data().users;
    const convoTime = convo.data().createdAt;
    controller.setLayout(convoTitle, convoUsers, convoTime);

    const convoMessages = convo.data().messages;
    convoMessages.forEach(message => {
        view.addMessage(message);
    });
}
controller.setLayout = (convoTitle, convoUsers, convoTime) => {
    document.querySelector('.conversation-detail .conversation-title').innerHTML = convoTitle;
}
