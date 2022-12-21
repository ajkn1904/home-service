import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard,/MyReviewCard';

const MyReviews = () => {
    const {user, userSignOut} = useContext(AuthContext);
    const [myreview, setMyreview] = useState([])
    useTitle('My Reviews')          //dynamic title


    //fetching api data

    useEffect(() => {
        fetch(`https://home-service-server.vercel.app/myreviews?email=${user.email}`, {
            headers: {
                //verifying with JWT token
                authorization: `Bearer ${localStorage.getItem('hmSrvcToken')}`          
            }
        })
        .then(res =>{ 
            if(res.status === 401 || res.status === 403){           
                //removing JWT token with unauthorized access and signing out
                localStorage.removeItem('hmSrvcToken')      
                return userSignOut()
            }
            return res.json()
        })
        .then(data => setMyreview(data))
    }, [user?.email, userSignOut])



    //deleting a document from the database
    const handleDlt = id => {
        const doDlt = window.confirm('Do you want to delete this review?');

        if(doDlt){
            fetch(`https://home-service-server.vercel.app/deleteReview/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('hmSrvcToken')}`         // verifying  with JWT token
                }
            })
            .then(res => res.json())
            .then(data =>{ 
                console.log(data)
                if(data.deletedCount === 1){
                   toast.error("Deleted Successfully")
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
               
               {/* conditional rendering */}
               
                {(myreview.length > 0) ? 
                <>
                    {
                        myreview.map(review => <MyReviewCard review={review} key={review._id} handleDlt={handleDlt}></MyReviewCard>
                    )
                    }
                   
                   </>
                    :
                    <p className='font-semibold bg-yellow-200 p-3 text-center'>No reviews were added</p>
                }
            </div>

        </div>
    );
};

export default MyReviews;