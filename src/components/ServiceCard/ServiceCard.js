import React from 'react';
import Fullimage from '../Fullimage/Fullimage';

const ServiceCard = ({service}) => {

    const {_id, name, img, description, price, ratings} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">

        <Fullimage img={img}></Fullimage>

        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description.slice(0,100)+'...'}</p>

            <div className='flex justify-between my-5'>
                <div className="badge badge-primary badge-outline font-semibold">Price: ${price}</div>
                <div className="badge badge-warning badge-outline font-semibold">Ratings: {ratings}</div>
            </div>

            <div className="card-actions">
            <button className="btn btn-success my-10">View Details</button>
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;