import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center font-semibold py-6 text-3xl bg-slate-200 mb-16'>Welcome to BLOG!</h1>

            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
               <div className="flex flex-col gap-5">
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold p-5">
                    Difference between SQL and NoSQL?
                    </div>
                    <div className="collapse-content"> 
                        <p>Difference between SQL and NoSQL is mainly: NoSQL is a class of DBMs that are non-relational and generally do not use SQL. Besides, SQL  have fixed or static or predefined schema, when NoSQL have dynamic schema.

                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold p-5">
                    What is JWT, and how does it work?
                    </div>
                    <div className="collapse-content"> 
                        <p>JWT is an open standard used to share security information between two parties.
                        Firstly, user sign-in using username and password or with other methods. Then authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.Then user's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. And finally, resource server then verifies the authenticity of the token using the secret salt/ public key. In this way JWT works. </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold p-5">
                    What is the difference between javascript and NodeJS?
                    </div>
                    <div className="collapse-content"> 
                        <p>Difference between javascript and NodeJS are mainly: 1. JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine. 2. JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser. 3. JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.

                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold p-5">
                    How does NodeJS handle multiple requests at the same time?
                    </div>
                    <div className="collapse-content"> 
                        <p>Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded.By this process NodeJS handle multiple requests at the same time.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;