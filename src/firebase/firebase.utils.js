import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBdYsXs6OGZ_8Ywlscay4t9pwFIlTYlCLc",
    authDomain: "codeone-b1044.firebaseapp.com",
    databaseURL: "https://codeone-b1044.firebaseio.com",
    projectId: "codeone-b1044",
    storageBucket: "codeone-b1044.appspot.com",
    messagingSenderId: "1059311310462",
    appId: "1:1059311310462:web:a1e8ab42855a1dd3f32a2f",

  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`Users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });
        } catch (error) {
          console.log('error creating user', error.message);
        }
      }

      return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();




  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
