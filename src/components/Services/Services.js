import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const {loading} = useContext(AuthContext);
    const services = useLoaderData();
    //console.log(services)

    if(loading){
        return <button className="btn btn-ghost text-red-700 loading"></button>
    }
    
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