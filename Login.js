import React, { useState } from 'react';

import { login } from '../utils/api';
import { useHistory } from 'react-router-dom';


const Login = () => {
        const [formData, setFormData] = useState({
            email: '',
            password: ''
        });
        const [error, setError] = useState('');
        const history = useHistory();

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleSubmit = async(e) => {
            e.preventDefault();
            try {

                const response = await login(formData);

                console.log('Logged in successfully');

                history.push('/dashboard');
            } catch (error) {

                console.error('Login error:', error.message);
                setError('Invalid email or password. Please try again.');
            }
        };

        return ( <
            div >
            <
            h2 > Login < /h2> {
                error && < p style = {
                        { color: 'red' } } > { error } < /p>} <
                    form onSubmit = { handleSubmit } >
                    <
                    div >
                    <
                    label > Email: < /label> <
                    input
                type = "email"
                name = "email"
                value = { formData.email }
                onChange = { handleChange }
                required
                    /
                    >
                    <
                    /div> <
                    div >
                    <
                    label > Password: < /label> <
                    input
                type = "password"
                name = "password"
                value = { formData.password }
                onChange = { handleChange }
                required
                    /
                    >
                    <
                    /div> <
                    button type = "submit" > Login < /button> <
                    /form> <
                    /div>
            );
        };

        export default Login;