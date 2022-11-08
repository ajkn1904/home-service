import React from 'react';

const ServiceCard = ({service}) => {
    console.log(service);
    const {_id, name, img, description, price, ratings} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" style={{height: "200px", width: "100%"}} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description.slice(0,100)+'...'}</p>
            <div className="card-actions">
            <button className="btn btn-success my-10">View Details</button>
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;