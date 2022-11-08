import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();
    console.log(services)
    
    return (
        <div>
            <h1>All Services</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-16 sm:mx-10 sm:m-auto md:ml-14 lg:ml-20'>
                {
                    services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;