import React from 'react';
import Err from '../../Assets/ErrorPic/Err.jpg'

const ErrorPage = () => {
    return (
        <div className='error'>
            <img src={Err} alt="" />
        </div>
    );
};

export default ErrorPage;