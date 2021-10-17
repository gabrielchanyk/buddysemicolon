import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaCat, FaTimes} from 'react-icons/fa'
import './Navbar.css';
import { Button } from './Button';
import {IconContext} from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const closeMobileMenu =() => setClick(false);
    const handleClick = () => setClick(!click);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/dashboard' className="navbar-logo" onClick={closeMobileMenu}>
                        <FaCat className='navbar-icon' />
                        Buddy;
                    </Link>
                    <div className="menu-icon" onClick={handleClick} >
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        {/* <li className="nav-item">
                            <Link to="/pet" className="nav-links" onClick={closeMobileMenu}>
                                Pet
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-links" onClick={closeMobileMenu}>
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                               Info
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Sign in
                            </Link>
                        </li>
                        {/* <li className="nav-btn">
                            {button ? (
                                <Link to='/' className="btn-link" >
                                    <Button buttonStyle='btn--outline'>
                                        Sign In
                                    </Button>
                                </Link>
                            ) : (
                                <Link to='/' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'
                                    buttonSize='btn--mobile'>
                                        Sign In
                                    </Button>
                                </Link>
                            )}
                            
                        </li> */}
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
