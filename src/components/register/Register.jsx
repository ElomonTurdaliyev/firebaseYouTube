import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import '../../App.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!email && !password && !confirmPassword) {
            setError('Please fill all fields');
            return;
        }
        if (password !== confirmPassword) {
            setError('Password does not match');
            return;
        }
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error);
        }
    }
    return (
        <div className='App'>
            <h2>Register</h2>
            {error}
            <form onSubmit={handleRegister}>
                <label>
                    Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    Confirm Password: <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                <button type="submit">Register</button>
            </form>
            <span>Already have an account </span>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Register