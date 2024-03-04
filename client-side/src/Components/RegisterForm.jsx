import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Components/css/LoginForm.css';

const RegisterForm = () => {
    const [first_name, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [error_message, setErrorMessage] = useState('');


    const EmailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const PasswordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const FirstNameChangeHandler = (e) => {
        setFirstName(e.target.value);
    }
    
    const SurnameChangeHandler = (e) => {
        setSurname(e.target.value);
    }

    const ConfirmPasswordChangeHandler = (e) => {
        setConfirmPassword(e.target.value);
    }

    const FormSubmitHandler = (e) => {
        e.preventDefault();
        
        if(password != confirm_password) {
            setErrorMessage('Passwords do not match');
            return;
        }

        if(!email || !password || !confirm_password || !first_name || !surname ) {
            setErrorMessage('Please ensure all fields are filled out');
            return;
        }

    }

    return (
        <div className="container d-flex justify-content-center mt-5">
            <Form onSubmit={FormSubmitHandler} className="rounded-lg border p-4" style={{ maxWidth: '55%', width: '100%', maxHeight: '100%' }}>
                <h2 className='text-center mb-4'>Login to your MultiMerchant Account</h2>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='email' id="email" value={first_name} onChange={FirstNameChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type='email' id="email" value={surname} onChange={SurnameChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' id="email" value={email} onChange={EmailChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="mt-2">Password</Form.Label>
                    <Form.Control type='password' id='password' value={password} onChange={PasswordChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="mt-2">Confirm Password</Form.Label>
                    <Form.Control type='password' id='confirm_password' value={confirm_password} onChange={ConfirmPasswordChangeHandler} />
                </Form.Group>

                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" className="px-4 my-2">Login</Button>
                </div>
                <p className="mt-3 text-center">Don't have an account? <a href="/register">Sign up here</a></p>
            </Form>
        </div>
    );
}

export default RegisterForm;

