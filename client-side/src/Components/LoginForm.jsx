import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { Form, Button } from 'react-bootstrap';
import '../Components/css/LoginForm.css';
import { DisplayUserDetails, Logout } from '../Redux/authenticationSlice.js'; 
import { useUserLoginMutation, useUserLogoutMutation } from '../Redux/UsersSlice.js';
import FacebookLogin from 'react-facebook-login';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [UserLogin] = useUserLoginMutation();
    const [UserLogout] = useUserLogoutMutation();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ErrorMessage, setErrorMessage] = useState('');

    const EmailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const PasswordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const FormSubmitHandler = async (e) => {
        e.preventDefault();

        if (!Email || !Password) {
            setErrorMessage('Fill in email and password fields');
            return;
        }

        try {
            const res = await UserLogin({ Email, Password }).unwrap();
            dispatch(DisplayUserDetails({ ...res }));
            document.cookie = `auth_token=${res.token}; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;`;
        } catch (error) {
            console.error(error);
            setErrorMessage('Invalid email or password');
        }
    }

    const FacebookLoginHandler = async  (response) => {
    try {
        const res = await UserLogin({ facebookToken: response.accessToken }).unwrap();
        dispatch(DisplayUserDetails({ ...res }));
            document.cookie = `auth_token=${res.token}; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;`;
        } catch (error) {
            console.error(error);
            setErrorMessage('Facebook Login Failed');
        }

    }

    return (
        <div className="container d-flex justify-content-center mt-5">
            <Form onSubmit={FormSubmitHandler} className="rounded-lg border p-4" style={{ maxWidth: '55%', width: '100%', maxHeight: '50%' }}>
                <h2 className='text-center mb-4'>Login to your MultiMerchant Account</h2>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' id="email" value={Email} onChange={EmailChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' id='password' value={Password} onChange={PasswordChangeHandler} className="mt-2" />
                </Form.Group>
                {ErrorMessage && <p className="text-danger">{ErrorMessage}</p>}
                <div className="d-flex justify-content-between">
                    <Button variant="primary" type="submit" className="px-4 my-2">Login</Button>
                </div>
                <p className="mt-3 text-center">Don't have an account? <a href="/register">Sign up here</a></p>
                <div className="mt-3 text-center">
                    <FacebookLogin
                        appId="1432454087633396"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={FacebookLoginHandler}
                        cssClass="btn btn-primary"
                        icon="fa-facebook"
                        textButton=" Login with Facebook "
                    />
                </div>
            </Form>
        </div>
    );
}

export default LoginForm;
