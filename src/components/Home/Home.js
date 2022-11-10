import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {
    const services = useLoaderData();



    
    
    return (
        <div>

            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">HOMEservice</h1>
                    <p className="mb-5">“We Love to Serve.”</p>

                </div>
            </div>
        </div>
        <p className="text-center mt-20 text-3xl bg-slate-200 p-4 font-bold">Letest Services</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-16 sm:mx-10 sm:m-auto md:ml-14 lg:ml-20 my-12'>

                {
                    services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
            <Link to="/services" className='btn my-24'>SEE ALL</Link>
            
        </div>
    );
};

export default Home;