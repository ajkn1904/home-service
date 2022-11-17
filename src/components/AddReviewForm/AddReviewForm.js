import React, { useContext } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const AddReviewForm = ({serviceId, setReFetch, reFetch}) => {

    const {user} = useContext(AuthContext)

    
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


        //Posting review to the database.

        fetch('https://home-service-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReviews)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success("Congratulation!!")
            setReFetch(!reFetch)
        })
        .catch(error => console.error(error))


        form.reset()


    }


    return (
        <form className="card-body border w-8/12 rounded-xl m-auto" onSubmit={handleSubmit}>
                    
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
            <Toaster></Toaster>
            
        </form>
    );
};

export default AddReviewForm;