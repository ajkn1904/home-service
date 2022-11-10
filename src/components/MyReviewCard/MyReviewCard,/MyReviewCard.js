import React, { useEffect, useState } from 'react';

const MyReviewCard = ({review, handleDlt}) => {
    const [serviceData, setServiceData] = useState({});
    const [newReview, setNewReview] = useState('');
    const { _id, usersImg, userName, email, text, ratings, serviceInfo } = review;
    const {name} = serviceData;

    useEffect(() => {
        fetch(`https://home-service-server.vercel.app/services/${serviceInfo}`)
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, []);

    const handleNewReview = (e) =>{
        e.preventDefault()
        setNewReview(e.target.value);
    }
    console.log(newReview)

    const handleUpdt = (e) => {
        e.preventDefault()

        fetch(`http://localhost:5000/updateReview/${_id}`, {
            method: 'PATCH',
            headers: {
                
                    authorization: `Bearer ${localStorage.getItem('hmSrvcToken')}`,
                
                    "content-type": "application/json"
                },
            body: JSON.stringify({status: newReview})
            })
            .then(res => res.json())
            .then(data =>{ 
                console.log(data)
             })

    }

    return (
        <div className="card w-96 bg-red-100 shadow-xl mx-auto">
            <div className="card-body">
                
                <div className="flex justify-between mb-4">
                    
                    <div className='flex justify-center items-center'>
                        <div className="avatar mr-3">
                            <div className="w-10 h-10 rounded-full ring ring-offset-base-100 ring-offset-0">
                                <img src={usersImg} alt=''/>
                            </div>
                        </div>
                        <div>
                            <small>{userName}</small>
                            <br/>
                            <strong>{email}</strong>

                        </div>
                    </div>
                </div>

                <div className='bg-white p-3 rounded-md my-2'>
                    <p>Service Name: <span className='font-semibold'>{name}</span></p>
                    <hr className='my-4'/>
                    <p>{text}</p>
                    <div className='flex justify-between my-2'>
                        
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-6" className="btn btn-ghost btn-circle"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg></label>

                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-middle">
                            <form className="modal-box w-11/12 max-w-5xl">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Update Review</span>
                                </label>
                                <input onBlur={handleNewReview} type="text" placeholder="Your Text" className="input input-bordered" name="updateReview" required />
                                </div>
                                <button onClick={handleUpdt} className="btn btn-success my-5">Update</button>
                            </form>
                        </div>
                    
                        
                        <button onClick={() => handleDlt(_id)} className="btn btn-circle btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    
                    </div>

                </div>

                <div className="card-actions justify-end">
                <span className="badge badge-warning mx-2">{ratings}</span>
                <div className="badge badge-outline">Good</div> 
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;