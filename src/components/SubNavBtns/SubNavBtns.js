import React from 'react';
import { Link } from 'react-router-dom';


//button component of sub navigation bar
const SubNavBtns = ({srvc}) => {
    return (
        <div>
            <button className='btn btn-ghost'>
                <Link to={`/services/${srvc._id}`}> {srvc.name} </Link>
            </button>
        </div>
    );
};

export default SubNavBtns;