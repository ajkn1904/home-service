import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <button className="btn btn-ghost text-red-700 loading"></button>
    }

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;

/*
const PrivateRoute = ({children}) => {
    
    if(loading){
        return <div>Loading...</div>
    }

    if(user && user.uid){
        return children;
    }
    else{
        return (
            /* navigating users current location /
           <Navigate to='/login' state={{from: location}} replace></Navigate>
        );
    }
};*/