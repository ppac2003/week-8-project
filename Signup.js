import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
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

        console.log('Signup form submitted:', formData);

        setFormData({
            username: '',
            email: '',
            password: ''
        });
    };

    return ( <
        div >
        <
        h2 > Sign Up < /h2> <
        form onSubmit = { handleSubmit } >
        <
        div >
        <
        label > Username: < /label> <
        input type = "text"
        name = "username"
        value = { formData.username }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
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
        button type = "submit" > Sign Up < /button> <
        /form> <
        /div>
    );
};

export default Signup