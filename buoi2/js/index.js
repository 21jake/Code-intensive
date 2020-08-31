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

  // 3 truong hop: 1.user login, 2.user logout, 3.initilization of app
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        model.currentUser = {
          name : user.displayName,
          email: user.email
        }
        if (user.emailVerified) {
          view.setActiveScreen("chatPage");
          // alert(`Welcome ${user.displayName}`);
          console.log(user);
        } else {
          alert('Please verify your email');
          firebase.auth().signOut();
        }
        controller.retrieveConvoFromFireBase();
    } else {
        view.setActiveScreen("registerPage");
    }
  })
  // templateFireStore();
  // console.log(firstConvoData);
}

const templateFireStore = async () => {
  //get one document
  const db = firebase.firestore();
  const docId = "gbULTK5WK4JAzIwjXfzE";
  const response = await firebase.firestore().collection('users').doc(docId).get();
  const user = getOneDocument(response);
  
  //get collection
  const responseCollection = await db.collection('users')
                            .where('phone', 'array-contains', 3333 )
                            .get();
  const users = getCollection(responseCollection);
  // console.log(users);
  let listData2 = [];
  const users2 = db.collection('users').get().then(($querySnapshot) => {
    $querySnapshot.forEach(element => {
      listData2.push(element.data());
    });
  })
  // console.log(listData2);

  //create
  const newItem = {
    age: 9,
    name: "Coca nâu",
    address: "Gần nhà Thơm Tho"
  }
  // db.collection('users').add(newItem);

  //update
  const idToUpdate = 'gbULTK5WK4JAzIwjXfzE';
  const dataToUpdate = {
    name: "Thơm Khuất",
    phone: firebase.firestore.FieldValue.arrayUnion('113'),
  }
 db.collection('users').doc(idToUpdate).update(dataToUpdate);

 const deleteId = "gesd9dbOlnSr3nDpnTFo";
 db.collection('users').doc(deleteId).delete();
 
}
const getOneDocument = (response) => {
  const data = response.data();
  data.id = response.id;
  return data;
}

const getCollection = (response) => {
    const listData = [];
    for (const doc of response.docs) {
      listData.push(getOneDocument(doc));
    }
    return listData;
}