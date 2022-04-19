/* 
import {useEffect} from 'react';
import { getRedirectResult } from 'firebase/auth'; 
*/


// import { auth, signInWithGooglePopUp, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

// import { Fragment } from 'react';

/*
import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';
*/

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

import './authentication.styles.scss';

const Authentication = () => {
    
    
   /*  
   useEffect(async () => {
        const response = await getRedirectResult(auth);
        console.log(response);
        if(response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    },[]) 
    */
   

    return (
        <div className="authentication-container">     
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
export default Authentication;