import React, { useState } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom'; 
import '../../App.css'

const PasswordResetForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Validate email address
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    try {
      await firebase.auth().sendPasswordResetEmail(email);
      alert('A password reset email has been sent to your email address');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='App'>
      <h2>Reset Password</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleResetPassword}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Reset Password</button>
        <Link to='/login'>Login</Link>
      </form>
    </div>
  );
};

export default PasswordResetForm;



