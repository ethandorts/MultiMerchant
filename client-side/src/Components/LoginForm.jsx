import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Components/css/LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ErrorMessage, setErrorMessage] = useState('');

    const EmailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const PasswordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const FormSubmitHandler = (e) => {
        e.preventDefault();

        if(!email) {
            setErrorMessage('Fill in email field');
            return;
        }

        if(!password) {
            setErrorMessage('Fill in password field');
            return;
        }

    }

    return (
        <div className="container d-flex justify-content-center mt-5">
            <Form onSubmit={FormSubmitHandler} className="rounded-lg border p-4" style={{ maxWidth: '55%', width: '100%', maxHeight: '50%' }}>
                <h2 className='text-center mb-4'>Login to your MultiMerchant Account</h2>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' id="email" value={email} onChange={EmailChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' id='password' value={password} onChange={PasswordChangeHandler} className="mt-2" />
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
