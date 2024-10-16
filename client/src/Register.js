import React, { useState } from 'react';
import axios from 'axios';
const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault(); try {
    const response = await axios.post('/register', {
                username, email, password
            });
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert('Registration failed');
        }
    };
    return ( <form onSubmit={handleSubmit}>
             <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required /> <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /> <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required /> <button type="submit">Register</button>
        </form> );
};
export default Register;
