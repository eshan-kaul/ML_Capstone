//TODO add the project poster to this page. Could probably be an image or something.
import React from "react";
import poster from '../poster.jpg'

const Poster = () => {
    return (
        <div className='main-container' >
            <img src={poster} />
        </div>
    );
};
export default Poster;