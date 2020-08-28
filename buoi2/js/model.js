const model = {};
model.currentUser = {}



model.register = async (data) => {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
        firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + ' ' + data.lastName,
        })
        firebase.auth().currentUser.sendEmailVerification();

    } catch (error) {
        alert(error.message);
    }
}
model.login = async ({email, password}) => {
    try {
        firebase.auth().signInWithEmailAndPassword(email, password);
    
        // if(checker && checker.user.emailVerified) {
        //     model.currentUser = {
        //         name : checker.user.displayName
        //     }
        //     view.setActiveScreen('chatPage');
        // } else {
        //     alert("Email isn't verified");
        // }
    } catch (error) {
        alert (error);
        console.log('aa');
    }
}