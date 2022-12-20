import React from 'react';
import img1 from '../../../Assets/Banner/img1.png'
import img2 from '../../../Assets/Banner/img2.png'
import img3 from '../../../Assets/Banner/img3.png'
import BannerItems from './BannerItems';
const Banner = () => {


const sliderImage = [
    {
        image: img3,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img1,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img2,
        prev: 2,
        id: 3,
        next: 1
    }
]

    return (
        <div className="carousel py-10 mx-5 ">
        {
            sliderImage.map(slide => <BannerItems key={slide.id} slide={slide}>

            </BannerItems>)
        }
        
    </div>
    );
};

export default Banner;
