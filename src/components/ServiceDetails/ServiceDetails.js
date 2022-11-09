import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReviewForm from '../AddReviewForm/AddReviewForm';
import ReviewCard from '../ReviewCard/ReviewCard';

const ServiceDetails = () => {

    const {_id, name, img, description, price, ratings, user} = useLoaderData()

    return (
        <>
            <h1 className="text-4xl font-bold my-8 text-center">ABOUT THE SERVICE</h1>
            <div className="hero min-h-screen bg-gray-200 w-11/12 md:w-10/12 lg:w-10/12 lg:p-10 mx-auto rounded mb-12">
                <div className="hero-content block sm:block md:flex lg:flex">
                    <div className='flex-col m-6'>
                        <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='' style={{ height: "350px", width: "100%"}}/>
                        <div>
                            <h1 className="text-3xl font-bold">{name}</h1>
                            <p className="py-6">{description}</p>
                        </div>
                    </div>
                    
                    <div className="rounded bg-gray-100 text-primary md:flex lg:flex">
  
                        <div className="stat">
                            <div className="stat-title">Price</div>
                            <div className="stat-value" style={{fontSize: "1.5rem"}}>${price}</div>
                            <div className="stat-actions">
                            <button className="btn btn-sm btn-success">Purchase</button>
                            </div>
                        </div>
                        
                        <div className="stat">
                            <div className="stat-title">Ratings</div>
                            <div className="stat-value" style={{fontSize: "1.1rem"}}>{ratings}</div>
                            <div className="stat-actions">
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            <h1 className="text-4xl font-bold my-14 text-center">REVIEWS</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-12 sm:mx-12 md:mx-14 lg:mx-20'>
                <ReviewCard></ReviewCard>
            </div>


            <h1 className="text-2xl font-bold my-14 text-center">Add Your Review</h1>   
            <AddReviewForm serviceId={_id}></AddReviewForm>

        </>
    );
};

export default ServiceDetails;