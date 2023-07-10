import React, { useContext, useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const [error, setError] = useState()

    const handleLogin =(event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

         logIn(email, password)
        .then((result)=> {
            const loggedUser = result.user
            console.log(loggedUser)
            form.reset()
        })
        .catch((error)=>{
            console.log(error.message)
            setError(error)
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ama John ! <Link to="/signup">Create new account</Link></small> </p>
        </div>
    );
};

export default Login;