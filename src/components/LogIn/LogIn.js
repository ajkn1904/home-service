import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const LogIn = () => {

const {user, userSignIn, signInWithProvider, loading} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"; 

    if(loading){
        return <button className="btn btn-ghost text-red-700 loading"></button>
    }


    const handleGoogleBtn = () => {
        signInWithProvider(googleProvider)
        .then(res => {
            const user = res.user;
            navigate(from, {replace: true});
            console.log(user);
        })
        .catch(err => setError(err.message))
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userSignIn(email, password)
        .then(res => {
            const user = res.user;
            form.reset();
            setError('')
            navigate(from, {replace: true});
        })
        .catch(err => setError(err.message));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-semibold m-5">Login now!</h1>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form className="card-body" onSubmit={handleSubmit}>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" name="email" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered" name="password" required />
                            <label className="label">
                            </label>
                        </div>

                        <small>Have no account? <Link to='/register' className='text-blue-700'>Join now</Link></small>
                        <div className="form-control mt-6">
                        
                            <p className='text-red-700'>{error}</p>

                            <button className="btn btn-primary">Log in</button>
                            
                            <button onClick={handleGoogleBtn} className="btn btn-ghost border-accent my-5">Login with Google
                        </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;