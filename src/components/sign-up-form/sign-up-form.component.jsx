import { useState } from "react";
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';

import Button from '../button/button.component';

const defaultFormFields = {
    displayName : "",
    email : "",
    password : "",
    confirmPassword : ""
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    
    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Two passwords must be equal");
            return;
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        }catch(error){
            if(error.code === 'auth/email-already-in-use') {
                alert('Email duplicated, can\'t use this email');
            }else{
                console.log('There is an error.', error);
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
            <h2>Don't have an account ?</h2>
            <span>Sign Up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required name="displayName" value={displayName} onChange={onHandleChange} />

                <FormInput label="Email" type="email" required name="email" value={email} onChange={onHandleChange} />

                <FormInput label="Password" type="password" required name="password" value={password} onChange={onHandleChange} />
                
                <FormInput label="Confirm Password" type="password" required name="confirmPassword" value={confirmPassword} onChange={onHandleChange} />

                <Button type="submit" children="Sign Up" buttonType="default" />
            </form>
        </div>
    )
}

export default SignUpForm;