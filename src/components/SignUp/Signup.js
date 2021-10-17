import React, {useState} from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import useForm from './useForm';
import validate from '../validateInfo';
import '../Forms.css';

const Signup = ({ submitForm }) =>  {
    const {handleChange, values, handleSubmit, errors} = useForm(validate);

    return (
       <div className="form">
           <form className="form" onSubmit={handleSubmit}>
               <h1> Register!</h1>
               <div className="form-inputs">
                   <label htmlFor="username" className="form-label">Username</label>
                   <input type="username"
                        name='username'
                        className="form-input"
                        placeholder='Enter your username'
                        values ={values.username}
                        onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
               </div>

               <div className="form-inputs">
                   <label htmlFor="email" className="form-label">Email</label>
                   <input type="email"
                        name='email'
                        className="form-input"
                        placeholder='Enter your email address' 
                        values ={values.email}
                        onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}    
               </div>

               <div className="form-inputs">
                   <label htmlFor="password" className="form-label">Password</label>
                   <input type="password"
                        name='password'
                        className="form-input"
                        placeholder='Enter your password'
                        values ={values.password}
                        onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
               </div>

               <div className="form-inputs">
                   <label htmlFor="password2" className="form-label">Confirm your Password</label>
                   <input type="password"
                        name='password2'
                        className="form-input"
                        placeholder='Confirm your password'
                        values ={values.password2}
                        onChange={handleChange} />
                    {errors.password2 && <p>{errors.password2}</p>}
               </div>

               <button className='form-input-btn' type="submit">
                   Register
                </button>
                 {/* <span className="form-input-login">Already have an account? Log in<Link to="/sign-in"> here</Link>.
                </span> */}
           </form>
       </div>
    )
}

export default Signup
