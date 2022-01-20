import { useState, useRef } from 'react';
import './Register.scss';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleStartRegister = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinishRegister = () => {
        setPassword(passwordRef.current.value);
    }

    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="Email Address" ref={emailRef} />
                        <button
                            className="registerButton"
                            onClick={handleStartRegister}
                        >Get Started</button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="password" placeholder="Choose a password" ref={passwordRef} />
                        <button
                            className="submitButton"
                            onClick={handleFinishRegister}
                        >Start</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Register;
