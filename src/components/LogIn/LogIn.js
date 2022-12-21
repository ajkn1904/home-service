import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const LogIn = () => {

    const {userSignIn, signInWithProvider, loading, setLoading} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [error, setError] = useState(null);
    const location = useLocation();         //saving url location
    const navigate = useNavigate()          // navigating url 
    const from = location.state?.from?.pathname || "/";         //setting url path with login
    useTitle('Login')           //dynamic title


    //loader for keeping user on state

    if(loading){
        return <button className="btn btn-ghost text-red-700 loading"></button>
    }


        //jwt token verification
        const jwtAssign = (currentUser) => {
            fetch('https://home-service-server.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('hmSrvcToken', data.token);
                navigate(from, {replace: true});
            })
        }

    //login with google provider

    const handleGoogleBtn = () => {
        signInWithProvider(googleProvider)
        .then(res => {
            const user = res.user;
            jwtAssign(user)
            console.log(user);
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        })
    }


    //login with email and password
    
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

            const currentUser = {
                email: user.email
            }
            console.log(currentUser)

            jwtAssign(currentUser)
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-semibold m-5 mt-14 mb-8">Login now!</h1>
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