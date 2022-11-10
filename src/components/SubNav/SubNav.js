import React, { useEffect, useState } from 'react';

const SubNav = () => {
const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://home-service-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setService(data))
    }, []);

    return (
        <div className='flex flex-evenly flex-wrap gap-8 bg-blue-400 text-white font-semibold'>
             {
                service.map(srvc => <button className='btn btn-ghost'> {srvc.name} </button>)
            }
        </div>
    );
};

export default SubNav;