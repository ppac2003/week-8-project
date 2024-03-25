import React, { useState } from 'react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        div >
        <
        label > Email: < /label> <
        input type = "email"
        name = "email"
        value = { formData.email }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        div >
        <
        label > Password: < /label> <
        input type = "password"
        name = "password"
        value = { formData.password }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        button type = "submit" > Login < /button> <
        /form>
    );
};

export default LoginForm;