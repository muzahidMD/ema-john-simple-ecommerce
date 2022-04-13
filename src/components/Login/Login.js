import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const location = useLocation();
    const form = location.state?.from?.pathName || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(form, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red', textAlign: 'center' }}>{error?.message}</p>
                    {
                        loading && <p>loading....</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p style={{ textAlign: 'center' }}>
                    New to Ema-john? <Link className='form-link' to={'/signup'}>Create New Account</Link>
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

export default Login;