import React from 'react';

const ReviewCard = ({reviewData}) => {


    return (
        <div className="card w-96 bg-red-100 shadow-xl">
            <div className="card-body">
                
                <div className="flex  justify-between mb-4">
                    
                    <div className='flex justify-center items-center'>
                        <div className="avatar online mr-3">
                            <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={reviewData.usersImg} alt=''/>
                            </div>
                        </div>
                        <div>
                            <small>{reviewData.userName}</small>
                            <br/>
                            <strong>{reviewData.email}</strong>

                        </div>
                    </div>
                    <div className="badge badge-warning">{reviewData.ratings}</div>
                </div>
                <p>{reviewData.text}</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;