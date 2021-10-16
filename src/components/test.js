import React, { Component } from 'react'

export default class test extends Component {
    render() {
        return (
            <div  className="auth" id="parent">
                <div id="left"> 
                
                    <form>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label htmlFor="username">Username</label> 
                            <input type= "username" className="form-control" placeholder = "Enter Username" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password </label>
                            <input type= "password" className="form-control" placeholder = "Enter Password" />
                        </div>

                        <button type="submit " className="btn btn-primary btnblock">Login</button>   
                    </form>
                </div>
                
                <div id="right"> <form>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label htmlFor="username">Username</label> 
                            <input type= "username" className="form-control" placeholder = "Enter Username" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password </label>
                            <input type= "password" className="form-control" placeholder = "Enter Password" />
                        </div>

                        <button type="submit " className="btn btn-primary btnblock">Login</button>   
                    </form></div>
            </div>
        )
    }
}

