import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Signin from '../Signin/Signin';
import Signup from '../SignUp/Signup';

function Login (){
    
    const [Account, setAccount] = useState(true);
    const handleClick = () => setAccount(!Account);


    return (
    <>
    <div className='form'>
        <div className="back-container">
            <div className="back-content-left">
                <div className="form">
                    <div className="form-text">
                        Have an account?
                    </div>
                    <button className='back-btn' onClick={handleClick}>Log in</button>
                </div>
            </div>
            <div className="back-content-right">
                 <div className="form">
                    <div className="form-text">
                        Don't have an account?
                    </div>
                        <button className='back-btn' onClick={handleClick}>Register</button>
                </div>
            </div>
            <div className= {Account ? 'front-container-left' : 'front-container-right'}>
                {Account ? <Signin/> : <Signup/>}
            </div>
                
        </div>
        </div>
    </>
    )

}

export default Login;
