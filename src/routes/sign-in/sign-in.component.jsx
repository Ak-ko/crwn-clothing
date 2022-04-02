import { signInWithGooglePopUp,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { Fragment } from 'react';

const SignIn = () => {
    const loginUser = async () => {
        const {user} = await signInWithGooglePopUp();
        const userRefDoc = await createUserDocumentFromAuth(user);  
    }
    return (
        <Fragment>
            <div>This is Sign In Page</div>
            <button onClick={loginUser}>
                Sign In With Google Pop-up
            </button>        
        </Fragment>
    )
}
export default SignIn;