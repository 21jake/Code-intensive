window.onload = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyAMt5DvUhvioStpOaYAsppT0P90xoDdxRA",
    authDomain: "first-project-jake21.firebaseapp.com",
    databaseURL: "https://first-project-jake21.firebaseio.com",
    projectId: "first-project-jake21",
    storageBucket: "first-project-jake21.appspot.com",
    messagingSenderId: "262091308089",
    appId: "1:262091308089:web:2fc9c6ce7f55bae85c21e8"
  };
  firebase.initializeApp(firebaseConfig);

  //3 truong hop: 1.user login, 2.user logout, 3.initilization of app
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        model.currentUser = {
          name : user.displayName,
          email: user.email
        }
        if (user.emailVerified) {
          view.setActiveScreen("chatPage");
          console.log(user);
        } else {
          alert('Please verify your email');
          firebase.auth().signOut();
        }
    } else {
        view.setActiveScreen("registerPage");
    }
  })
}