import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import img1 from '../Images/images.jpg'
import food1 from '../Images/1.jpg'
import food2 from '../Images/2.jpg'
import food3 from '../Images/3.jpg'
import food4 from '../Images/4.jpg'
import food5 from '../Images/5.jpg'


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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
                    <img className='h-56 w-64 rounded shadow ' src={img1} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className='h-56 w-64  rounded shadow' src={food1} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className='h-56 w-64  rounded shadow' src={food2} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className='h-56 w-64  rounded shadow' src={food3} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className='h-56 w-64  rounded shadow' src={food4} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className='h-56 w-64  rounded shadow' src={food5} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className='h-56 w-64  rounded shadow' src={food1} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className='h-56 w-64  rounded shadow' src={food3} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className='h-56 w-64  rounded shadow' src={img1} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className='h-56 w-64  rounded shadow' src={food1} alt="" />
                </div>
                <div className='hover:opacity-60 duration-75 hover:-translate-y-3'>
                    <img className='h-56 w-64  rounded shadow' src={food5} alt="" />
                </div>

            </Slider>
        </div>
    );
};

export default FoodSlider;