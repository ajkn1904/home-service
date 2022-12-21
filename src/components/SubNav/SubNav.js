import React, { useEffect, useState } from 'react';
import SubNavBtns from '../SubNavBtns/SubNavBtns';

//sub navigation bar with service list

const SubNav = () => {
const [service, setService] = useState([])

    //loading api data
    useEffect(() => {
        fetch('https://home-service-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setService(data))
    }, []);

    return (
        <div className='flex flex-evenly gap-8 bg-gray-800 text-white font-semibold whitespace-nowrap overflow-auto scrollbar-hide'>
             {
                service.map(srvc => <SubNavBtns className='btn btn-ghost' srvc={srvc} key={srvc._id}/>)
            }
        </div>
    );
};

export default SubNav;