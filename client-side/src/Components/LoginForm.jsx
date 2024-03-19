import React, { useState } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import '../Components/css/LoginForm.css';
import { LoginUser } from '../Redux/authenticationSlice.js';

const LoginForm = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.authentication.user);
    const isLoading = useSelector(state => state.authentication.isLoading);
    const error = useSelector(state => state.authentication.error);

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ErrorMessage, setErrorMessage] = useState('');

    const EmailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const PasswordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const FormSubmitHandler = (e) => {
        e.preventDefault();

        if(!Email) {
            setErrorMessage('Fill in email field');
            return;
        }

        if(!Password) {
            setErrorMessage('Fill in password field');
            return;
        }

        const UserToLogin = {
            Email,
            Password
        }

        dispatch(LoginUser(UserToLogin));

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
                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" className="px-4 my-2">Login</Button>
                </div>
                <p className="mt-3 text-center">Don't have an account? <a href="/signup">Sign up here</a></p>
            </Form>
        </div>
    );
}

export default LoginForm;
