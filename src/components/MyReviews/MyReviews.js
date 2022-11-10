import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard,/MyReviewCard';

const MyReviews = () => {
    const {user, userSignOut} = useContext(AuthContext);
    const [myreview, setMyreview] = useState([])



    useEffect(() => {
        fetch(`https://home-service-server.vercel.app/myreviews?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('hmSrvcToken')}`
            }
        })
        .then(res =>{ 
            if(res.status === 401 || res.status === 403){
                localStorage.removeItem('hmSrvcToken')
                return userSignOut()
            }
            return res.json()
        })
        .then(data => setMyreview(data))
    }, [user?.email, userSignOut])






    const handleDlt = id => {
        const doDlt = window.confirm('Do you want to delete this review?');

        if(doDlt){
            fetch(`https://home-service-server.vercel.app/deleteReview/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('hmSrvcToken')}`
                }
            })
            .then(res => res.json())
            .then(data =>{ 
                console.log(data)
                if(data.deletedCount === 1){
                    alert('Delete successful');
                    const restReviews = myreview.filter(restRvw => restRvw._id !== id);
                    setMyreview(restReviews);
                }
            })
        }
        
    }



    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-20'>My All Reviewes ({myreview.length})</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-12 sm:mx-12 md:mx-14 lg:mx-20 my-20'>
                {(myreview.length > 0) ? <>
                    {
                        myreview.map(review => <MyReviewCard review={review} key={review._id} handleDlt={handleDlt}></MyReviewCard>)
                    }</>
                    :
                    <p className='font-semibold bg-yellow-200 p-3 text-center'>No reviews were added</p>
                }
            </div>

        </div>
    );
};

export default MyReviews;