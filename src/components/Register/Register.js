import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Register = () => {

    const {signInWithProvider, userSighup, loading, updateProfileDetails} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const [error, setError] = useState(null); 
    const location = useLocation();         //saving url location
    const navigate = useNavigate()          // navigating url 
    const from = location.state?.from?.pathname || "/";         //setting url path with login
    useTitle('Register')        //dynamic title


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
        .catch(err =>  setError(err.message))
    }


    //login with email and password
    
    const handleProfile = (name, photoURL) => {

        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateProfileDetails(profile)
        .then(() => {})
        .catch(error => {
            console.error(error);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirmPassword.value;

        const name = form.name.value;
        const photoURL = form.img.value;
        //console.log(email, password, confirm, photoURL, name);

        if(password.length < 6){
            setError('Password must be at least 6 character long.');
            return setError;
        }

        if(password !== confirm){
            setError('Your password did not match.')
            return setError;
        }

        userSighup(email, password)
        .then(result => {
            const user = result.user;
            setError('');
            form.reset();
            handleProfile(name, photoURL);     
            jwtAssign(user)
        })
        .catch(error => {
            setError(error.message);
            console.error(error);
        })

    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl mt-14 mb-8 font-semibold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                
                
                <form className="card-body" onSubmit={handleSubmit}>
                    
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered" name="name"/>
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" placeholder="Image URL" className="input input-bordered" name="img"/>
                    </div>
                    
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

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Re-type password" className="input input-bordered" name="confirmPassword" required/>
                    <label className="label">
                    </label>
                    </div>
                    <small>Have account? <Link to='/login' className='text-blue-700'>Log in now</Link></small>
                    
                    <p className='text-red-700'>{error}</p>
                    
                    <div className="form-control mt-6">    
                        <button className="btn btn-primary">Register</button>
                        
                        <button onClick={handleGoogleBtn} className="btn btn-ghost border-accent my-5">Continue with Google
                        </button>

                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Register;