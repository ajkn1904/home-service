import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const AddReviewForm = ({serviceId}) => {

    const {user} = useContext(AuthContext)

    console.log(serviceId)
    
    const handleSubmit = (event) => {

        event.preventDefault();

        const form = event.target;
        const text = form.review.value;
        const ratings = form.ratings.value;
        const userName = user.displayName;
        const email = user.email;
        const usersImg = user.photoURL;
        const serviceInfo = serviceId;
        
        
        const userReviews = {email, userName, usersImg, text, ratings, serviceInfo}

        //console.log(text, ratings);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReviews)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))


        form.reset()


    }


    return (
        <form className="card-body border w-6/12 rounded-xl m-auto" onSubmit={handleSubmit}>
                    
            <div className="form-control">
            <label className="label">
                <span className="label-text">Review</span>
            </label>
            <input type="text" placeholder="Your Text" className="input input-bordered" name="review" required />
            </div>


            <div className="form-control">
            <label className="label">
                <span className="label-text">Ratings</span>
            </label>
            <input type="text" placeholder="Your Ratings" className="input input-bordered" name="ratings" required />
            </div>


            <button className="btn btn-success my-5">Add</button>

            
        </form>
    );
};

export default AddReviewForm;