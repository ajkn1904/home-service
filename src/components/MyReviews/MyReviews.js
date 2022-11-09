import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard,/MyReviewCard';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [myreview, setMyreview] = useState([])

    const url = `https://home-service-server.vercel.app/myreviews?email=${user.email}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyreview(data))
    }, [user?.email])


    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-20'>My All Reviewes ({myreview.length})</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-12 sm:mx-12 md:mx-14 lg:mx-20 my-20'>
                {
                    myreview.map(review => <MyReviewCard review={review} key={review._id}></MyReviewCard>)
                }
            </div>

        </div>
    );
};

export default MyReviews;