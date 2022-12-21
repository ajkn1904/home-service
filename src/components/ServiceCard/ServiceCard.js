import React from 'react';
import { Link } from 'react-router-dom';
import Fullimage from '../Fullimage/Fullimage';

const ServiceCard = ({service}) => {

    const {_id, name, img, description, price, ratings} = service;
    
    //service card

    return (
        <div className="bg-base-100 border border-gray-400 rounded-xl shadow-xl">

            <Fullimage img={img}></Fullimage>       

            <div className="card-body">
                <h2 className="card-title mb-6">{name}</h2>
                <p>{description.slice(0,100)+'...'}</p>

                <div className='flex justify-between my-5'>
                    <div className="badge badge-primary badge-outline font-semibold">Price: ${price}</div>
                    <div className="badge badge-warning badge-outline font-semibold">Ratings: {ratings}</div>
                </div>

                <div className="card-actions">
                    <button className="btn btn-success my-8 mx-auto"><Link to={`/services/${_id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;