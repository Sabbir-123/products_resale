import React from 'react';
import { Link } from 'react-router-dom';

const BannerItems = ({slide}) => {
    const {image,id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img '>
            <img src={image} alt="" className="w-full rounded-xl" />
        </div>
        <div className="absolute hidden lg:block md:block justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
            <Link to={'/login'}>
            <button className="btn btn-secondary mr-5">Log In</button>
            </Link>
            <Link to={'/register'}>
            <button className="btn btn-accent ">Register</button>
            </Link>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${prev}`} className="btn btn-circle border-none bg-gray-600 mr-5">❮❮</a>
            <a href={`#slide${next}`} className="btn btn-circle border-none bg-gray-600">❯❯</a>
        </div>
    </div>
    );
};

export default BannerItems;




