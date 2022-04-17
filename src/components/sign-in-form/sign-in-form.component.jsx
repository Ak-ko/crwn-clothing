import { useState } from "react";
import { signInWithGooglePopUp,signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';


import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';

import Button from '../button/button.component';

const defaultFormFields = {
    email : "",
    password : ""
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    // const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopUp();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            
            // setCurrentUser(user);

            resetFormFields();
        }catch(error){
            switch(error.code){
                case 'auth/user-not-found': alert('no user found !');
                    break;
                case 'auth/wrong-password': alert('incorrect passwrod for this email')
                    break;
                default:
                    console.log(error.code);
            }
        }
    }

      

    const onHandleChange = (event) => {
        const {name,value} = event.target;

        // setFormFields({displayName, email, password, confirmPassword, [name] : value});
        setFormFields({...formFields, [name] : value});
    }


    return (
        <div className='sign-in-container'>
            <h2>Already have an account ?</h2>
            <span>Sign In with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" required name="email" value={email} onChange={onHandleChange} />

                <FormInput label="Password" type="password" required name="password" value={password} onChange={onHandleChange} />

              <div className="buttons-container">
                <Button type="submit" children="Sign In" buttonType="default" />
                <Button type="button" children="Google Sign In" buttonType="google" onClick={signInWithGoogle} />
              </div>
            </form>
        </div>
    )
}

export default SignInForm;