import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import AddReviewForm from '../AddReviewForm/AddReviewForm';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Fullimage from '../Fullimage/Fullimage';
import ReviewCard from '../ReviewCard/ReviewCard';

const ServiceDetails = () => {
    const {_id, name, img, description, price, ratings} = useLoaderData()
    const {user} = useContext(AuthContext)
    const [userReview, setUserReview] = useState([]);
    const [review, setReview] = useState([]);
    useTitle('Service Details')         //dynamic title


    //fetching data with api

    useEffect(() => {
        fetch('https://home-service-server.vercel.app/allreviews')
        .then(res => res.json())
        .then(data => setUserReview(data))
    }, [userReview]);

    //finding a specific data
    let serviceIdFromBD = 0;
    const serviceInfoFromDB = userReview.find(serviceInfo => {
        if(serviceInfo.serviceInfo ===_id){
            serviceIdFromBD = serviceInfo.serviceInfo
        }
    })

    //loading data from api
    useEffect(() => {
        fetch(`https://home-service-server.vercel.app/review/${_id}`)
        .then(res => res.json())
        .then(data => setReview(data))
    }, [review])

 
    return (
        <>
            <h1 className="text-4xl font-bold mt-20 mb-10 text-center">ABOUT THE SERVICE</h1>
            <div className="hero min-h-screen bg-gray-200 w-11/12 md:w-10/12 lg:w-10/12 lg:p-10 mx-auto rounded mb-12">
                <div className="hero-content block sm:block md:flex lg:flex">
                    <div className='flex-col m-6'>
                        <Fullimage img={img} className="max-w-sm rounded-lg shadow-2xl h-3/6" alt='' title='Click to view full image.'/>
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
            <div className='flex-col justify-center my-20'>
            
            {/* conditional rendering */}
            
            { (serviceIdFromBD===_id) ? 
            <>
            {
                        review.map(reviewData => 
                        <ReviewCard reviewData={reviewData} key={reviewData._id}></ReviewCard>
                    )
            } </>  
            :
                <p className='font-semibold bg-yellow-200 p-3 text-center'>Please Share Your Precious Opinion with Us</p>   
            }
            </div>

            <hr/>


            <div className='mb-20'>
                <h1 className="text-4xl font-bold mt-16  mb-4 text-center">Add Your Review</h1>   
                {user?.uid ? 
                <>
                    <AddReviewForm serviceId={_id}></AddReviewForm>
                </>
                : 
                <>
                    <p className='font-semibold bg-green-200 p-3 text-center'>Please <Link to='/login' className='text-blue-600 text-center'>login</Link> to add a review.</p>
                </>
                }
            </div>
            
            

        </>
    );
};

export default ServiceDetails;