import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ReviewEditCard = () => {
    const previousReview = useLoaderData()

    const [review, setReview] = useState(previousReview);
    useTitle('My Reviews Edit')


        //handling form data 

        const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = {...review}
        newReview[field] = value;
        setReview(newReview);
        
    }
   
    
    const handleEdit = (event) => {
        
        event.preventDefault();
        
        const form = event.target;
        
        
        //editing a document of database using api
        
        fetch(`https://home-service-server.vercel.app/updateReview/${previousReview._id}`, {
            method: 'PUT',
            headers: {
                
                    authorization: `Bearer ${localStorage.getItem('hmSrvcToken')}`,     //verifying with JWT
                
                    "content-type": "application/json"
                },
            body: JSON.stringify(review)
            })
            .then(res => res.json())
            .then(data =>{ 

                //confirming user with the response getting from database

                if(data.modifiedCount > 0)
                alert("Review Updated Successfully.")
                form.reset()
                console.log(data)
             })
    }


    return (
        <>
        <h2 className='text-center text-3xl font-bold my-20'>Edit Your Review</h2>
        
        <form className="card-body border w-8/12 rounded-xl m-auto" onSubmit={handleEdit}>
                    
            <div className="form-control">
            <label className="label">
                <span className="label-text">Info</span>
            </label>
            <input onChange={handleInputChange} type="text" defaultValue={previousReview._id} placeholder="info" className="input" name="cardId" disabled/>
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Previous Review</span>
            </label>
            <input onChange={handleInputChange} type="text" defaultValue={previousReview.text} className="input" disabled/>
            </div>


            <div className="form-control">
            <label className="label">
                <span className="label-text">New Review</span>
            </label>
            <input onChange={handleInputChange} type="text" placeholder="Your New Review" className="input input-bordered" name="review" required />
            </div>


            <button className="btn btn-success my-5">Add</button>

            
        </form>
        </>
    );
};

export default ReviewEditCard;