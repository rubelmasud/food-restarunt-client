import React from 'react';
import img from '.././Images/vincentsinterjers.png'

const AboutUs = () => {
    return (
        <div className='bg-slate-100 w-11/12  mx-auto rounded mb-12'>
            <h1 className='text-center text-gray-800 pt-6 text-3xl font-bold underline my-12'>About Us!!!</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-12 gap-4 pb-3">
                <div className="w-full">
                    <img className='rounded' src={img} alt="" />
                </div>
                <div className="w-full">
                    <h3 className='text-2xl mb-6 font-semibold font-sans'>Rikki Tikki Take-Out</h3>
                    <p className='text-gray-500'> This is the story of the great war that Rikki-tikki-tavi fought single-handed, through the bath-rooms of the big bungalow in Segowlee cantonment. Darzee, the tailor-bird, helped him, and Chuchundra, the musk-rat, who never comes out into the middle of the floor, but always creeps round by the wall, gave him advice; but Rikki-tikki did the real fighting.

                        He was a mongoose, rather like a little cat in his fur and his tail, but quite like a weasel in his head and his habits. His eyes and the end of his restless nose were pink; he could scratch himself anywhere he pleased, with any leg, front or back, that he chose to use; he could fluff up his tail till it looked like a bottle-brush, and his war-cry, as he scuttled through the long grass, was: ``Rikk-tikk-tikki-tikki-tchk!'' </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;