import React, {useState} from 'react'
import { Button } from '../Button'
import { Link } from 'react-router-dom'
import useForm from './useForm'
import '../Forms.css';

function Signin() {
    const {handleChange, values, handleSubmit} = useForm();

    return (
       <div className="form">
           <form className="form" onSubmit={handleSubmit}>
               <h1> Log In!</h1>
               <div className="form-inputs">
                   <label htmlFor="username" className="form-label">Username</label>
                   <input type="username"
                        name='username'
                        className="form-input"
                        placeholder='Enter your username'
                        values ={values.username}
                        onChange={handleChange} />
               </div>

               <div className="form-inputs">
                   <label htmlFor="password" className="form-label">Password</label>
                   <input type="password"
                        name='password'
                        className="form-input"
                        placeholder='Enter your password'
                        values ={values.password}
                        onChange={handleChange} />
                        
               </div>

               <div className="form-inputs">
                   <label htmlFor="password2" className="form-label">Confirm your Password</label>
                   <input type="password"
                        name='password2'
                        className="form-input"
                        placeholder='Confirm your password'
                        values ={values.password2}
                        onChange={handleChange} />
                        
               </div>

               <button className='form-input-btn' type="submit">
                   Log In
                </button>
                {/* <span className="form-input-login">Don't have an account yet? Register<Link to="/sign-up"> here</Link>.
                            </span> */}
           </form>
       </div>
    )
}

export default Signin
