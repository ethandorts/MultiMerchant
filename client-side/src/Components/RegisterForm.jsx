import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Components/css/LoginForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateNewUserMutation } from '../Redux/UsersSlice';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.authentication);
    const [createNewUser] = useCreateNewUserMutation();

    const [registerFormData, setRegisterFormData] = useState({
        FirstName: '',
        Surname: '',
        StreetAddress: '',
        City: '',
        PostCode: '',
        Country: '',
        DOB: '',
        Email: '',
        Username: '', 
        Password: '',
        ConfirmPassword:''
    });

    const formChangeHandler = (e) => {
        const { name , value } = e.target;
        setRegisterFormData({
            ...registerFormData,
            [name]: value
        });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const { FirstName, Surname, StreetAddress, City, PostCode, Country, DOB, Email, Username, Password, ConfirmPassword } = registerFormData;

        if (Password !== ConfirmPassword) {
            setRegisterFormData({ ...registerFormData, error_message: 'Passwords do not match' });
            return;
        }

        if (!Email || !Password || !ConfirmPassword || !FirstName || !Surname) {
            setRegisterFormData({ ...registerFormData, error_message: 'Please ensure all fields are filled out' });
            return;
        }

        const newUser = {
            FirstName,
            Surname,
            StreetAddress,
            City,
            PostCode,
            Country,
            DOB,
            Email,
            Username, 
            Password
        };

        createNewUser(newUser)
            .unwrap() // unwrap the result to get the fulfilled value
            .then(() => {
                // Handle success
                console.log('User created successfully');
            })
            .catch((error) => {
                // Handle error
                console.error('Error creating user:', error);
            });
    };

    return (
        <div className="container d-flex justify-content-center mt-5">
            <Form onSubmit={formSubmitHandler} className="rounded-lg border p-4" style={{ maxWidth: '55%', width: '100%', maxHeight: '100%' }}>
                <h2 className='text-center mb-4'>Register for your MultiMerchant Account</h2>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' name="FirstName" value={registerFormData.FirstName} onChange={formChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type='text' name="Surname" value={registerFormData.Surname} onChange={formChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control type='text' name="StreetAddress" value={registerFormData.StreetAddress} onChange={formChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control type='text' name="City" value={registerFormData.City} onChange={formChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Postcode</Form.Label>
                    <Form.Control type='text' name="PostCode" value={registerFormData.PostCode} onChange={formChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type='text' name="Country" value={registerFormData.Country} onChange={formChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type='date' name="DOB" value={registerFormData.DOB} onChange={formChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' name="Email" value={registerFormData.Email} onChange={formChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' name="Username" value={registerFormData.Username} onChange={formChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name="Password" value={registerFormData.Password} onChange={formChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' name="ConfirmPassword" value={registerFormData.ConfirmPassword} onChange={formChangeHandler} />
                </Form.Group>
                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" className="px-4 my-2" disabled={isLoading}>Register</Button>
                </div>
                {error && <p className="text-danger">{error}</p>}
                <p className="mt-3 text-center">Already have an account? <a href="/login">Login here</a></p>
            </Form>
        </div>
    );
};

export default RegisterForm;
