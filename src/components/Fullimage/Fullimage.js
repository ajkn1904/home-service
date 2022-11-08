import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Fullimage = ({img}) => {
    return (
        <div>
            <PhotoProvider>
            <PhotoView src={img}>
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl" style={{ height: "200px", width: "100%", objectFit: 'cover'}} />
                </figure>
            </PhotoView>
        </PhotoProvider>
            
        </div>
    );
};

export default Fullimage;