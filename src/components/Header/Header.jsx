import React, { useContext, useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [error, setError]=useState()
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then((result) => {})
        .catch((error) => {
            setError(error.message)
        })
        
    }
    
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {user &&  <><span className='logOut'>{user.email}</span>
                <button className='btn-logOut' onClick={handleLogOut}>Log Out</button></>
                }:""
            </div>
        </nav>
    );
};

export default Header;