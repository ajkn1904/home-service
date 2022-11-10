import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewEditCard = () => {
    const clickedId = useLoaderData()

    const [review, setReview] = useState(clickedId);


    console.log(clickedId)

        const handleInputChange = event =>{
        const field = event.target.cardId;
        const value = event.target.value;
        const newReview = {...review}
        newReview[field] = value;
        setReview(newReview);
    }
    
    const handleEdit = (event) => {
        
        event.preventDefault();
        
        const form = event.target;
        const cardId = form.cardId.value;
        const text = form.review.value;
        
        
        const editedData = {cardId, text}

        fetch(`https://home-service-server.vercel.app/updateReview/${review._id}`, {
            method: 'PUT',
            headers: {
                
                    authorization: `Bearer ${localStorage.getItem('hmSrvcToken')}`,
                
                    "content-type": "application/json"
                },
            body: JSON.stringify(review)
            })
            .then(res => res.json())
            .then(data =>{ 
                if(data.acknowledged > 0)
                alert("Review Updated Successfully.")
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
            <input onChange={handleInputChange} type="text" defaultValue={clickedId._id} placeholder="info" className="input input-bordered" name="cardId" readOnly/>
            </div>

            <p>Your Previous Review is: {clickedId.text}</p>

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