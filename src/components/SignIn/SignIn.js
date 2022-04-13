import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignIn.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your to password is don't match");
            return;
        }
        if (password < 6) {
            setError("Password must be 6 characters or longer");
        }
        if (user) {
            navigate('/');
        }

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm  Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p style={{ textAlign: 'center' }}>
                    Already have an account? <Link className='form-link' to={'/login'}>Login</Link>
                </p>
                <div className='divider'>
                    <div>
                        <hr />
                    </div>
                    <p style={{ color: '#95A0A7' }}>or</p>
                    <div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;