import React, { Component } from 'react'
import "./authentication.css"
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router';
import Signup from './Signup'

export default class Login extends Component {
    render() {
        return (   
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label htmlFor="username">Username</label> 
                            <input type= "username" className="form-control" placeholder = "Enter Username" />
                        </div>

                        <div className="form-group-last">
                            <label htmlFor="password">Password </label>
                            <input type= "password" className="form-control" placeholder = "Enter Password" />
                        </div>

                        <button type="submit " className="btn btn-info">Login</button> 

                        <p className="small-text-right">
                             Dont have an account? <Link className="nav-link" to={"/sign-up"}>Sign up.</Link>
                        </p>
                    </form> 
                </div>
            </div>
        )
    }
}
