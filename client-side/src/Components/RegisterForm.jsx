import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Components/css/LoginForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { CreateNewUser } from '../Redux/authenticationSlice';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.authentication.user);
    const isLoading = useSelector(state => state.authentication.isLoading);
    const error = useSelector(state => state.authentication.ErrorOccured);

    const [RegisterFormData, setRegisterFormData] = useState({
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

    const FormChangeHandler = (e) => {
        const { name , value } = e.target;
        setRegisterFormData({
            ...RegisterFormData,
            [name]: value
        });
    };

    const FormSubmitHandler = (e) => {
        e.preventDefault();

        const { FirstName, Surname, StreetAddress, City, PostCode, Country, DOB, Email, Username, Password, ConfirmPassword } = RegisterFormData;

        if (Password !== ConfirmPassword) {
            setRegisterFormData({ ...RegisterFormData, error_message: 'Passwords do not match' });
            return;
        }

        if (!Email || !Password || !ConfirmPassword || !FirstName || !Surname) {
            setRegisterFormData({ ...RegisterFormData, error_message: 'Please ensure all fields are filled out' });
            return;
        }

        const address = {
            StreetAddress,
            City,
            PostCode,
            Country
        }

        const NewUser = {
            FirstName,
            Surname,
            Address: address,
            DOB,
            Email,
            Username, 
            Password
        };

        dispatch(CreateNewUser(NewUser));
    };

    return (
        <div className="container d-flex justify-content-center mt-5">
            <Form onSubmit={FormSubmitHandler} className="rounded-lg border p-4" style={{ maxWidth: '55%', width: '100%', maxHeight: '100%' }}>
                <h2 className='text-center mb-4'>Register for your MultiMerchant Account</h2>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' name="FirstName" value={RegisterFormData.FirstName} onChange={FormChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type='text' name="Surname" value={RegisterFormData.Surname} onChange={FormChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control type='text' name="StreetAddress" value={RegisterFormData.StreetAddress} onChange={FormChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control type='text' name="City" value={RegisterFormData.City} onChange={FormChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Postcode</Form.Label>
                    <Form.Control type='text' name="PostCode" value={RegisterFormData.PostCode} onChange={FormChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type='text' name="Country" value={RegisterFormData.Country} onChange={FormChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type='date' name="DOB" value={RegisterFormData.DOB} onChange={FormChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' name="Email" value={RegisterFormData.Email} onChange={FormChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' name="Username" value={RegisterFormData.Username} onChange={FormChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name="Password" value={RegisterFormData.Password} onChange={FormChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' name="ConfirmPassword" value={RegisterFormData.ConfirmPassword} onChange={FormChangeHandler} />
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
