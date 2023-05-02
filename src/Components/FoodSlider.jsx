import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import img1 from '../Images/images.jpg'

const FoodSlider = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings}>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className=' rounded shadow ' src={img1} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className=' rounded shadow' src={img1} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className=' rounded shadow' src={img1} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className=' rounded shadow' src={img1} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className=' rounded shadow' src={img1} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className=' rounded shadow' src={img1} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className=' rounded shadow' src={img1} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className=' rounded shadow' src={img1} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className=' rounded shadow' src={img1} alt="" />
                </div>

            </Slider>
        </div>
    );
};

export default FoodSlider;