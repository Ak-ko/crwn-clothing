import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

import{
getFirestore,
doc,
getDoc,
setDoc
}from 'firebase/firestore';

// Add firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYB-aLODeEt0VDq7QoEvkHTqOSeYWI6S8",
    authDomain: "crwn-clothing-40a30.firebaseapp.com",
    projectId: "crwn-clothing-40a30",
    storageBucket: "crwn-clothing-40a30.appspot.com",
    messagingSenderId: "275697659672",
    appId: "1:275697659672:web:6101fb7105a45bdc7bb86d"
};
  
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt : 'select_account',
});

export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider) 

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalFields = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

       try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalFields
            });
       }catch(error){
            console.log('there is an error.', error.message);
       }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}