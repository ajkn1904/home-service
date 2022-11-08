import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {
    const services = useLoaderData();
    
    
    return (
        <div>
            <h1>This is home</h1>
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