import React from 'react'
import { Button } from '../Button'
import { Link } from 'react-router-dom'
import useForm from './useForm'

function Signup() {
    const {handleChange, values} = useForm();

    return (
       <div className="form-content-right">
           <form className="form">
               <h1> Register!</h1>
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
                   <label htmlFor="email" className="form-label">Email</label>
                   <input type="email"
                        name='email'
                        className="form-input"
                        placeholder='Enter your email address' 
                        values ={values.email}
                        onChange={handleChange}/>
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

               <Button buttonStyle='btn--primary' buttonColor='blue' type="submit">
                   Sign Up
                </Button>
                <span className="form-input-login">Already have an account? Login  <Link to="/"> here</Link>.
                            </span>
           </form>
       </div>
    )
}

export default Signup
