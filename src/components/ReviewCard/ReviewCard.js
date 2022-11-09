import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const ReviewCard = () => {
    const {user} = useContext(AuthContext)

    const [userReview, setUserReview] = useState([]);

    useEffect(() => {
        fetch('https://home-service-server.vercel.app/allreviews')
        .then(res => res.json())
        .then(data => setUserReview(data))
    }, [])

    return (
        <div className="card w-96 bg-red-100 shadow-xl">
            <div className="card-body">
                
                <div className="flex  justify-between mb-4">
                    
                    <div className='flex justify-center items-center'>
                        <div className="avatar online mr-3">
                            <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt=''/>
                            </div>
                        </div>
                        <div>
                            <small>{user?.displayName}</small>
                            <br/>
                            <strong>{user?.email}</strong>

                        </div>
                    </div>
                    <div className="badge badge-warning">Ratings</div>
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;