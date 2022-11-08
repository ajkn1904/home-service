import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <h1 className="text-4xl font-semibold m-5">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    
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
                    
                    <button className="btn btn-primary">Log in</button>
                    
                    <button onClick={""} className="btn btn-ghost border-accent my-5">Login with Google
                    </button>

                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;