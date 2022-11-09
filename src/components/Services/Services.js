import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://home-service-server.vercel.app/services')
        .then(result => result.json())
        .then(data => {
            setServices(data);
            setLoading(false);
        })
    }, [])

    if(loading){
        return <button className="btn btn-ghost text-red-700 loading"></button>
    }
    
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mb-14 bg-slate-50 p-8'>All Services</h1>
            
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-12 sm:mx-12 md:mx-14 lg:mx-20 my-20'>
                {
                    services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;