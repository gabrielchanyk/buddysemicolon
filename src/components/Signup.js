import React, { Component } from 'react'
import "./authentication.css"
import { Link } from 'react-router-dom'

export default class Signup extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Register</h3>

                        <div className="form-group">
                            <label htmlFor="username">Username</label> 
                            <input type= "username" className="form-control" placeholder = "Enter Username" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password </label>
                            <input type= "password" className="form-control" placeholder = "Enter Password" />
                        </div>

                        <div className="form-group-last">
                            <label htmlFor="username">Email</label> 
                            <input type= "Email" className="form-control" placeholder = "Enter Email" />
                        </div>

                        <button type="Sign Up " className='btn btn-info'>Sign Up</button>   

                        <p className="small-text-right">
                             Already have an account? <Link className="nav-link" to={"/sign-in"}>Sign in.</Link>
                        </p>
                    </form>
                </div>
            </div>

        )
    }
}

