import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAco1yI1q0-0A3TFIdfcODHYAuKFzKYqcM",
    authDomain: "brand-cloth.firebaseapp.com",
    databaseURL: "https://brand-cloth.firebaseio.com",
    projectId: "brand-cloth",
    storageBucket: "brand-cloth.appspot.com",
    messagingSenderId: "594407857996",
    appId: "1:594407857996:web:e2bb0d77317d2c8e0939e9",
    measurementId: "G-W0NT1FFQGW"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, ...additionalData) => {

    if(!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get();
    if(!snapshot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log(err.message);
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;