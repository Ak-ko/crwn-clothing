// import {useEffect} from 'react';
// import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopUp, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { Fragment } from 'react';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // },[])
    const loginUser = async () => {
        const {user} = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);  
    }
    return (
        <Fragment>
            <div>This is Sign In Page</div>
            <button onClick={loginUser}>
                Sign In With Google Pop-up
            </button>
            <SignUpForm />
        </Fragment>
    )
}
export default SignIn;