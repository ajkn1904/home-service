import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <h1 className="text-4xl font-semibold m-5">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    
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
                    <input type="email" placeholder="Email" className="input input-bordered" name="email"/>
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" className="input input-bordered" name="password"/>
                    <label className="label">
                    </label>
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Re-type password" className="input input-bordered" name="confirmPassword"/>
                    <label className="label">
                    </label>
                    </div>
                    <small>Have account? <Link to='/login' className='text-blue-700'>Log in now</Link></small>
                    <div className="form-control mt-6">
                    
                    <button className="btn btn-primary">Register</button>
                    
                    <button onClick={""} className="btn btn-ghost border-accent my-5">Continue with Google
                    </button>

                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Register;