import React from 'react';

import img from '../../Images/R__1_-removebg-preview.png'

const HomePage = () => {
    return (
        <div className='lg:flex grid grid-cols-1 lg:grid-cols-2 w-11/12 mx-auto my-20 items-center'>
            <div className="lg:w-6/12">
                <h1 className='text-4xl font-mono font-bold text-white'>Welcome To Your <span className='text-warning'>Food Restaurant</span></h1>
                <p className='text-white my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum beatae ad obcaecati. Eos libero itaque necessitatibus hic alias magnam tempore earum modi, consequuntur repellendus odio neque ratione ex rerum tempora.</p>
                <button className="btn btn-outline btn-warning">Check Menu</button>
            </div>
            <div className="mx-5">
                <img className='rounded' src={img} alt="" />
            </div>
        </div>
    );
};

export default HomePage;